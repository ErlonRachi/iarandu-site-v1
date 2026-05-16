---
name: Iarandu
description: Caderno de cultura, em tinta-nanquim — landing v1 da consultoria de IA Iarandu.
colors:
  papel-cream: "#F1ECE0"
  papel-soft: "#F7F3EA"
  verde-musgo: "#2F4030"
  verde-musgo-deep: "#1F2C22"
  azul-nanquim: "#1B2A3A"
  azul-nanquim-deep: "#0E1A26"
  azul-nanquim-deeper: "#0A131C"
  azul-header: "#0B1720"
  azul-card: "#132030"
  linha-azul-strong: "#1E3348"
  urucum: "#C25E3A"
  urucum-fresh: "#D6663A"
  azul-ceu: "#7BB1CF"
  verde-folha: "#8FBE92"
  ouro: "#C8A96E"
  ouro-fresh: "#D4B97D"
  ink-muted-cool: "#7A8E9B"
typography:
  display-xl:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(48px, 7.6vw, 112px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: "'opsz' 144, 'SOFT' 30"
  display-lg:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(40px, 5.4vw, 76px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.018em"
    fontVariation: "'opsz' 144, 'SOFT' 30"
  display-md:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(32px, 3.8vw, 52px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.016em"
    fontVariation: "'opsz' 144, 'SOFT' 30"
  display-sm:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(26px, 2.8vw, 40px)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.012em"
    fontVariation: "'opsz' 96, 'SOFT' 30"
  headline:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 30px)"
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: "-0.008em"
  title:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.005em"
  body-lg:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.4vw, 20px)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "0.003em"
  body:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.15vw, 17px)"
    fontWeight: 400
    lineHeight: 1.66
    letterSpacing: "0.003em"
  body-sm:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter Tight, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  none: "0"
  pill: "2px"
  full: "999px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "16px"
  s-4: "24px"
  s-5: "40px"
  s-6: "64px"
  s-7: "104px"
  s-8: "168px"
  s-9: "272px"
components:
  button-primary:
    backgroundColor: "{colors.urucum}"
    textColor: "{colors.papel-cream}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "18px 32px"
  button-primary-hover:
    backgroundColor: "{colors.urucum-fresh}"
    textColor: "{colors.papel-cream}"
    rounded: "{rounded.pill}"
    padding: "18px 32px"
  button-ghost-gold:
    backgroundColor: "transparent"
    textColor: "{colors.ouro}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "7px 18px"
  button-ghost-gold-hover:
    backgroundColor: "{colors.azul-header}"
    textColor: "{colors.ouro}"
    rounded: "{rounded.pill}"
    padding: "7px 18px"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.papel-cream}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: "12px 0"
  card-case:
    backgroundColor: "{colors.azul-card}"
    textColor: "{colors.papel-cream}"
    rounded: "{rounded.none}"
    padding: "36px 32px"
  pill-status-andamento:
    backgroundColor: "{colors.azul-card}"
    textColor: "{colors.ouro}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "5px 14px"
  pill-status-entregue:
    backgroundColor: "{colors.azul-card}"
    textColor: "{colors.verde-folha}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "5px 14px"
  sticky-header:
    backgroundColor: "{colors.azul-header}"
    textColor: "{colors.papel-cream}"
    rounded: "{rounded.none}"
    height: "50px"
---

# Design System: Iarandu

> **Nota:** Este é o `DESIGN.v2.md` — alternativa ao `DESIGN.md` original, no formato Stitch (6 seções fixas + frontmatter normativo). O `DESIGN.md` original (estrutura custom PT-BR) permanece intacto como source of truth atual. Esta versão pode ser promovida ou descartada sem perda.

## 1. Overview

**Creative North Star: "O Caderno de Cultura"**

Marina abre o site no celular, em 4 minutos, entre uma reunião e outra. Já viu mil sites de SaaS de IA. Nunca viu um que parecesse um caderno de cultura. Este parece. Tipografia editorial pesada (Fraunces ceremonial, Inter Tight de trabalho), hierarquia em escala generosa, respiração calibrada entre seções. **A página se lê como artigo longo de revista, não como pitch de produto.**

