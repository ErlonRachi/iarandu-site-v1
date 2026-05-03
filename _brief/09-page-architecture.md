# Iarandu — Arquitetura da Página (Round 5)

## Estrutura aprovada

| # | Seção | Modo | Função | Conteúdo obrigatório |
|---|---|---|---|---|
| 1 | Hero / manifesto | Herzog | Posicionamento direto | 1 linha Fraunces + sublinha Inter Tight + 1 CTA |
| 2 | Frase-tese | Herzog | API humana + fila da TI | bloco de manifesto, 80–120 palavras |
| 3 | O que fazemos | Linear | Dois modelos: Projeto fechado / AI as a Service | duas colunas distintas, sem cards iguais |
| 4 | Para quem | Linear | 3 perfis + áreas (CCO, CHRO, COO, CFO, CPTO) | lista, sem ícone-clipart |
| 5 | Cases | Linear | Prova: TOTVS / ANSN / Chiefs Group | 3 blocos diferenciados, placeholders aprováveis |
| 6 | Trilha dos fundadores | Linear | Credenciais individuais, rotuladas separadamente | logos + label "Onde os fundadores já estiveram" |
| 7 | Posição em relação à TI | Herzog | Aliados táticos, não substitutos | manifesto curto |
| 8 | Sócios | Linear | Confiança pessoal | 3 mini-bios + LinkedIn, foto opcional |
| 9 | A palavra arandu | Herzog | Cosmologia, última pausa antes do CTA | Fraunces, breve, urucum em uma palavra |
| 10 | CTA final | Linear | Formulário curto: nome / empresa / desafio | 3 campos, nada mais |
| F | Footer | Linear | São Paulo · Milano + LinkedIn | identidade binacional sutil |

## Hero

**Direção escolhida: (ii) Posicionamento.**

Ancora candidata para o hero (a refinar com Erlon antes do build):

> **Construímos a camada de IA que sua área de negócio precisa — sem entrar na fila da TI.**

Sublinha provável (Inter Tight, ~1 linha): contextualiza "sua área" → comercial, RH, operações, financeiro — e reforça aliança com o CTO em vez de substituição.

## CTA

**Formulário curto, 3 campos:**
1. Nome
2. Empresa
3. Desafio em 1 frase

Sem dropdowns, sem categorias, sem captchas decorativos. Submit envia para `we@iarandu.tech`.

Confirmação pós-envio: bloco breve em modo Herzog. Sem modal, sem "thanks for reaching out!". Texto a refinar.

## Domínio e contato

- **Domínio:** `iarandu.tech`
- **E-mail de contato:** `we@iarandu.tech`

> Nota: o `we@` é coerente com a primeira pessoa do plural da voz — ecoa *"Construímos. Modernizamos. Treinamos."* Vale preservar.

## Implicação para implementação

- Site **estático** (Astro) renderiza tudo. Formulário envia via endpoint serverless ou serviço (Formspree, Resend, ou mailto fallback) — decidir em Round 6.
- **Sem analytics agressivo na v1.** Marina não tolera cookie-banner. Considerar **Plausible** ou similar (sem cookies, sem banner) — confirmar em Round 6.
- **Sem chatbot.** Coerente com "contrata por confiança pessoal".
