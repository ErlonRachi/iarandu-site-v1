# Iarandu — Sistema Visual (Round 4)

> Documento canônico do sistema visual. Lê em conjunto com `06-voice.md` e `07-references-and-anti-references.md`.

## Princípio compositivo raiz

**Herzog na narrativa, Linear no diagrama.**
*(referência: https://www.wernerherzog.com/ — silêncio, contemplação, autoridade quieta.)*

A regra mestra do sistema visual.

- **Material narrativo** (Sobre, abertura de deck institucional, manifesto): respeita **o silêncio Herzog**. Pouca interface, calma, deixa o conteúdo aparecer.
- **Material técnico** (arquitetura, processo, caso, diagnóstico): respeita **a precisão Linear**. Esquemas claros, hierarquia funcional, calibração editorial.

A página decide a cada momento em qual modo está. **Mistura mata os dois.**

---

## Sofisticação editorial

A Iarandu **se parece com uma revista, não com um produto SaaS**.

Tipografia editorial. Hierarquia tipográfica forte. Espaços brancos generosos. Ritmo de leitura como o de um artigo longo.

> Marina já viu mil sites de SaaS de IA. Ela nunca viu um que parecesse um caderno de cultura.

---

## Tipografia

Duas famílias. Ambas gratuitas via Google Fonts. SIL Open Font License.

### Fraunces Sharp (display de manifesto)
- **Uso:** abertura de home, abertura de deck, citação do manifesto, página Sobre, citações em destaque.
- **NÃO usar em:** títulos de seção comum (h2, h3 da home), labels, corpo.
- **Configuração:** peso **700**, **opsz 144**, eixo **SOFT** levemente aumentado para customização sutil.
- **Filosofia:** Fraunces é **escassa e cerimonial**. Quando aparece, tem peso. Se aparecer em todo título, perde a função.

### Inter Tight (trabalho diário)
- **Uso:** títulos de seção comum, corpo de texto, labels, dados, números, navegação.
- **Pesos:** 500–600 para títulos; **400** para corpo.

**Mono (a definir em rodada de implementação):** candidato JetBrains Mono ou Berkeley Mono apenas se houver bloco técnico que peça. Não é parte do sistema base.

---

## Paleta de cor

**Quatro tons.** Três frios da natureza vista de fora; um quente da natureza vista de dentro do corpo. Cosmologia tupi-guarani inteira em evocação.

### Verde-musgo (floresta)
Verde profundo. **Mais oliva / musgo** do que esmeralda. Evita o "verde ambiental-startup". Lugar mais sério, terreno, quase militar. **Verde de quadro de instituição de pesquisa**, não de embalagem de produto natural.

### Azul-nanquim (rio)
Azul profundo, frio, quase tinta nanquim. **Não azul-céu, não azul-tecnologia.** Azul de rio escuro. Rio Amazonas visto de cima na hora dourada — **o azul tem peso, não é luminoso**.

### Branco-papel (nuvem)
Branco com calor, marfim levíssimo. **Não branco puro 100%.** Tem temperatura, não é hospitalar.

### Urucum (acento)
Vermelho-terra com calor, do pigmento *Bixa orellana* usado pelos Tupinambá.
Faixa de referência: **#B85C3C (urucum ressecado) — #D6663A (urucum fresco).**
Não é ocre, não é tijolo, não é laranja luminoso. **Calibrar na tela ao implementar.**

### A regra do urucum (inviolável)

> **Urucum aparece uma vez por momento.**

Não decora — **pontua**. Pode ser:
- cor de **um único link** na seção,
- destaque de **uma única palavra-chave** em manifesto,
- o **ponto sobre o "i"** ou final do logo.

**A escassez é o que dá força.**

---

## Imagem

### Default: abstração

**Curva logarítmica, proporção áurea, geometria orgânica que evoca rio sem mostrar rio.**

Natureza literal em material de empresa de tecnologia soa **new-age, ambientalista ou turística**. A Iarandu se mantém **abstrata na maior parte do material**.

### A exceção fotográfica

**Uma única imagem fotográfica forte, em um único momento** — provavelmente abertura do deck institucional. Critérios:

- **Escala.** Não close-up. Vista aérea, vista distante, paisagem.
- **Silêncio.** Geometria natural quieta, sem pessoa em movimento.
- **Respiração.** Espaço negativo, céu, água — não floresta densa.
- **Autoria.** Não stock. Foto com olhar.

**Referentes recomendados:**
- **Sebastião Salgado** — *Amazônia* (2021).
- **Araquém Alcântara** — alternativa brasileira.
- **Arquivos científicos do INPA e Museu Paraense Emílio Goeldi** — alternativa de baixo custo, com olhar.

**Princípio:** **resistir à tentação de povoar o material com fotografia. A escassez é o que dá força à exceção.**

---

## Logo

**Logo provisório em uso. Mantido para a v1 do material institucional.**

### Conceito do ícone
- Três **órbitas atômicas** (elipses) ao redor de um ponto central.
- Paleta: **verde-musgo** definido.
- Na **órbita externa, canto superior direito**, há um **ponto urucum** representando um planeta na órbita.
- O **pingo do "i"** da palavra *iarandu* **rima** com esse ponto da órbita.

### Calibragens para v1
- **Recalibrar traço** das três elipses para **espessura consistente**.
- **Substituir wordmark genérico** por **"iarandu"** em **Fraunces Sharp lowercase**.
- **Ponto final** após a palavra *"iarandu."* em **urucum**.

---

## Reconciliação com referências anteriores (nota de execução)

A direção **Mœbius / ilustração editorial** levantada em `07-references-and-anti-references.md` **fica em segundo plano** diante do princípio compositivo declarado aqui:

- **v1 default:** abstração geométrica + uma única exceção fotográfica.
- **Mœbius como alma:** se houver ilustração customizada (capa de manifesto, página de erro, slide de abertura raro), o **espírito Mœbius** orienta o traço — escala impossível, contemplação, retrofuturismo quieto. **Não como pattern, não como decoração.**
- **Indígenas integrando-se à tecnologia:** **fora de v1.** Reabrir em v2 com colaboração indígena real (autoria paga, creditada). v1 fica em registro abstrato — palavra (*arandu*), pigmento (*urucum*), paisagem (floresta, rio, nuvem).

---

## Implicação operacional para a landing

- **Hero:** modo Herzog. Fraunces Sharp em uma linha de manifesto. Branco-papel. Urucum reservado para uma única palavra-chave ou para o ponto final.
- **Seções de evidência (cases, números, processo):** modo Linear. Inter Tight, hierarquia funcional, verde-musgo e azul-nanquim para estrutura, urucum apenas onde aponta.
- **Imagem fotográfica:** **uma só na home**, se entrar — vista aérea, autoria. Ou nenhuma, e fica para o deck.
- **Espaço:** generoso. **A página respira como página de revista, não como tela de SaaS.**