A base é noturna: a tela inteira drenched em azul-nanquim profundo (`#0E1A26`), com a tinta cor de papel (`#F1ECE0`) como ink. Não é dark mode utilitário, é nanquim chinês sobre papel-creme, invertido. As outras cores nomeadas (verde-musgo, urucum, ouro, azul-céu, verde-folha) aparecem **uma por vez por momento**, marcando uma única palavra-chave, nunca decorando.

O sistema rejeita explicitamente: SaaS-template roxo-azul-degradê, hero-metric template (número gigante + 3 stats), card-grid de "nossos serviços" com 4 cards iguais com ícone, gradientes coloridos em headline, stock photography, glassmorphism decorativo, animação que infla ou puxa atenção, "nós, na Iarandu, acreditamos que…".

**Key Characteristics:**
- **Noturno drenched.** Fundo `#0E1A26` em toda a página. Variação de profundidade vem da matiz da superfície (`surface-1..4`), não de sombras.
- **Tipografia editorial cerimonial.** Fraunces 700 com `opsz` 144 e `SOFT` 30 nos manifestos; Inter Tight 400/500/600 no trabalho diário.
- **Uma cor por momento.** Em qualquer seção, exatamente uma palavra recebe acento (urucum, azul-céu, verde-folha ou ouro). A escassez é a força.
- **Cantos crispos.** `border-radius: 0` em praticamente tudo. Exceção: 2px no CTA primário; 999px em status pills.
- **Movimento contemplativo.** Curva única `cubic-bezier(0.22, 1, 0.36, 1)`. Reveals de 800 a 1100ms, executados uma vez ao entrar em viewport, jamais em loop.
- **Curvas vivas no fundo.** SVGs com `stroke-dashoffset` desenham rios e curvas logarítmicas ao revelar seções narrativas: único momento de presença não-textual.

## 2. Colors

A paleta tem cores nomeadas da cosmologia da marca (rio, floresta, pigmento, nuvem) e três acentos auxiliares introduzidos em v11 para densidade informacional sem ruído cromático. Tudo sobre superfície drenched de azul-nanquim.

### Primary
- **Urucum** (`#C25E3A`, `oklch(57% 0.130 35)`): Pigmento *Bixa orellana*. Acento de pontuação primário. Aparece no CTA principal, no link de e-mail e como tittle do `ı` no logo. Cor de ação consumada, com peso visual suficiente para sustentar carga semântica única na página.
- **Urucum Fresh** (`#D6663A`): Estado hover/focus do urucum. 4% mais luminoso, mesma matiz.

### Secondary
- **Ouro** (`#C8A96E`, `oklch(74% 0.075 80)`): Pigmento institucional, introduzido em v11 para CTAs secundários (header sticky, link "descreva o seu problema") e para status `em andamento` em cases. Mais quieto que urucum, convive em densidades maiores sem competir.
- **Ouro Fresh** (`#D4B97D`): Hover do ouro.

### Tertiary
- **Verde-folha** (`#8FBE92`): Acento botânico claro. Status `entregue` em cases; possível marcação de uma palavra em seção Linear quando o verde-musgo é o fundo.
- **Azul-céu** (`#7BB1CF`): Acento atmosférico. Marcação ocasional de keyword em seção (ex.: "porte") e identidade tipográfica do role-cloud dos sócios (chips de IA em itálico).

### Neutral
- **Papel-cream** (`#F1ECE0`): Tinta principal sobre fundos escuros. Cor de todo o corpo de texto. Sustenta contraste 13:1 sobre azul-nanquim-deep.
- **Papel-soft** (`#F7F3EA`): Variante hover/elevação sutil. Uso raro.
- **Verde-musgo** (`#2F4030`): Tinta secundária e cor original da marca. Em modo dark, fica reservado a aplicações pontuais (logo sobre fundo claro de deck/brand).
- **Verde-musgo-deep** (`#1F2C22`): Superfície quente de footer (`surface-3`). Única quebra cromática do nanquim no plano de fundo.
- **Azul-nanquim** (`#1B2A3A`): Superfície intermediária (`surface-2`).
- **Azul-nanquim-deep** (`#0E1A26`): Fundo padrão da página (`html background`, `surface-1`). Cor da tinta nanquim em sua forma mais concentrada.
- **Azul-nanquim-deeper** (`#0A131C`): Fundo da seção de fechamento (`surface-4`). Profundo, ritualístico.
- **Azul-header** (`#0B1720`): Fundo do sticky header com 88% alpha e blur.
- **Azul-card** (`#132030`): Background de células de case.
- **Linha-azul-strong** (`#1E3348`): Divisores entre cards e dentro do grid de cases.
- **Ink-muted-cool** (`#7A8E9B`): Texto secundário frio (uso pontual em metadados).

