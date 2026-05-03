---
project: iarandu
register: brand
locale: pt-BR
status: v1 — landing page
---

# Iarandu — DESIGN

> Sistema visual canônico v1. Tokens, tipografia, formas e movimento. Lê em conjunto com `PRODUCT.md`.

## Princípio raiz
**Herzog na narrativa, Linear no diagrama.** Cada seção declara seu modo. Tokens abaixo são neutros — quem decide a aplicação é o modo.

---

## Cor

Quatro tons. Três frios da natureza vista de fora; um quente da natureza vista de dentro do corpo. **Estratégia: full palette com 4 papéis nomeados** — cada cor aparece deliberadamente onde tem função, nunca como decoração.

### Tokens canônicos

| Papel | Nome | OKLCH | Hex | Uso |
|---|---|---|---|---|
| Fundo claro / paper | **branco-papel** *(nuvem)* | `oklch(94% 0.018 85)` | `#F1ECE0` | Fundo de seções narrativas (modo Herzog), cor de texto sobre fundos escuros |
| Fundo escuro / ink-blue | **azul-nanquim** *(rio)* | `oklch(22% 0.040 245)` | `#1B2A3A` | Fundo de seções de fechamento e manifesto pesado |
| Tinta principal | **verde-musgo** *(floresta)* | `oklch(28% 0.025 145)` | `#2F4030` | Cor de texto sobre branco-papel; cor primária do logo; estruturas Linear |
| Acento | **urucum** *(pigmento Bixa orellana)* | `oklch(57% 0.130 35)` | `#C25E3A` | Pontuação. Aparece **uma vez por momento.** Nunca decora — pontua. |

### Variantes de uso

```css
:root {
  --branco-papel: #F1ECE0;
  --branco-papel-soft: #F7F3EA;       /* hover, elevação sutil */
  --verde-musgo: #2F4030;
  --verde-musgo-deep: #1F2C22;        /* fundos escuros tinted, sub-blocos */
  --verde-musgo-soft: #4A5C4D;        /* texto secundário */
  --azul-nanquim: #1B2A3A;
  --azul-nanquim-deep: #0E1A26;       /* fundo de fechamento */
  --urucum: #C25E3A;
  --urucum-fresh: #D6663A;             /* hover ou estado ativo único */

  /* Stroke / divisor */
  --linha-musgo: oklch(28% 0.025 145 / 18%);
  --linha-papel: oklch(94% 0.018 85 / 24%);
}
```

### A regra do urucum (inviolável)
Em qualquer seção, **uma única ocorrência de urucum** — link único, palavra-destaque única, ponto sobre o "i" do logo, ou ponto final do manifesto. **A escassez é a força.** Se uma seção tem dois urucuns, um deles está errado.

### Pares de aplicação

| Modo da seção | Fundo | Texto | Marcações | Acento |
|---|---|---|---|---|
| Herzog (narrativa) | `branco-papel` | `verde-musgo` | `linha-musgo` | `urucum` (uma vez) |
| Linear (diagrama) | `branco-papel-soft` | `verde-musgo` | `linha-musgo` | `urucum` (uma vez) |
| Herzog pesado *(seção 7 e fechamento)* | `azul-nanquim` ou `verde-musgo-deep` | `branco-papel` | `linha-papel` | `urucum` (uma vez) |

### Acessibilidade
Verde-musgo `#2F4030` sobre branco-papel `#F1ECE0` = **contraste 9.4:1**. Branco-papel sobre azul-nanquim `#1B2A3A` = **contraste 13.1:1**. Urucum sobre branco-papel = **contraste 4.5:1** *(ok para texto não-pequeno; usar verde-musgo para corpo)*.

---

## Tipografia

Duas famílias. Ambas Google Fonts, SIL OFL.

### Famílias

#### Fraunces *(display de manifesto)*
- **Quando:** hero, citação de manifesto, abertura de seção 9 (*arandu*), fechamento.
- **Configuração:** `font-weight: 700; font-variation-settings: 'opsz' 144, 'SOFT' 30; letter-spacing: -0.015em`.
- **Quando NÃO usar:** títulos de seção comum (h2, h3 do site). Fraunces é **escassa e cerimonial.** Se aparecer em todo título, perde a função.

#### Inter Tight *(trabalho diário)*
- **Quando:** títulos de seção, corpo, labels, dados, navegação.
- **Pesos:** 500–600 para títulos; **400** para corpo; 500 para labels.
- **Configuração:** `letter-spacing: -0.01em` em headings; default em corpo.

### Escala (desktop / mobile)

