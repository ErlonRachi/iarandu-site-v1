---
project: iarandu
register: spec
locale: pt-BR
status: v1 — spec aprovada, pré-implementação
approved_on: 2026-05-24
supersedes:
  - PRODUCT.md §"Site v1 — arquitetura aprovada" §10 (form 3 campos free-text → mailto)
  - PRODUCT.md §"Constraints técnicos" hosting (intenção "Cloudflare Pages" → realidade "Netlify", confirmado 2026-05-24)
references:
  - PRODUCT.md (voz, personas, modos de entrega)
  - DESIGN.v2.md (sistema visual)
  - ClickUp list "Pipeline Comercial" (id 901416673935)
---

# FORM.v1 — Formulário de contato roteado por tipo de problema

> Substitui o spec anterior (3 campos livres → mailto) por roteamento por intenção, com persistência no ClickUp (Pipeline Comercial · Fonte=Inbound). Email fallback preservado: lead nunca se perde.

## Decisões aprovadas

| Decisão | Escolha | Por quê |
|---|---|---|
| CRM destino | ClickUp · Pipeline Comercial · Fonte=`Inbound` | Funil já vive lá; sem fragmentação |
| Segmentação | Tipo de problema (6 botões) | Voz Marina; ranqueado por chance de conversão |
| Friction | Botões + email + mensagem livre (two-step inline) | Mobile-first; lead contactável imediato |
| Infra | Netlify Function | Backend serverless no hosting atual; zero dependência Cloudflare |
| Anti-spam | Honeypot + triagem manual no ClickUp | Volume baixo + Eduardo já triage todo lead; CAPTCHA é overkill em v1 |
| Analytics | **Nenhum em v1** | Mantém spec original do PRODUCT.md; ClickUp já mede inbound count e conversão por tipo de problema |
| Notificação | Task no ClickUp + email pra we@iarandu.tech | Redundância: lead nunca se perde |

## Botões — ordenados por chance de conversão

| # | Slug (ClickUp) | Label (Marina vê) |
|---|---|---|
| 1 | `ia-na-minha-area` | IA na minha área de negócio |
| 2 | `ia-pro-time` | Dar IA pro meu time usar |
| 3 | `automacao` | Automatizar trabalho manual repetitivo |
| 4 | `tirar-peso-ti` | Tirar peso da fila da TI |
| 5 | `dados-nao-batem` | Dados que não batem entre sistemas |
| 6 | `governanca-ia` | Governança e compliance em IA |

Slugs são IDs estáveis (enviados ao ClickUp). Labels editáveis livremente em `src/data/funnel-options.ts` — mudar o label não quebra histórico de leads.

## Fluxo UX (mobile-first, inline, sem modal)

```
State 1 — Pergunta + 6 botões em grid (2×3 mobile · 3×2 desktop)
  H2: "Onde tá o nó que você quer destravar?"
  Botões em ordem da tabela acima

State 2 — Botão escolhido + form inline (ease-out-quart 280ms)
  Botão selecionado: destaque (border + accent urucum)
  Outros: fade 40% opacity (permanecem clicáveis pra trocar)
  Reveal abaixo:
    – input email (type=email, required)
    – textarea "conte rápido" (240 chars, opcional)
    – [enviar]   "trocar de problema" (link voltar pro State 1)
    – Microcopy LGPD

State 3 — Sucesso (modo Herzog)
  Esconde form. Mostra:
    "Recebemos. Eduardo responde em até 1 dia útil."
    Microcopy: "Se preferir, escreva direto: we@iarandu.tech"

State 4 — Erro
  "Algo travou. Escreva pra we@iarandu.tech ou tente de novo."
  [tentar de novo]   mailto:we@iarandu.tech (link)
```

## Editorial — copy proposto

| Elemento | Texto |
|---|---|
| H2 da seção | Onde tá o nó que você quer destravar? |
| Submit | enviar |
| Voltar | trocar de problema |
| Sucesso | Recebemos. Eduardo responde em até 1 dia útil. |
| Microcopy sucesso | Se preferir, escreva direto: we@iarandu.tech |
| Microcopy LGPD | Ao enviar, autoriza o time da Iarandu a entrar em contato. Não usamos pra mais nada, não compartilhamos. |
| Erro | Algo travou. Escreva pra we@iarandu.tech ou tente de novo. |

Voz: banlist do PRODUCT.md vale integral. Sem "jornada", "transforme", "potencialize", emojis, exclamação.

## Contrato da API

`POST /api/lead`

```json
{
  "tipoProblema": "ia-na-minha-area | ia-pro-time | automacao | tirar-peso-ti | dados-nao-batem | governanca-ia",
  "email": "string (RFC 5322)",
  "mensagem": "string ≤ 240 chars (opcional)",
  "origem": "string (URL completa)",
  "_hp": "string (honeypot — deve ser vazio)"
}
```

| Status | Body | Significado |
|---|---|---|
| 200 | `{ok: true}` | Task criada no ClickUp OU email enviado — pelo menos um. Também retornado **silenciosamente em honeypot hit** (bot não sabe que foi detectado) |
| 400 | `{error: 'validation', details}` | Payload inválido |
| 500 | `{error: 'backend'}` | ClickUp + email ambos falharam |

## Payload da task no ClickUp

| Campo | Valor |
|---|---|
| Lista | Pipeline Comercial (901416673935) |
| Nome | `[empresa derivada] — inbound site` |
| Descrição | Mensagem do lead (markdown) + metadados (URL origem, IP region, timestamp ISO) |
| Status | `lead` |
| Owner Comercial | Eduardo Campos (default — id 100266005) |
| Fonte | `Inbound` |
| Tags | `business-development`, `inbound-site` |
| Tipo de Problema *(custom)* | label do botão escolhido |
| Email Contato *(custom)* | input do form |
| Mensagem Inicial *(custom)* | textarea (também no description) |
| URL Origem *(custom)* | URL completa de onde veio o submit |

