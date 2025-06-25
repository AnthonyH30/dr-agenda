# Doutor Agenda

Doutor Agenda é uma plataforma SaaS moderna para gestão de clínicas, médicos, pacientes e agendamentos, com suporte a pagamentos e dashboards analíticos. O sistema foi desenvolvido para ser escalável, seguro e fácil de usar, utilizando as melhores práticas do ecossistema JavaScript/TypeScript.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Banco de Dados](#banco-de-dados)
  - [Autenticação e Autorização](#autenticação-e-autorização)
  - [Pagamentos](#pagamentos)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)
- [Licença](#licença)

---

## Tecnologias Utilizadas

- **Next.js** 15 (App Router, SSR, API Routes)
- **React** 19
- **TypeScript**
- **Tailwind CSS** (UI moderna e responsiva)
- **Drizzle ORM** (mapeamento objeto-relacional)
- **PostgreSQL** (banco de dados relacional)
- **Better Auth** (autenticação robusta)
- **Stripe** (pagamentos e assinaturas)
- **React Query** (cache e sincronização de dados)
- **Shadcn** (componentes acessíveis)
- **Zod** (validação de schemas)
- **Recharts** (gráficos e dashboards)
- **ESLint & Prettier** (padronização e qualidade de código)

---

## Arquitetura do Projeto

### Frontend

- **Next.js App Router**: Estrutura baseada em rotas de arquivos, com páginas protegidas por autenticação.
- **Componentização**: UI dividida em componentes reutilizáveis (`/components/ui`), seguindo Atomic Design.
- **Tailwind CSS**: Utilizado para estilização rápida e responsiva.
- **React Query**: Gerencia o estado assíncrono e cache de dados.
- **Shadcn**: Fornece componentes acessíveis e customizáveis.
- **Recharts**: Dashboards interativos para visualização de KPIs da clínica.

### Backend

- **API Routes do Next.js**: Endpoints para autenticação, webhooks do Stripe e ações protegidas.
- **Drizzle ORM**: Abstração de acesso ao banco de dados, com schemas fortemente tipados.
- **Camada de Actions**: Lógica de negócio separada em actions (`/src/actions`), facilitando manutenção e testes.

### Banco de Dados

- **PostgreSQL**: Estrutura relacional robusta, com tabelas para usuários, clínicas, médicos, pacientes, agendamentos, sessões, contas e verificações.
- **Migrations**: Gerenciadas via Drizzle Kit.
- **Relacionamentos**: Suporte a múltiplas clínicas por usuário, médicos e pacientes vinculados à clínica, agendamentos relacionando médico, paciente e clínica.

### Autenticação e Autorização

- **Better Auth**: Suporte a login via email e senha, sessões seguras, integração com Drizzle ORM.
- **Proteção de Rotas**: Middleware e guards nas páginas para garantir acesso apenas a usuários autenticados e com plano ativo.

### Pagamentos

- **Stripe**: Integração completa para cobrança de assinaturas, webhooks para atualização de status, e controle de planos dos usuários.

---

## Funcionalidades Principais

- Cadastro e gestão de clínicas, médicos e pacientes
- Agendamento de consultas com controle de disponibilidade
- Dashboard com KPIs: faturamento, consultas, pacientes, médicos, top médicos e especialidades
- Autenticação segura (email e senha)
- Gestão de assinaturas e pagamentos via Stripe
- Validação de dados robusta com Zod

---

## Como rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/doutor-agenda.git
   cd doutor-agenda
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` com as seguintes variáveis:
     ```
     DATABASE_URL=postgres://user:password@localhost:5432/doutor_agenda
     GOOGLE_CLIENT_ID=...
     GOOGLE_CLIENT_SECRET=...
     STRIPE_SECRET_KEY=...
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
     ```

4. **Rode as migrations do banco:**

   ```bash
   npx drizzle-kit push
   ```

5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

6. **Acesse:** [http://localhost:3000](http://localhost:3000)

---

## Scripts Disponíveis

- `npm run dev` — Inicia o ambiente de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run start` — Inicia o servidor em modo produção
- `npm run lint` — Analisa o código com ESLint

---

## Deploy

O deploy foi feito na [Vercel](https://dr-agenda-7h7f.vercel.app/).

---

## Licença

Este projeto é open-source sob a licença MIT.

---

Se precisar de mais detalhes técnicos ou exemplos de uso, consulte os arquivos de código ou abra uma issue!