| Token | Family | Tamanho desktop | Tamanho mobile | Line-height | Uso |
|---|---|---|---|---|---|
| `display-xl` | Fraunces 700 | 96–120px (clamp) | 56–72px | 1.05 | Hero, fechamento "Rio Amazonas" |
| `display-lg` | Fraunces 700 | 64–80px | 44–52px | 1.10 | Seção 9 (*arandu*), manifesto |
| `display-sm` | Fraunces 700 | 36–44px | 28–32px | 1.15 | Frase-tese isolada (seção 2) |
| `h1` | Inter Tight 600 | 44px | 32px | 1.18 | (não usado — Fraunces ocupa) |
| `h2` | Inter Tight 600 | 28–32px | 24–26px | 1.25 | Títulos de seção (3, 4, 5, 6, 8) |
| `h3` | Inter Tight 500 | 20–22px | 18–20px | 1.35 | Subtítulos de bloco |
| `body-lg` | Inter Tight 400 | 19px | 17px | 1.55 | Manifesto, texto de seção principal |
| `body` | Inter Tight 400 | 17px | 16px | 1.6 | Default |
| `body-sm` | Inter Tight 400 | 15px | 14px | 1.5 | Notas, captions, legendas |
| `label` | Inter Tight 500 | 13px | 12px | 1.3 | Labels, eyebrow, navegação. `letter-spacing: 0.04em; text-transform: uppercase` |
| `mono` | JetBrains Mono 400 | 14px | 13px | 1.5 | Apenas se houver bloco técnico (não obrigatório em v1) |

### Cap line-length
**Corpo: 60–68ch.** Manifesto: 30–42ch — quebra mais agressiva, ritmo de poesia/editorial.

### Hierarquia
- Manifesto (Fraunces) → respiração de 56–80px → label (Inter Tight, uppercase, tracking) → respiração de 16–24px → corpo (Inter Tight 400).
- **Nunca** Fraunces seguida diretamente de Fraunces. Quebra com label ou corpo.

---

## Espaço

Escala próxima ao Fibonacci, com `8px` como base. Usada para padding, margin, gap.

```css
--s-1: 4px;     /* hairline */
--s-2: 8px;
--s-3: 16px;
--s-4: 24px;
--s-5: 40px;
--s-6: 64px;
--s-7: 104px;
--s-8: 168px;
--s-9: 272px;   /* respiração entre seções principais (desktop) */
```

### Ritmo de seção (desktop)
- **Modo Herzog:** padding-y `--s-9` (272px). Generoso. **Faça respirar.**
- **Modo Linear:** padding-y `--s-7`–`--s-8` (104–168px). Calibrado.
- **Mobile:** dividir por ~1.6 (proporção áurea). Herzog mobile = ~168px; Linear = ~64–104px.

### Container
- **Padrão:** `max-width: 72rem` (1152px), `padding-inline: --s-5` (40px) desktop / `--s-4` (24px) mobile.
- **Manifesto Herzog:** `max-width: 56rem` (896px), tipografia Fraunces fica concentrada.
- **Não envolver tudo em container.** Seções de fundo escuro tomam viewport inteira; só o conteúdo respeita container.

---

## Forma

### Princípios geométricos declarados na marca
- **Proporção áurea** governa razões de layout: hero column 38.2/61.8, image:text splits, seção:respiro.
- **Curva logarítmica** orienta ilustração e divisores, quando houver.

### Cantos
- **Borda geral:** `border-radius: 0`. Cantos crispos, editoriais.
- **Exceção controlada:** botão CTA primário pode ter `border-radius: 2px` para suavização sutil. **Nunca mais que 4px.**
- **Zero `border-radius` em cards**, blocos de conteúdo, imagens. Crispness é parte da identidade.

### Bordas e divisores
- **Stroke principal:** `1px solid var(--linha-musgo)` em fundos claros; `1px solid var(--linha-papel)` em fundos escuros.
- **Stroke de ênfase:** `1.5px` apenas em separações editoriais raras (entre manifesto e corpo de seção).
- **Banidas** *(reforço da banlist do PRODUCT.md):* side-stripes coloridos, bordas com 4–6px, bordas em gradiente.

### Sombras / elevação
- **Padrão:** sem sombra. A página é editorial, não material design.
- **Exceção:** form CTA pode ter sombra **diffuse, low-amplitude**: `box-shadow: 0 1px 2px oklch(28% 0.025 145 / 8%)`. Nada mais.

### Composição áurea — implementação prática
- Hero: coluna de texto = `61.8%`; espaço/ilustração = `38.2%`. Em mobile, stack.
- Seção de cases: cada bloco respeita ratio `1 : 1.618` em altura:largura quando viável.
- Página inteira: o eixo vertical é uma sequência rítmica em torno de phi entre seções (alguma seções respirar, outras condensar).