### Named Rules

**A Regra do Uma-por-Momento.** Em qualquer seção, exatamente uma palavra recebe acento colorido (urucum, azul-céu, verde-folha ou ouro). Duas marcações na mesma seção significa que uma está errada. A escassez é a força. Vale para componentes decorativos também: nada pinta sem motivo. Esta regra estende a "regra do urucum" original para os três acentos auxiliares.

**A Regra do Logo de Cliente.** Logos de clientes em grade aparecem em verde-musgo ou neutro frio (`#7A8E9B`), nunca em sua cor original. A harmonia editorial prevalece sobre o reconhecimento exato da marca alheia. Substitui o anti-padrão de "wall of grayed logos" por "wall of inked logos".

**A Regra do Nanquim.** Todos os fundos primários ficam dentro da família azul-nanquim. Variação cromática entre seções é prerrogativa do verde-musgo-deep (apenas no rodapé) e dos acentos textuais. Não introduzir um quinto fundo.

## 3. Typography

**Display Font:** Fraunces (Georgia, serif fallback). Variable, eixo `opsz` em 144 e eixo `SOFT` em 30, peso 700.
**Body Font:** Inter Tight (system-ui fallback). Pesos 400 (corpo), 500 (labels e títulos secundários), 600 (títulos), 800 (reservado).
**Mono Font:** JetBrains Mono. Declarado em token, ainda não usado em v1.

**Character:** Fraunces traz solenidade editorial. É a tipografia de manifesto, da abertura de seção narrativa, do nome "Iarandu" no logo e no header. Inter Tight é o trabalho diário: títulos de seção, corpo, labels, navegação. A cesura entre as duas famílias é o ritmo da página.

### Hierarchy
- **Display XL** (Fraunces 700, `clamp(48px, 7.6vw, 112px)`, line-height 1.04): Hero (seção 1), fechamento (seção 10). Cerimonial. Aparece duas vezes em toda a landing.
- **Display LG** (Fraunces 700, `clamp(40px, 5.4vw, 76px)`, line-height 1.08): Manifesto da seção 9 (a palavra *arandu*). Aparece uma vez.
- **Display MD** (Fraunces 700, `clamp(32px, 3.8vw, 52px)`, line-height 1.12): Tese central (seção 2) e abertura da seção 7.
- **Display SM** (Fraunces 700 com `opsz` 96, `clamp(26px, 2.8vw, 40px)`, line-height 1.18): Nome de caso em destaque, CTA intermediário pós-cases, blocos curtos de manifesto.
- **Headline** (Inter Tight 600, `clamp(22px, 2.2vw, 30px)`, line-height 1.28): Títulos de seção em modo Linear (`<h2>`).
- **Title** (Inter Tight 500, `clamp(18px, 1.5vw, 21px)`, line-height 1.4): Subtítulos, nome de caso fora do destaque, mini-bio dos sócios.
- **Body LG** (Inter Tight 400, `clamp(18px, 1.4vw, 20px)`, line-height 1.62): Manifesto e descrições principais. Cor `var(--ink-soft)` (78% opacity de papel-cream).
- **Body** (Inter Tight 400, `clamp(16px, 1.15vw, 17px)`, line-height 1.66): Default. Cor `var(--ink-soft)`.
- **Body SM** (Inter Tight 400, 14px, line-height 1.55): Notas, legendas, copyright, footer. Cor `var(--ink-muted)` (55% opacity).
- **Label** (Inter Tight 500, 11px, letter-spacing `0.08em`, uppercase): Eyebrow das células de case, labels do formulário. Cor `var(--ink-muted)`.

### Named Rules

**A Regra do Fraunces Cerimonial.** Fraunces nunca acompanha Fraunces diretamente. Entre dois blocos display, sempre quebra com label (uppercase, tracking), corpo, ou pelo menos 56px de respiração. Se Fraunces aparece em todo título do site, perde a função cerimonial.

