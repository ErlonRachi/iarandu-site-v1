// Iarandu site — inbound lead handler
// POST /.netlify/functions/lead  (alias /api/lead via netlify.toml)
// Fluxo: valida → honeypot → ClickUp task (Pipeline Comercial · Inbound) → email pra we@iarandu.tech
// Falha parcial não derruba o lead: basta ClickUp OU email sucederem.

declare const process: { env: Record<string, string | undefined> };

const CLICKUP_API = "https://api.clickup.com/api/v2";
const RESEND_API = "https://api.resend.com/emails";

const OWNER_EDUARDO_ID = 100266005;
const FONTE_INBOUND_OPTION_ID = "7794015a-d1b1-491f-9fee-0e1a2ad9aa1d";

const CUSTOM_FIELD_IDS = {
  tipoProblema: "ffdfc089-b610-420d-89fb-820c44a42f11",
  emailContato: "2b492c69-5cc4-46b4-a6ad-911c195ab2b1",
  mensagemInicial: "25afdf81-be2f-474b-8c77-d7147176ffd3",
  urlOrigem: "680aacc9-5ba5-4027-999b-ce56675c8d62",
  fonte: "8456d804-bd24-4992-9e56-7f88ec19614c",
} as const;

const TIPO_PROBLEMA_OPTIONS = {
  "ia-na-minha-area": {
    optionId: "ffaac461-af45-4b94-b972-5c484ef9df36",
    label: "IA na minha área de negócio",
  },
  "ia-pro-time": {
    optionId: "b7f19db2-2b7f-423a-860d-d49e1b01a286",
    label: "Dar IA pro meu time usar",
  },
  "automacao": {
    optionId: "78980f37-232a-4ee2-a46b-a10e1296447a",
    label: "Automatizar trabalho manual repetitivo",
  },
  "tirar-peso-ti": {
    optionId: "c7898707-9cf2-4907-8657-a92c9eae3747",
    label: "Tirar peso da fila da TI",
  },
  "dados-nao-batem": {
    optionId: "e511956d-bdc9-4973-82c4-d68ed9ec45a3",
    label: "Dados que não batem entre sistemas",
  },
  "governanca-ia": {
    optionId: "3c0d66d3-c7ca-4b58-a8a4-51ef0ce70195",
    label: "Governança e compliance em IA",
  },
} as const;

type TipoProblemaSlug = keyof typeof TIPO_PROBLEMA_OPTIONS;

const GENERIC_EMAIL_DOMAINS = new Set([
  "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com",
  "proton.me", "protonmail.com", "uol.com.br", "bol.com.br", "terra.com.br",
  "live.com", "msn.com", "ymail.com",
]);

interface LeadPayload {
  tipoProblema: TipoProblemaSlug;
  email: string;
  mensagem: string;
  origem: string;
  honeypot: string;
}

interface Env {
  CLICKUP_TOKEN: string;
  CLICKUP_LIST_ID: string;
  RESEND_API_KEY: string;
  MAIL_TO: string;
}

function deriveCompany(email: string): string {
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  if (!domain || GENERIC_EMAIL_DOMAINS.has(domain)) return "(empresa não informada)";

  const parts = domain.split(".");
  let main: string;
  if (parts.length <= 2) {
    main = parts[0] ?? "";
  } else if (parts[parts.length - 1] === "br" && parts[parts.length - 2] === "com") {
    main = parts[parts.length - 3] ?? "";
  } else {
    main = parts[parts.length - 2] ?? "";
  }
  return main ? main.charAt(0).toUpperCase() + main.slice(1) : "(empresa não informada)";
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string"
    && value.length <= 254
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

type ValidationResult =
  | { ok: true; data: LeadPayload }
  | { ok: false; details: string };

function validate(raw: unknown): ValidationResult {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, details: "Body must be a JSON object" };
  }
  const b = raw as Record<string, unknown>;

  if (typeof b.tipoProblema !== "string" || !(b.tipoProblema in TIPO_PROBLEMA_OPTIONS)) {
    return { ok: false, details: "Invalid tipoProblema" };
  }
  if (!isValidEmail(b.email)) {
    return { ok: false, details: "Invalid email" };
  }
  if (b.mensagem != null && (typeof b.mensagem !== "string" || b.mensagem.length > 240)) {
    return { ok: false, details: "mensagem must be string ≤ 240 chars" };
  }
  if (typeof b.origem !== "string" || b.origem.length === 0 || b.origem.length > 2048) {
    return { ok: false, details: "Invalid origem" };
  }

  return {
    ok: true,
    data: {
      tipoProblema: b.tipoProblema as TipoProblemaSlug,
      email: b.email,
      mensagem: typeof b.mensagem === "string" ? b.mensagem : "",
      origem: b.origem,
      honeypot: typeof b._hp === "string" ? b._hp : "",
    },
  };
}

