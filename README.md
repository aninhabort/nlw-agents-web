# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.

## Descrição

O **NLW Agents** é uma aplicação web construída com React, utilizando Vite para o bundling e TailwindCSS para estilização. O projeto segue boas práticas de organização de componentes, gerenciamento de rotas e consumo de APIs.

## Principais Tecnologias e Bibliotecas

- **React 19** – Biblioteca principal para construção da interface.
- **Vite** – Ferramenta de build e desenvolvimento rápido.
- **TypeScript** – Tipagem estática para maior segurança.
- **React Router DOM** – Gerenciamento de rotas SPA.
- **TanStack React Query** – Gerenciamento de dados assíncronos (fetch/cache de API).
- **TailwindCSS** – Utilitário para estilização rápida e responsiva.
- **Radix UI** – Componentes acessíveis e semânticos.
- **Shadcn/ui** – Sistema de componentes.
- **Lucide React** – Biblioteca de ícones.

## Padrões de Projeto

- **Componentização**: Separação de componentes reutilizáveis em `src/components`.
- **Rotas**: Definidas em `src/app.tsx` usando React Router.
- **Gerenciamento de estado assíncrono**: Utilização do React Query para requisições e cache.
- **Estilização utilitária**: TailwindCSS com customizações em `src/index.css`.
- **Aliases de importação**: Utilização de `@` para facilitar imports a partir de `src`.

## Setup e Configuração

1. **Clone o repositório**
   ```bash
   git clone <url-do-repo>
   cd nlw-agents/web
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Rode o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Build para produção**
   ```bash
   npm run build
   ```

5. **Preview do build**
   ```bash
   npm run preview
   ```

## Observações

- Certifique-se de ter o Node.js instalado (recomendado versão 18+).
- O projeto utiliza um backend para fornecer as rotas de API (ex: `/rooms`). Configure o backend conforme necessário. 