**A Regra do `max-width`.** Corpo cap em 64ch (`.measure`); blocos curtos em 56ch (`.measure-tight`); manifestos em 38ch (`.measure-manifesto`). Linhas mais longas atrapalham Marina no celular; linhas mais curtas matam o ritmo do manifesto.

**A Regra da Letra-i Sem Pingo.** No logo, o `ı` é dotless (i sem pingo); o pingo é substituído por um círculo urucum sobreposto, alinhado oticamente à mesma altura do "i" da palavra. Isto é assinatura da marca: não usar a letra i com pingo padrão dentro do wordmark.

## 4. Elevation

**Plana por padrão.** O sistema não usa box-shadows decorativos. A página é editorial, não Material Design. A sensação de profundidade vem de **layering tonal**: quatro superfícies (`surface-1` a `surface-4`) com luminâncias progressivamente menores na mesma matiz azul-nanquim, alternadas seção a seção para criar ritmo vertical sem nunca introduzir sombra ou borda colorida.

A única elevação real do sistema é o sticky header, que usa `backdrop-filter: blur(12px)` sobre alpha 88%. Efeito ótico de profundidade, não sombra. Após 10px de scroll surge uma borda inferior `1px solid var(--linha-azul-strong)` que ancora o header ao topo.

### Tonal Vocabulary (em ordem de profundidade)
- **surface-1** (`#0E1A26`, azul-nanquim-deep): Fundo da página e do hero. Mais comum.
- **surface-2** (`#1B2A3A`, azul-nanquim): Intermediário. Cases, seções de listas (verbos, perfis).
- **surface-3** (`#1F2C22`, verde-musgo-deep): Tom quente que separa footer do resto da página. Único uso de família musgo no plano de fundo.
- **surface-4** (`#0A131C`, azul-nanquim-deeper): Mais profundo. Reservado para fechamento e CTA final. Sensação de imersão antes do form.

### Named Rules

**A Regra do Plano-Por-Padrão.** Sombras não aparecem por estética. Surgem apenas em resposta a um afeto óptico físico (blur do sticky header). Tudo mais é plano. Se você está prestes a adicionar `box-shadow` em um card, primeiro verifique se o layering tonal e uma borda de 1px não resolvem.

**A Regra dos Quatro Andares.** A profundidade do sistema é discreta: quatro tons, nada mais. Não introduzir uma quinta superfície ("surface-5") para criar contraste; em vez disso, repetir alguma das quatro existentes.

## 5. Components

### Buttons

#### Primary (`.cta-primary`)
- **Shape:** retângulo levemente arredondado (`border-radius: 2px`). Único elemento da página com cantos não-zero, além de pills.
- **Color assignment:** background `var(--urucum)` (`#C25E3A`), texto `var(--ink)` (`#F1ECE0`). Sem borda, sem sombra.
- **Padding:** `18px 32px`. Inter Tight 500, 17px, letter-spacing `0.005em`.
- **States:** hover/focus muda background para `var(--urucum-fresh)`. Transição `background-color 180ms cubic-bezier(0.22, 1, 0.36, 1)`. **Sem translateY, sem scale.** Só cor.
- **Texto canônico:** `vamos.` (literal, com ponto final). Sem ícone, sem seta.

#### Ghost Gold (`.sticky-cta`)
- **Shape:** retângulo `border-radius: 2px`, borda 1px em ouro com 35% alpha.
- **Color assignment:** background transparente, texto `var(--ouro)`, borda `rgba(200, 169, 110, 0.35)`.
- **Padding:** `7px 18px`. Inter Tight 500, 13px.
- **States:** hover/focus background ganha `rgba(200, 169, 110, 0.10)`, borda intensifica para 55% alpha, seta `→` move +3px no eixo X. Transição 180ms.
- **Mobile (<380px):** o texto colapsa, só a seta permanece. Padding reduz a `7px 12px`.

#### Hero Link CTA (`.link-cta-hero`)
- **Estilo:** inline-block com underline-on-hover (background-image crescendo 0% para 100%). Linha decorativa de 1px acima do texto a 55% opacity, sempre visível.
- **Cor:** `var(--urucum-fresh)` no rest state, `var(--urucum)` no hover.
- **Animação:** seta `→` move 5px no hover; underline cresce em 320ms.