---

## Movimento

### Curva única
```css
--ease: cubic-bezier(0.22, 1, 0.36, 1);  /* ease-out-quart */
```
**Banidas:** bouncy, elastic, spring com overshoot.

### Durações
- **Hover / state change:** 180ms.
- **Reveal de elemento (scroll-into-view):** 600–800ms, com pequeno delay escalonado em listas.
- **Transições de página:** Astro `view transitions` quando aplicável; 400ms.

### Animações declaradas
1. **Reveal Herzog.** Manifestos aparecem com `opacity 0→1` e `translateY(12px → 0)`. Sem scale, sem blur. **Lento, contemplativo.** 800ms.
2. **Hover de link.** Underline cresce de 0% → 100% a partir da esquerda, 180ms, ease-out-quart. Cor passa de `verde-musgo` para `urucum` *(usar com restrição — só onde o urucum se justifica como única ocorrência da seção)*.
3. **Hover de CTA primário.** Fundo `urucum` → `urucum-fresh`; mover 1px no eixo Y? Não. **Restrição.** Só cor.
4. **River-flow micro-animation** *(opcional, seção 9 ou seção 10):* curva logarítmica em SVG, com `stroke-dashoffset` animando uma única vez ao entrar em viewport. 1200ms, ease-out-quart. **Nunca em loop.** Aparece, executa, fica.

### Banidas
- Auto-playing video de fundo.
- Background gradient meshes animados.
- Cursor-following blobs.
- Parallax intenso em hero. *(Parallax discreto em ilustração rara é OK.)*
- Animação que toca duas vezes na mesma sessão.

### Respeito a `prefers-reduced-motion`
**Sempre.** Reveals viram `opacity` puro, sem translate. River-flow desligado. Hover sem animação de underline.

---

## Logo

### Arquivos
- `_assets/logo/iarandu-logo.svg` — completo. Usa `currentColor` para tinta da marca; urucum hardcoded.
- `_assets/logo/iarandu-mark.svg` — só ícone. Para favicon, footer, deck, avatar social.

### Anatomia
- **Três órbitas atômicas** ao redor de um **núcleo central** (`r=3.5`, verde-musgo).
- **Planeta urucum** (`r=10`) na órbita tilted upper-right (rotate -30°), no tip superior-direito do eixo maior.
- **Wordmark "ıarandu"** em **Fraunces 700, opsz 144, SOFT 30**, com **`ı` (dotless i)** + **círculo urucum** sobreposto como tittle.
- **Ponto final urucum** após "iarandu.", círculo `r=10`.

### Aplicação
- **Em fundo claro (branco-papel):** `color: var(--verde-musgo)` no parent → tinta verde-musgo.
- **Em fundo escuro (azul-nanquim, verde-musgo-deep):** `color: var(--branco-papel)` → tinta clara.
- **Tamanho mínimo:** 120px de largura para `iarandu-logo.svg`; 32px para `iarandu-mark.svg`.
- **Espaço de proteção:** ≥ altura do `i` da palavra ao redor de todo o lockup.

### Calibração pendente
Tittle do `ı` e ponto final urucum estão posicionados por cálculo de métrica, não medidos. **Quando a página renderizar com Fraunces carregada, ajustar `cx/cy` dos dois círculos no SVG até que o ponto rime opticamente com o do planeta.** *(Documentado em `_assets/logo/README.md`.)*

---

## Imagem

### Default: abstração
SVG geométrico orgânico — curva logarítmica, formas inspiradas em rio/copa/dossel sem desenhar literalmente. **Stroke fino, sem fill, em verde-musgo.** Aparecem em transições entre seções, ou como elemento de background discreto da seção 9.

### Exceção fotográfica
**Uma única foto na home, no máximo.** Provavelmente abertura ou seção 7 (posicionamento). Critérios:
- **Escala** — vista aérea, paisagem.
- **Silêncio** — sem pessoa em movimento.
- **Respiração** — espaço negativo, céu, água.
- **Autoria** — não stock. Salgado (Amazônia 2021), Araquém Alcântara, INPA, Goeldi.

**Tratamento:** sem filtro, sem overlay colorido decorativo. Pode haver gradient escuro no rodapé da imagem para legibilidade de texto sobreposto, mas único e sutil.

### Iconografia
**Mínima.** Se preciso, usar **stroke-only**, 1.5px, em `verde-musgo`. Tamanho 20–24px. **Nunca** ícones 3D, ícones em cores múltiplas, ícones decorativos sem função informativa.

---

## Componentes

Componentes da landing v1. **Não é design system geral** — é o repertório que esta página exige.

