# Iarandu — Build Decisions & Bios (Round 6)

## Decisões de build

| Eixo | Decisão | Notas |
|---|---|---|
| **Form infra** | **Mailto fallback** | Formulário gera `mailto:we@iarandu.tech?subject=…&body=…`. Zero infra. Cost: cai conversão se Marina estiver em browser corporativo sem mail client; aceitável para v1. |
| **Hosting** | **Cloudflare Pages** | PoP em São Paulo, mais rápido para Marina. Free tier suficiente. |
| **Analytics** | **Nenhum em v1** | Sem cookie banner, sem fricção. Reabrir em v2 se fizer sentido (Plausible). |
| **Sócios na página** | **Foto + bio** | Erlon vai trazer fotos (`duda.jpg`, `mauro.jpg`, `erlon.jpg` em `_assets/team/`). Em ausência das fotos no momento de build, fica placeholder discreto até elas chegarem. |

## Mini-bios dos sócios (rascunho a refinar)

### Mauro Resende — Tecnologia & Infraestrutura em nuvem
**Bullets recebidos:**
- Veterano da Google Cloud, mais de uma década no Google LATAM.
- Cuida de infraestrutura, eficiência de código.
- Experiência como CTO em diversas startups brasileiras.

**Rascunho v1 (a aprovar):**
> Mais de uma década no Google Cloud LATAM. CTO de startups brasileiras. Cuida da infraestrutura, da eficiência do código e do que sustenta sistema sob carga real.

### Eduardo "Duda" Campos — Produtos digitais
**Bullets recebidos:**
- CPO da Iarandu.
- Revolucionou jornadas digitais em Mercado Libre, Coca-Cola, Centauro.
- Presença extensa em LATAM.
- Responsável pela jornada de IA da TOTVS.

**Rascunho v1 (a aprovar):**
> CPO da Iarandu. Conduziu jornadas digitais em Mercado Libre, Coca-Cola, Centauro. Atualmente lidera a jornada de IA da TOTVS.

### Erlon Rachi — Inteligência artificial & dados
**Bullets disponíveis no brief:**
- Expert em IA e dados.
- Carreira em CI&T, Kaizen Gaming, Google.
- Sediado em Milão.

**Rascunho v1 (a aprovar — Erlon reescreve antes de ship):**
> Expert em IA e dados. Carreira em Google, Kaizen Gaming, CI&T. Sediado em Milão.

> **Pendente:** Erlon precisa fornecer/aprovar sua própria bio. Os bullets atuais cobrem só carreira; falta o ângulo pessoal que dá liga (interesse, missão, lente própria). Não bloquear — drafted version vai e Erlon edita.

---

## ⚠️ Pendência de atribuição — TOTVS

A bio do Duda diz: *"Atualmente lidera a jornada de IA da TOTVS."*

A lista canônica de clientes da Iarandu (em `03-market-cases-language.md`) inclui **TOTVS** como um dos **3 clientes ativos**.

Em `05-deal-size-and-cases.md` registrei: *"Quem fez este trabalho foi meu sócio e podemos utilizar o case para comunicar com outros clientes."*

**Cenário 1 (provável):** Duda lidera o trabalho da TOTVS **dentro da Iarandu**. TOTVS é cliente da Iarandu. A bio do Duda só explicita quem está à frente.

**Cenário 2:** Duda lidera o trabalho da TOTVS **como contrato individual / pré-Iarandu**, e a Iarandu pode referenciar como "trabalho de sócio" mas **não** apresenta TOTVS na grade de cases ao lado de ANSN e Chiefs.

**Pergunta para Erlon (não bloquear v1, mas resolver antes de publicar a página de cases):** cenário 1 ou cenário 2?

Default que vou seguir até resposta: **cenário 1** — TOTVS aparece como cliente Iarandu na grade de cases, com placeholder de texto.

---

## Itens ainda em aberto (não bloqueantes para PRODUCT.md / DESIGN.md)

- **Hex values precisos** dos quatro tons (verde-musgo, azul-nanquim, branco-papel, urucum). Vou propor valores em `DESIGN.md`; Erlon pode calibrar na primeira preview.
- **Institutional deck PDF.** Útil se chegar antes do build — checa contradições com a copy proposta. Não bloqueia.
- **Aprovação por escrito** dos 3 clientes (TOTVS, ANSN, Chiefs Group) sobre o que pode ser publicado nos cases. **Cases ficam com placeholder até essas aprovações.**
- **Erlon refina sua própria bio** antes do ship.