#### Case CTA Link (`.case-cta-link`)
- **Estilo:** texto ouro, border-bottom 1px ouro com 50% alpha, seta `→` que move 5px no hover. Tamanho `clamp(17px, 1.5vw, 21px)`.

### Chips (Status Pills)
- **Style:** `border-radius: 999px`, padding `5px 14px`, font 11px uppercase letter-spacing `0.06em`.
- **Andamento:** texto e borda em `var(--ouro)`, background `rgba(200, 169, 110, 0.10)`, borda 1px alpha 32%.
- **Entregue:** texto e borda em `var(--verde-folha)`, background `rgba(143, 190, 146, 0.10)`, borda 1px alpha 32%.
- **Comportamento:** estáticas. Nunca animam, nunca mudam ao hover. São marcadores informacionais, não interativos.

### Cards / Containers

#### Case Row (`.case-row`)
- **Corner Style:** cantos retos (`border-radius: 0`).
- **Background:** `var(--azul-card)` (`#132030`).
- **Layout desktop (≥900px):** grid 4 colunas `1.6fr 1.4fr 1.4fr 0.8fr`. Padding `36px 32px`, gap 0. Cada célula separada por `border-left: 1px solid var(--linha-azul-strong)`, com `padding-left: 28px; margin-left: 28px`. **Separadores são 1px, não barras de cor.**
- **Layout mobile (<900px):** stack vertical em 1 coluna, padding `28px 24px`, gap 28px entre células.
- **Shadow Strategy:** nenhuma. Profundidade vem do bg `azul-card` contra `surface-2` (`azul-nanquim`).
- **Ritmo visual:** rows separadas por 2px (`gap: 2px` no grid pai, com `background: var(--linha-azul-strong)` aparecendo entre rows).

#### Footer (verde-musgo-deep)
- **Background:** `var(--verde-musgo-deep)`. Único uso de família musgo no fundo. Quebra cromática deliberada do nanquim, indicando "fim do artigo".
- **Border-top:** `1px solid var(--linha-papel)` (papel-cream a 18% alpha).
- **Layout:** três colunas em desktop (São Paulo · Milano | logo mark | LinkedIn + e-mail), stack em mobile.

### Inputs / Fields (Form do Fechamento)
- **Style:** **fantasma**. `background: transparent`, `border: 0`, apenas `border-bottom: 1px solid var(--linha-papel)`. `border-radius: 0`. Padding `12px 0`.
- **Type:** 18px Inter Tight 400, cor `var(--ink)`.
- **Label:** acima do input (nunca placeholder-as-label). 14px Inter Tight 400, uppercase, letter-spacing `0.04em`, cor `var(--ink-muted)`.
- **Focus:** `outline: 2px solid var(--urucum-fresh)`, offset `3px`. **Sem glow, sem ring colorido.** Outline editorial.
- **Spacing:** três campos verticalmente empilhados, gap 28px. Botão "vamos." com margin-top 24px adicional.

### Navigation (Sticky Header)
- **Style:** altura fixa 50px, position sticky, z-index 100, background `rgba(11, 23, 32, 0.88)` com `backdrop-filter: blur(12px)`.
- **Estado rest:** `border-bottom: 1px solid transparent`. Após 10px de scroll: borda aparece em `var(--linha-azul-strong)` e background sobe para alpha 92%.
- **Logo:** texto em Fraunces 600 com `opsz` 96, 18px, letter-spacing `-0.015em`. Ponto final em urucum (`<span class="sticky-logo-dot">.</span>`).
- **CTA único:** ghost gold à direita. Mobile abaixo de 380px: só a seta.

### Signature Component — Logo (SVG inline)
- **Anatomia:** três órbitas atômicas SVG ao redor de núcleo central (`r=3.5`, verde-musgo), planeta urucum (`r=10`) na órbita superior-direita, wordmark "ıarandu" em Fraunces 700 com `ı` dotless + círculo urucum como tittle, e ponto final urucum após "iarandu.".
- **Cor:** logo herda `color` do parent (verde-musgo sobre fundo claro, papel-cream sobre fundo escuro). Urucum hardcoded no SVG.
- **Animação ao revelar (`.logo-bloom`):** órbitas desenham via `stroke-dashoffset` (1500ms cada, escalonadas), núcleo blooma com scale (700ms), planeta chega (1000ms), wordmark assenta (900ms), tittle e período aparecem no fim. Coreografia total: ~3 segundos. Executa uma vez.