### Hero
- Display Fraunces (display-xl), 1–2 linhas máximo.
- Sublinha em Inter Tight body-lg.
- CTA primário inline ou logo abaixo.
- Coluna 61.8% / 38.2% em desktop. Stack em mobile.

### Manifesto block
- Fraunces display-sm/lg dependendo do peso.
- Max-width 30–42ch.
- **Uma palavra em urucum**, escolhida com cuidado.

### Seção em modo Linear
- Title em Inter Tight h2.
- Eyebrow label em uppercase tracking acima (opcional).
- Conteúdo em colunas 2–3, **diferenciadas em peso/tamanho** — não cards iguais.
- Linha-musgo separando blocos quando precisar.

### Card de case *(seção 5)*
- **Não retangular igual.** Cada um tem altura própria.
- Logo do cliente em verde-musgo (quando possível) ou cinza neutro (`oklch(50% 0.005 85)`) — **nunca cor original colorida na grade**, mantém harmonia editorial.
- Título com nome do cliente em Fraunces display-sm.
- 1–2 linhas de contexto + placeholder estruturado *(problema · decisão · resultado)*.

### Sócios (seção 8)
- 3 colunas em desktop, stack em mobile.
- Foto: aspect ratio 4:5 (vertical, ratio editorial), preto-e-branco ou desaturada para harmonizar.
- Nome em Inter Tight h3 600.
- Eyebrow em label uppercase: papel/expertise.
- Bio: 2–3 linhas em body.
- LinkedIn como link discreto com underline animado em urucum.

### Form CTA (seção 10)
- 3 inputs verticalmente empilhados, full-width.
- Border `1px solid linha-musgo`, sem `border-radius`.
- Focus state: border vira `verde-musgo` solid 1px, **sem glow, sem ring colorido.**
- Label acima do input (não placeholder-as-label).
- Submit button: fundo `urucum`, texto `branco-papel`, **sem ícone, sem seta**. Texto: "vamos." (final ponto).
- Pós-submit: bloco em modo Herzog em `verde-musgo-deep` com texto branco-papel. Sem modal.

### Footer
- Fundo `verde-musgo-deep`.
- Texto em `branco-papel`, weight 400, body-sm.
- Layout: à esquerda "São Paulo · Milano"; ao centro mark do logo; à direita LinkedIn + e-mail.
- Copyright discreto: "© 2026 Iarandu."

---

## Performance & técnica

### Budget
- **JS shipped < 100KB** total após compressão (idealmente < 50KB; Astro permite).
- **CSS shipped < 30KB** (Tailwind v4 com purge).
- **Hero LCP < 1.5s** em 4G.
- **Fontes:** subset PT-BR; `font-display: swap`; preload Fraunces 700 e Inter Tight 400.

### Imagens
- AVIF/WebP servidos via Cloudflare Image Resizing.
- Lazy load fora do viewport inicial.
- `loading="eager"` apenas para a imagem do hero (se houver).

### CSS strategy
- Tailwind v4 com `@theme` para tokens canônicos.
- Componentes compostos por utilities.
- CSS custom properties (`var(--verde-musgo)` etc.) disponíveis também em raw CSS para SVG inline.

### A11y
- WCAG AA mínimo, AAA onde for natural.
- Semantic HTML (`<main>`, `<section>`, `<article>` quando aplicável, `<nav>`).
- Focus visível em todos os interactivos: outline `2px solid var(--urucum)`, offset `2px`.
- Form com labels associados, error states em `var(--urucum)` com texto descritivo.
- Reduced motion respeitado.

### SEO mínimo
- `<title>` e meta-description em PT-BR.
- Open Graph básica (com mark do logo como og:image em v1).
- `<html lang="pt-BR">`.
- Estrutura preparada para `<link rel="alternate" hreflang>` em v2 (IT/EN).

---

## Anti-padrões — reforço

Se algum dos itens abaixo aparecer, **reescrever o componente ou seção:**

- Cards iguais em grade.
- Side-stripe colorido.
- Hero metric template (número gigante + 3 stats + label).
- Texto com gradiente colorido.
- Glassmorphism / frosted glass.
- Stock photo de qualquer espécie.
- Two urucuns visible at the same time in the same section.
- Inter em todo lugar (sem Fraunces nos manifestos).
- Fraunces em todo lugar (sem Inter Tight nas seções comuns).
- `border-radius` > 4px em qualquer elemento.
- Animação que repete em loop.
- Background gradient mesh.
- Cookie banner *(há analytics? Não há. Nem precisa do banner.)*
- Cor original colorida em logos de clientes em grade *(perde harmonia editorial)*.
