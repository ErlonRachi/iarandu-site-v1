// Iarandu inbound form — 6 botões de tipo de problema.
// Slugs são IDs estáveis (enviados ao backend, persistem em ClickUp como option_id).
// Labels são editoriais: mudar aqui não quebra histórico de leads.
// Ordem deliberada: ranqueada por chance de conversão (FORM.v1.md).

export interface FunnelOption {
  slug: string;
  label: string;
}

export const FUNNEL_OPTIONS: readonly FunnelOption[] = [
  { slug: "ia-na-minha-area", label: "IA na minha área de negócio" },
  { slug: "ia-pro-time", label: "Dar IA pro meu time usar" },
  { slug: "automacao", label: "Automatizar trabalho manual repetitivo" },
  { slug: "tirar-peso-ti", label: "Tirar peso da fila da TI" },
  { slug: "dados-nao-batem", label: "Dados que não batem entre sistemas" },
  { slug: "governanca-ia", label: "Governança e compliance em IA" },
  { slug: "outra-coisa", label: "Outra coisa" },
] as const;
