# Landing Page: Loja de Materiais

Landing page responsiva para uma loja de materiais, pensada para converter visitantes em pedidos de orçamento pelo WhatsApp.

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)

**Demo:** [landing-materials.vercel.app](https://landing-materials.vercel.app)

| Desktop | Mobile |
|---|---|
| ![Versão desktop](docs/desktop.png) | ![Versão mobile](docs/mobile.png) |

## Funcionalidades

- Seções de apresentação, destaques, benefícios, galeria, depoimentos, sobre e contato.
- Botão flutuante e chamadas para ação que abrem o WhatsApp com uma mensagem já preenchida.
- Animações de entrada ao rolar a página, com um hook próprio (`useReveal`) baseado em `IntersectionObserver`.
- **Conteúdo separado do layout:** textos, contatos e produtos ficam em `src/data/site.js`, então a página pode ser adaptada para outra loja sem mexer nos componentes.
- Layout *mobile-first*.

## Tecnologias

React 19 · Vite · Tailwind CSS 4 · ESLint

## Estrutura

```
src/
├── sections/     # Hero, Highlights, Benefits, Gallery, Testimonials, About, Contact, Footer
├── components/   # FloatingWhatsApp, Reveal
├── hooks/        # useReveal
├── data/site.js  # Conteúdo da página (textos, contatos, produtos)
└── utils/        # Montagem do link do WhatsApp
```

## Como executar

Pré-requisito: Node.js 20+.

```bash
git clone https://github.com/EldenXLe/LandingMaterials.git
cd LandingMaterials
npm install
npm run dev
```

Acesse `http://localhost:5173`. Para gerar o build de produção, use `npm run build`.

Para personalizar a página, edite `src/data/site.js` (nome da loja, número do WhatsApp, produtos e textos).