## 6. Do's and Don'ts

### Do:
- **Do** usar `var(--azul-nanquim-deep)` como fundo padrão de toda a página. Todo o resto é variação tonal dentro da família nanquim, ou verde-musgo-deep só no rodapé.
- **Do** usar Fraunces 700 com `font-variation-settings: 'opsz' 144, 'SOFT' 30` em todo manifesto e display. A configuração de eixos é parte da identidade.
- **Do** usar exatamente **uma palavra acentuada** por seção (urucum, ouro, verde-folha ou azul-céu). Marcar duas é erro.
- **Do** manter `border-radius: 0` em quase tudo. Exceções: CTA primário (2px), status pills (999px).
- **Do** usar `cubic-bezier(0.22, 1, 0.36, 1)` como curva única de motion. Reveals em 800 a 1100ms, executados uma vez ao entrar em viewport, jamais em loop.
- **Do** usar tonal layering (`surface-1..4`) para profundidade. Cards e seções diferem por luminância da mesma matiz, não por sombra.
- **Do** preferir SVG inline com `stroke-dashoffset` quando o sistema pedir presença visual além do texto. Curvas logarítmicas e rios desenham-se uma vez ao revelar; ficam.
- **Do** truncar o sticky CTA em telas <380px para apenas a seta. O texto colapsa, a função permanece.
- **Do** respeitar `prefers-reduced-motion`: reveals viram opacity puro, role-cloud para de driftar, logo aparece pronto, curvas aparecem já desenhadas.
- **Do** servir Fraunces e Inter Tight com `display=swap` e preload da style sheet. JS shipped < 100KB. LCP < 1.5s em 4G. Marina abre no celular.

### Don't:
- **Don't** introduzir gradiente colorido em headline, em fundo, ou em qualquer componente decorativo. Banido pelo PRODUCT.md.
- **Don't** usar hero-metric template (número gigante + 3 stats + label). SaaS cliché. Banido.
- **Don't** desenhar card-grid de "nossos serviços" com 4 cards iguais com ícone. Cada bloco tem altura e papel próprios.
- **Don't** usar side-stripe colorido em alerts, cards ou callouts. Banido pela impeccable e pelo PRODUCT.md. Separadores são 1px full-border, nunca barras verticais coloridas.
- **Don't** usar glassmorphism decorativo. Único blur permitido: sticky header (afeto físico de profundidade, não estética).
- **Don't** usar stock photography. Período. Se imagem fotográfica entrar em v2, segue critérios PRODUCT.md (escala, silêncio, respiração, autoria: Salgado, Araquém Alcântara, INPA, Goeldi).
- **Don't** repetir Fraunces em todo título. Fraunces é cerimonial; se aparece em demasia, perde a função.
- **Don't** misturar modo Herzog (narrativa) e modo Linear (diagrama) na mesma seção. Banido pelo PRODUCT.md. Cada seção declara seu modo.
- **Don't** animar em loop. Animação toca uma vez ao revelar, fica. Background gradient mesh animado, vídeo de planeta Terra, cursor-following blobs: todos proibidos.
- **Don't** usar emojis em material institucional. Marina não acredita em material que grita.
- **Don't** escrever as palavras-bingo: *jornada, transformação digital, potencializar, alavancar, unleash, empower, framework proprietário, metodologia exclusiva, ecossistema, sinergia, end-to-end, holístico, disruptivo, próximo nível, world-class, revolucionário, redefinir, reimaginar*.
- **Don't** usar "Nós, na Iarandu, acreditamos que…". Cortar. Ir direto para o verbo: *Construímos, Modernizamos, Treinamos*.
- **Don't** usar travessão em copy (—) nem `--`. Vírgula, ponto, dois-pontos, ponto-e-vírgula ou parênteses no lugar.
- **Don't** servir cookie banner. Sem analytics em v1, sem banner.
- **Don't** usar logos de clientes em sua cor original numa grade. Pinta em verde-musgo ou neutro frio. Harmonia editorial prevalece.