async function createClickUpTask(
  payload: LeadPayload,
  env: Env,
): Promise<{ ok: true; taskUrl: string } | { ok: false; error: string }> {
  const tipo = TIPO_PROBLEMA_OPTIONS[payload.tipoProblema];
  const empresa = deriveCompany(payload.email);

  const description = [
    `**Tipo de problema:** ${tipo.label}`,
    `**Email:** ${payload.email}`,
    `**Empresa derivada:** ${empresa}`,
    ``,
    `**Mensagem:**`,
    payload.mensagem || "_(sem mensagem)_",
    ``,
    `---`,
    `Origem: ${payload.origem}`,
    `Recebido: ${new Date().toISOString()}`,
  ].join("\n");

  const body = {
    name: `${empresa} — inbound site`,
    description,
    status: "lead",
    assignees: [OWNER_EDUARDO_ID],
    tags: ["business-development", "inbound-site"],
    custom_fields: [
      { id: CUSTOM_FIELD_IDS.tipoProblema, value: tipo.optionId },
      { id: CUSTOM_FIELD_IDS.emailContato, value: payload.email },
      { id: CUSTOM_FIELD_IDS.mensagemInicial, value: payload.mensagem },
      { id: CUSTOM_FIELD_IDS.urlOrigem, value: payload.origem },
      { id: CUSTOM_FIELD_IDS.fonte, value: FONTE_INBOUND_OPTION_ID },
    ],
  };

  try {
    const res = await fetch(`${CLICKUP_API}/list/${env.CLICKUP_LIST_ID}/task`, {
      method: "POST",
      headers: {
        Authorization: env.CLICKUP_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: `ClickUp ${res.status}: ${text.slice(0, 300)}` };
    }
    const task = await res.json() as { url?: string };
    return { ok: true, taskUrl: task.url ?? "" };
  } catch (err) {
    return { ok: false, error: `ClickUp fetch error: ${(err as Error).message}` };
  }
}

async function sendEmail(
  payload: LeadPayload,
  taskUrl: string | undefined,
  env: Env,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const tipo = TIPO_PROBLEMA_OPTIONS[payload.tipoProblema];
  const empresa = deriveCompany(payload.email);

  const text = [
    `Owner: Eduardo Campos`,
    ``,
    `Empresa derivada: ${empresa}`,
    `Email: ${payload.email}`,
    `Tipo de problema: ${tipo.label}`,
    ``,
    `Mensagem:`,
    payload.mensagem || "(sem mensagem)",
    ``,
    `---`,
    taskUrl ? `Task ClickUp: ${taskUrl}` : `(falha ao criar task no ClickUp — triagem manual necessária)`,
    `Origem: ${payload.origem}`,
    `Recebido: ${new Date().toISOString()}`,
  ].join("\n");

  const body = {
    from: "Iarandu Inbound <onboarding@resend.dev>",
    to: env.MAIL_TO,
    reply_to: payload.email,
    subject: `[Iarandu] Inbound site — ${empresa}`,
    text,
  };

  try {
    const res = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const t = await res.text();
      return { ok: false, error: `Resend ${res.status}: ${t.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: `Resend fetch error: ${(err as Error).message}` };
  }
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export default async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }

  const env: Env = {
    CLICKUP_TOKEN: process.env.CLICKUP_TOKEN ?? "",
    CLICKUP_LIST_ID: process.env.CLICKUP_LIST_ID ?? "",
    RESEND_API_KEY: process.env.RESEND_API_KEY ?? "",
    MAIL_TO: process.env.MAIL_TO ?? "",
  };
  const missing = Object.entries(env).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length > 0) {
    console.error("Missing env vars:", missing);
    return jsonResponse({ error: "backend", details: "missing env" }, 500);
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return jsonResponse({ error: "validation", details: "Invalid JSON" }, 400);
  }

  const v = validate(raw);
  if (!v.ok) {
    return jsonResponse({ error: "validation", details: v.details }, 400);
  }

  if (v.data.honeypot.trim() !== "") {
    return jsonResponse({ ok: true }, 200);
  }

  const clickupResult = await createClickUpTask(v.data, env);
  const emailResult = await sendEmail(
    v.data,
    clickupResult.ok ? clickupResult.taskUrl : undefined,
    env,
  );

  if (!clickupResult.ok) console.error("ClickUp failed:", clickupResult.error);
  if (!emailResult.ok) console.error("Email failed:", emailResult.error);

  if (!clickupResult.ok && !emailResult.ok) {
    return jsonResponse({ error: "backend", details: "Failed to record lead" }, 500);
  }

  return jsonResponse({ ok: true }, 200);
};