### Derivação de empresa a partir do email

- `marina@martinbrower.com` → "Martin Brower"
- `marina@corp.empresa.com.br` → "Empresa" (pega o compound mais à direita antes do TLD composto)
- Domínios genéricos (`gmail`, `hotmail`, `outlook`, `yahoo`, `icloud`, `proton`, `uol`, `bol`, `terra`) → "(empresa não informada)"

## Custom fields a criar no ClickUp

Adicionar na list **Pipeline Comercial** (id 901416673935):

| Nome | Tipo | Opções / config |
|---|---|---|
| Tipo de Problema | Dropdown | IA na minha área de negócio · Dar IA pro meu time usar · Automatizar trabalho manual repetitivo · Tirar peso da fila da TI · Dados que não batem entre sistemas · Governança e compliance em IA |
| Email Contato | Email | — |
| Mensagem Inicial | Long Text | — |
| URL Origem | Short Text | — |

## Anti-spam

- **Honeypot field hidden** `_hp` — campo escondido via CSS (`display: none`) + `tabindex="-1"` + `aria-hidden="true"`. Humanos não veem, bots tendem a preencher. Hit → backend retorna 200 silenciosamente sem criar task nem mandar email (bot pensa que funcionou, não escala).
- **CAPTCHA:** *omitido em v1.* Volume esperado é baixo (audiência targeted, sem SEO agressivo); Eduardo já triage todo lead no ClickUp; spam = deletar 5-20 tasks/mês em 30s cada. Add hCaptcha em v2 se virar problema real (~30 min de implementação).
- **Rate limit:** *omitido em v1.* Honeypot + low volume suficiente. Defesa em camadas (Netlify Blobs / Upstash Redis) entra em v2 só se necessário.

## Analytics

**Nenhum em v1**, conforme PRODUCT.md §Constraints técnicos original. ClickUp serve de fonte única de métricas no funil:
- Volume inbound/mês: count de tasks com Fonte=`Inbound`
- Conversão por tipo de problema: cross-tab Status × Tipo de Problema
- Velocidade de resposta: tempo entre criação da task e primeira mudança de status

Se em v2 quisermos medir abandono click→submit, escolher entre Plausible ou Netlify Analytics (ambos cookieless, ~$9/mês). Sem Cloudflare Web Analytics — decisão de zerar dependência CF.

## Environment variables (Netlify)

| Var | Scope | Como obter |
|---|---|---|
| `CLICKUP_TOKEN` | server | ClickUp → Settings → Apps → Generate API Token |
| `CLICKUP_LIST_ID` | server | `901416673935` (fixo) |
| `RESEND_API_KEY` | server | resend.com |
| `MAIL_TO` | server | `we@iarandu.tech` |

## Performance

- Form hidratado client-side só na seção Fechamento (Astro island)
- Budget JS adicional: ~3KB (state machine + fetch). Nada de CAPTCHA/analytics em v1
- Total página segue **< 100KB JS pós-hydration** (orçamento PRODUCT.md preservado)
- Sem CLS no reveal (heights reservadas via `min-height`)
- LCP < 1.5s em 4G mantido

## Acessibilidade

- WCAG AA mantido
- Botões com `role="radio"` em `radiogroup` (são opções mutuamente exclusivas)
- Form com labels visíveis ou `aria-label` em todos campos
- Foco visível em todos elementos interativos (sem `outline: none`)
- Mensagens de erro associadas via `aria-describedby`

## Versionamento de arquivos

| Arquivo | Status |
|---|---|
| `src/components/sections/Fechamento.v5.astro` | **Intocado** — produção atual |
| `src/components/sections/Fechamento.v6.astro` | **Novo** — esta spec |
| `src/data/funnel-options.ts` | **Novo** — config dos 6 botões |
| `netlify/functions/lead.ts` | **Novo** — backend (Netlify Function) |
| `netlify.toml` | **Novo ou atualizado** — declara `functions = "netlify/functions"` |
| `src/pages/iter7.astro` | **Novo** — preview pré-promoção |
| `src/pages/index.astro` | **Atualizado só na promoção** — passa a importar Fechamento.v6 |

## Open questions (resolver na implementação)

1. **Múltiplos leads do mesmo email:** criar nova task ou comentar na existente? **Default:** nova task; Eduardo decide merge no triage.
2. **Domínio do email parece falso (typo):** validar via DNS MX? **Default v1:** não — atrito > benefício; Eduardo identifica no contato.

*(Resend escolhido em 2026-05-24, decisão registrada — não é mais open question.)*

## Não-objetivos (escopo explicitamente fora desta versão)

- Chatbot / livechat
- Multi-step wizard (mais que 2 estados)
- Email marketing / nurture
- Lead scoring automático
- i18n (mantém PT-BR único, conforme PRODUCT.md)
- Integração com Notion (knowledge layer, não pipeline)

## Plano de entrega — 3 PRs sequenciais

1. **PR1 — Backend** (depende: custom fields no ClickUp + env vars provisionados no Netlify)
   `netlify/functions/lead.ts` + `netlify.toml` se necessário + testes via curl
2. **PR2 — UI**
   `funnel-options.ts` + `Fechamento.v6.astro` + `iter7.astro` (preview)
3. **PR3 — Promote**
   Após review em `/iter7`: `index.astro` importa Fechamento.v6

---

*Spec aprovada por Erlon em 2026-05-24. Implementação Heph.*
