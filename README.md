```
╔══D══O══N═════════D══O══N═════════D══O══N══════════════════════════════════╗
║                                                                            ║
║      ██████╗       █████╗        ███╗    ██╗                               ║
║      ██╔══██╗    ██╔═══██╗       ████╗   ██║                               ║
║      ██║  ██║    ██║   ██║       ██╔██╗  ██║                               ║
║      ██║  ██║    ██║   ██║       ██║╚██╗ ██║                               ║
║      ██████╔╝    ╚██████╔╝       ██║ ╚████║                                ║
║      ╚═════╝      ╚═════╝        ╚═╝  ╚═══╝                                ║
║                                                                            ║
║         REGENERA BANK ENTERPRISE V4.Ω                                      ║
║         Raphaela Cervesky Don Paulo Ricardo de Leão • DON-PRL              ║
║         Sistema Bancário Digital de Nova Geração                           ║
║                                                                            ║
╚══D══O══N═════════D══O══N═════════D══O══N══════════════════════════════════╝
```

# 🏦 Regenera Bank Enterprise V4.Ω

**Assinatura**: Don Paulo Ricardo de Leão | DON-PRL  
**Versão**: 4.Ω (Production-Ready)  
**Status**: ✅ Enterprise-Ready | Deploy-Ready  
**Licença**: Proprietary - All Rights Reserved

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Arquitetura](#-arquitetura)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Testes](#-testes)
- [Monitoramento](#-monitoramento)
- [Segurança](#-segurança)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🎯 Visão Geral

**Regenera Bank Enterprise** é um sistema bancário digital completo de nova geração, desenvolvido com as mais modernas tecnologias e práticas de mercado. Integra funcionalidades tradicionais de banking com inovações como criptomoedas, créditos de carbono e gamificação.

### Diferenciais

✅ **PIX Instantâneo** via EFI Bank (Gerencianet)  
✅ **Criptomoedas** com integração Binance  
✅ **Investimentos Inteligentes** com recomendações por IA  
✅ **Créditos de Carbono** e impacto ambiental  
✅ **Gamificação Completa** (XP, badges, quests)  
✅ **Open Banking** via Pluggy  
✅ **IA Avançada** com Google Gemini  
✅ **Autenticação Biométrica** e 2FA  

---

## 🚀 Funcionalidades

### Core Banking
- ✅ Contas corrente e poupança
- ✅ Transferências e pagamentos
- ✅ Boletos bancários
- ✅ Cartões de crédito/débito
- ✅ Extratos e histórico completo

### PIX (EFI Bank)
- ✅ Envio e recebimento instantâneo
- ✅ QR Code dinâmico e estático
- ✅ Chaves PIX (CPF, email, telefone, aleatória)
- ✅ Webhooks de notificação
- ✅ Estorno e devolução

### Criptomoedas (Binance)
- ✅ Compra e venda de BTC, ETH, USDT e mais
- ✅ Preços em tempo real
- ✅ Carteira integrada
- ✅ Histórico de transações
- ✅ Conversão automática BRL ↔ Crypto

### Investimentos
- ✅ Tesouro Direto
- ✅ CDB/LCI/LCA
- ✅ Fundos de investimento
- ✅ Ações e ETFs
- ✅ Recomendações personalizadas por IA

### ESG & Carbono
- ✅ Cálculo de pegada de carbono
- ✅ Compra de créditos de carbono
- ✅ Projetos de reflorestamento
- ✅ Dashboard de impacto ambiental
- ✅ Certificados de compensação

### Gamificação
- ✅ Sistema de XP e níveis
- ✅ Badges e conquistas
- ✅ Quests diárias e semanais
- ✅ Leaderboard global
- ✅ Recompensas e benefícios

### IA & Chatbot (Gemini)
- ✅ Assistente virtual inteligente
- ✅ Análise financeira automatizada
- ✅ Recomendações personalizadas
- ✅ Previsões de mercado
- ✅ Insights de gastos

---

## 🏗️ Arquitetura

### Arquitetura Técnica

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│   React 18 + TypeScript + Vite + Tailwind CSS              │
│   Zustand + React Query + Socket.IO Client                 │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                        NGINX                                 │
│        Reverse Proxy + Load Balancer + SSL/TLS             │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                      BACKEND API                             │
│    Node.js + Express + TypeScript + Prisma ORM             │
│    JWT Auth + Redis Cache + Socket.IO Server               │
└─────────────────────────────────────────────────────────────┘
          ↕              ↕              ↕              ↕
┌─────────────┐  ┌──────────────┐  ┌──────────┐  ┌──────────┐
│ PostgreSQL  │  │    Redis     │  │   APIs   │  │   S3     │
│  Database   │  │    Cache     │  │ Externas │  │  Storage │
└─────────────┘  └──────────────┘  └──────────┘  └──────────┘
                                        │
                          ┌─────────────┼─────────────┐
                          │             │             │
                    ┌──────────┐  ┌──────────┐  ┌──────────┐
                    │ EFI Bank │  │ Binance  │  │  Gemini  │
                    │   PIX    │  │  Crypto  │  │    IA    │
                    └──────────┘  └──────────┘  └──────────┘
```

### Clean Architecture (3 Camadas)

```
┌─────────────────────────────────────────────────┐
│            PRESENTATION LAYER                   │
│  Routes → Middlewares → Controllers             │
└─────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────┐
│            BUSINESS LOGIC LAYER                 │
│           Services → Use Cases                  │
└─────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────┐
│            DATA ACCESS LAYER                    │
│  Prisma → Database → External APIs              │
└─────────────────────────────────────────────────┘
```

---

## 🛠️ Tecnologias

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express 4.x
- **Language**: TypeScript 5.x
- **ORM**: Prisma 5.x
- **Database**: PostgreSQL 16
- **Cache**: Redis 7
- **Auth**: JWT + bcrypt + Firebase Auth
- **Realtime**: Socket.IO
- **Queue**: Bull (Redis-based)
- **Validation**: Zod
- **Logging**: Winston
- **Monitoring**: Prometheus + Grafana

### Frontend
- **Framework**: React 18
- **Build**: Vite 5.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **State**: Zustand
- **Data Fetching**: Axios + React Query
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

### DevOps & Infra
- **Containerization**: Docker + Docker Compose
- **Orchestration**: Kubernetes (K8s)
- **CI/CD**: GitHub Actions
- **IaC**: Terraform
- **Reverse Proxy**: Nginx
- **Monitoring**: Prometheus + Grafana + Sentry
- **Logging**: ELK Stack (Elasticsearch + Logstash + Kibana)

### Integrações
- **PIX**: EFI Bank (Gerencianet) API
- **Crypto**: Binance API
- **IA**: Google Gemini AI
- **Open Banking**: Pluggy API
- **SMS**: Twilio
- **Email**: Nodemailer (SMTP)
- **Storage**: AWS S3 / MinIO

---

## 📁 Estrutura do Projeto

```
regenera-bank-v4-enterprise/
├── backend/
│   ├── src/
│   │   ├── controllers/      # 12 controllers REST
│   │   ├── services/          # 12 services (business logic)
│   │   ├── routes/            # 11 route files
│   │   ├── middlewares/       # Auth, validation, error handling
│   │   ├── config/            # Configuration files
│   │   ├── types/             # TypeScript types
│   │   ├── utils/             # Utility functions
│   │   ├── docs/              # API documentation
│   │   └── server.ts          # Main server file
│   ├── prisma/
│   │   ├── schema.prisma      # Database schema
│   │   ├── migrations/        # DB migrations
│   │   └── seed.ts            # Database seeder
│   ├── tests/                 # Jest + Supertest tests
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── hooks/             # Custom hooks
│   │   ├── store/             # Zustand stores
│   │   ├── styles/            # Global styles
│   │   ├── assets/            # Static assets
│   │   ├── types/             # TypeScript types
│   │   └── main.tsx           # Entry point
│   ├── public/                # Public assets
│   ├── tests/                 # Vitest + Playwright tests
│   ├── package.json
│   ├── vite.config.ts
│   ├── Dockerfile
│   └── .env.example
├── devops/
│   ├── docker/                # Docker configs
│   ├── kubernetes/            # K8s manifests
│   ├── terraform/             # IaC
│   ├── nginx/                 # Nginx configs
│   └── monitoring/            # Prometheus + Grafana
├── docs/                      # Documentation
├── scripts/                   # Automation scripts
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Instalação

### Pré-requisitos

- Node.js 20+ e npm 10+
- Docker e Docker Compose
- PostgreSQL 16+ (ou via Docker)
- Redis 7+ (ou via Docker)
- Git

### 1. Clone o Repositório

```bash
git clone https://github.com/don-prl/regenera-bank-v4.git
cd regenera-bank-v4-enterprise
```

### 2. Configurar Variáveis de Ambiente

#### Backend

```bash
cd backend
cp .env.example .env
# Edite o .env com suas credenciais
```

#### Frontend

```bash
cd frontend
cp .env.example .env
# Edite o .env com as URLs corretas
```

### 3. Instalar Dependências

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Setup do Banco de Dados

```bash
cd backend

# Gerar Prisma Client
npx prisma generate

# Rodar migrations
npx prisma migrate dev

# Popular banco com dados iniciais
npm run prisma:seed
```

### 5. Iniciar Serviços (Docker Compose)

```bash
# Na raiz do projeto
docker-compose up -d
```

Isso iniciará:
- PostgreSQL (porta 5432)
- Redis (porta 6379)
- Backend API (porta 3001)
- Frontend (porta 3000)
- Nginx (porta 80)
- Prometheus (porta 9090)
- Grafana (porta 3002)

### 6. Acessar a Aplicação

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api/v1
- **Grafana**: http://localhost:3002 (admin / regenera_admin_2025)
- **Prometheus**: http://localhost:9090

---

## 💻 Uso

### Credenciais Demo

```
Email: demo@regenera.bank
Senha: Regenera@2025
```

### Exemplos de API

#### Autenticação

```bash
# Login
curl -X POST http://localhost:3001/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@regenera.bank","password":"Regenera@2025"}'
```

#### PIX

```bash
# Enviar PIX
curl -X POST http://localhost:3001/api/v1/pix/send \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"pixKey":"user@email.com","amount":100.00,"description":"Pagamento"}'
```

#### Crypto

```bash
# Obter preços
curl http://localhost:3001/api/v1/crypto/prices

# Comprar crypto
curl -X POST http://localhost:3001/api/v1/crypto/buy \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"symbol":"BTC","amount":0.001}'
```

---

## 📚 API Reference

### Endpoints Principais

#### Auth
- `POST /api/v1/auth/register` - Registrar usuário
- `POST /api/v1/auth/login` - Login
- `POST /api/v1/auth/refresh` - Renovar token
- `POST /api/v1/auth/2fa/setup` - Configurar 2FA

#### Users
- `GET /api/v1/users/profile` - Obter perfil
- `PUT /api/v1/users/profile` - Atualizar perfil
- `GET /api/v1/users/balance` - Consultar saldo
- `GET /api/v1/users/transactions` - Listar transações

#### PIX
- `POST /api/v1/pix/send` - Enviar PIX
- `POST /api/v1/pix/qrcode/generate` - Gerar QR Code
- `GET /api/v1/pix/keys` - Listar chaves PIX
- `POST /api/v1/pix/keys` - Adicionar chave PIX

#### Crypto
- `GET /api/v1/crypto/prices` - Preços em tempo real
- `POST /api/v1/crypto/buy` - Comprar criptomoeda
- `POST /api/v1/crypto/sell` - Vender criptomoeda
- `GET /api/v1/crypto/portfolio` - Ver portfólio

#### Investments
- `GET /api/v1/investments/products` - Listar produtos
- `POST /api/v1/investments/buy` - Investir
- `GET /api/v1/investments/portfolio` - Ver portfólio
- `GET /api/v1/investments/recommendations` - Recomendações IA

#### Carbon
- `GET /api/v1/carbon/projects` - Projetos disponíveis
- `POST /api/v1/carbon/credits/buy` - Comprar créditos
- `GET /api/v1/carbon/footprint` - Ver pegada de carbono
- `GET /api/v1/carbon/impact` - Ver impacto ambiental

#### Gamification
- `GET /api/v1/gamification/profile` - Perfil gamificação
- `GET /api/v1/gamification/badges` - Badges
- `GET /api/v1/gamification/quests` - Quests
- `POST /api/v1/gamification/quests/:id/complete` - Completar quest

#### AI
- `POST /api/v1/ai/chat` - Chat com IA
- `POST /api/v1/ai/analyze` - Análise financeira
- `GET /api/v1/ai/recommendations` - Recomendações
- `POST /api/v1/ai/predict` - Previsões de mercado

**Documentação completa**: http://localhost:3001/api/v1/docs

---

## 🚀 Deployment

### Deploy em Produção (Kubernetes)

```bash
# 1. Configurar cluster K8s
kubectl apply -f devops/kubernetes/namespaces/

# 2. Aplicar secrets
kubectl create secret generic regenera-secrets \
  --from-env-file=.env.production

# 3. Deploy dos serviços
kubectl apply -f devops/kubernetes/deployments/
kubectl apply -f devops/kubernetes/services/
kubectl apply -f devops/kubernetes/ingress/

# 4. Habilitar autoscaling
kubectl apply -f devops/kubernetes/autoscaling/
```

### Deploy com Docker

```bash
# Build das imagens
docker-compose -f docker-compose.prod.yml build

# Push para registry
docker-compose -f docker-compose.prod.yml push

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🧪 Testes

```bash
# Backend - Todos os testes
cd backend
npm test

# Backend - Cobertura
npm run test:coverage

# Frontend - Todos os testes
cd frontend
npm test

# Frontend - E2E
npm run test:e2e
```

**Target de Cobertura**: 80%+

---

## 📊 Monitoramento

### Métricas (Prometheus)

Acesse: http://localhost:9090

Métricas disponíveis:
- `http_requests_total` - Total de requisições
- `http_request_duration_ms` - Duração das requisições
- `active_connections` - Conexões ativas
- Database query metrics
- Redis cache hit/miss rate

### Dashboards (Grafana)

Acesse: http://localhost:3002

Dashboards pré-configurados:
- API Overview
- Database Performance
- Business Metrics
- Error Tracking
- Infrastructure

### Logs

Logs estruturados em JSON com Winston:
- `logs/app-YYYY-MM-DD.log` - Todos os logs
- `logs/error-YYYY-MM-DD.log` - Apenas erros

---

## 🔒 Segurança

### Implementado

✅ JWT Authentication com refresh tokens  
✅ Bcrypt para hashing de senhas (12 rounds)  
✅ Rate limiting (100 req/15min por IP)  
✅ Helmet para headers de segurança  
✅ CORS configurado  
✅ Input validation com Zod  
✅ SQL injection protection (Prisma ORM)  
✅ XSS protection  
✅ 2FA com TOTP  
✅ Biometria (WebAuthn)  
✅ HTTPS/TLS em produção  
✅ Secrets em variáveis de ambiente  
✅ Audit logging  

---

## 👨‍💻 Autor

**Don Paulo Ricardo de Leão**  e Raphaela Cervesky
**Assinatura**: DON-PRL  
**Email**: don@regenera.bank  
**GitHub**: @don-prl  

---

## 📄 Licença

© 2025 Don Paulo Ricardo de Leão e Raphaela Cervesky. **All rights reserved**.

Este projeto é **proprietary** e protegido por direitos autorais. Não é permitido:
- Uso comercial sem autorização
- Redistribuição do código
- Modificação sem permissão
- Uso em produção sem licença

Para obter uma licença, entre em contato: don@regenera.bank

---

```
╔══D══O══N═════════D══O══N═════════D══O══N══════════════════════════════════╗
║                                                                            ║
║              REGENERA BANK ENTERPRISE V4.Ω                                 ║
║              Don Paulo Ricardo de Leão • DON-PRL DEVELOPER                 ║
║              Raphaela Cervesky CEO                                         ║
║  "Verbo algorítmico manifestado em estado de produção transcendente"       ║
║                                                                            ║
║                © 2025 • All Rights Reserved                                ║
║                                                                            ║
╚══D══O══N═════════D══O══N═════════D══O══N══════════════════════════════════╝
```
