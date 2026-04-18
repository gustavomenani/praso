# Praso

Landing page da vaga Delivery Station Associate da Praso, com stack moderna em Vite, CSS modular e conteudo renderizado via JavaScript.

## Requisitos

- Node.js 20+
- npm 10+

## Instalar e rodar

```bash
npm install
npm run dev
```

Abra o endereco mostrado no terminal (por padrao `http://localhost:5173`).

## Scripts

- `npm run dev`: servidor local para desenvolvimento.
- `npm run build`: build de producao em `dist/`.
- `npm run preview`: preview local do build.
- `npm run optimize-images`: gera/atualiza WebP e AVIF com base nos JPG em `public/assets/images/`.
- `npm run lint`: roda ESLint + Stylelint + check do Prettier.
- `npm run format`: formata o projeto com Prettier.
- `npm run format:check`: valida formatacao sem alterar arquivos.

## Estrutura do projeto

- `index.html`: shell da pagina e metadados.
- `src/main.js`: inicializacao da app, render dos blocos e interacoes.
- `src/data/content.js`: textos e dados dos cards/secoes.
- `src/data/icons.js`: biblioteca de icones SVG injetados no render.
- `src/styles/main.css`: ponto de entrada de estilos.
- `src/styles/tokens.css`: design tokens e tema dark.
- `src/styles/base.css`: reset, base, topbar e tipografia.
- `src/styles/sections.css`: estilos das secoes e componentes.
- `src/styles/responsive.css`: breakpoints e ajustes responsivos.
- `public/assets/images/`: imagens da pagina (JPG/WEBP/AVIF).
- `public/images/favicon.png`: favicon.
- `scripts/optimize-images.mjs`: script de otimizacao das imagens.

## Fluxo recomendado

1. Atualize/adicione imagens JPG em `public/assets/images/`.
2. Rode `npm run optimize-images` para gerar WebP/AVIF.
3. Rode `npm run lint` para validar qualidade.
4. Rode `npm run build` para validar bundle final.
