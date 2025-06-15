# 🃏 PDT — Turn-Based Card Game

## 📌 Description
PDT is a turn-based multiplayer card game inspired by “Cards Against Humanity”-style mechanics, where players match response cards to a prompt card. It features rotating roles, round-based gameplay, and real-time synchronization via sockets.

---

## ⚙️ Technologies

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - SASS
  - Socket.IO Client

- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - Socket.IO
  - ts-node-dev
  - Jest (unit testing)

- **Monorepo:**
  - pnpm
  - Turborepo

---

## 🧪 Prerequisites

- Node.js (>=18)
- pnpm (>=8)
- Python 3.11+
- pip
- Git

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone --githubProjectUrl
```

### 2. Install dependencies
```bash
pnpm install
```
⚠️ If you are on an exFAT file system, make sure you have in .npmrc:
```bash
node-linker=hoisted
```

### 3. Run locally
#### Frontend
```bash
cd apps/frontend
pnpm run dev
```

#### Backend
```bash
cd apps/backend
pnpm dev
```

#### Run frontend and backend simultaneously
From root
```bash
pnpm dev
```

Access in the browser:
➜ http://localhost:5173

The backend will run on:
➜ http://localhost:5000

---

## 📚 Documentation 

#### Frontend
Component documentation:
View all UI components and their variants using Storybook.
```bash
cd apps/frontend
pnpm storybook
```
Access in browser:
➜ http://localhost:6006

Build static version (HTML):
```bash
cd apps/frontend
pnpm build-storybook
```
Output in:
➜ apps/frontend/storybook-static/index.html

#### Backend
API documentation (Swagger UI):
Once the backend is running, access the auto-generated API docs:
➜ http://localhost:4000/api/docs

---

## 🔬 Running tests

#### Frontend
Run all unit tests for frontend:
```bash
cd apps/frontend
pnpm test
```
To generate HTML coverage report:
```bash
cd apps/frontend
pnpm test -- --coverage
```
Open report at:
➜ apps/frontend/coverage/lcov-report/index.html

#### Backend
Run backend tests:
```bash
cd apps/backend
pnpm test
```
To generate coverage report:
```bash
cd apps/backend
pnpm test -- --coverage
```
Open report at:
➜ apps/backend/coverage/lcov-report/index.html

---

## 📂 Project structure
```bash
pdt/
├── apps/
│   ├── frontend/             # React + Vite + TS + SASS
│   │   └── src
│   │       └── components/ui # Basic and common components from the application, including types, styles, testing and stories by directory
│   └── backend/              # Express + TypeScript + Socket.IO
│       ├── src/
│       │   └── features/     # Modular endpoints (users, rooms, game, etc.)
│       └── tests/            # Unit tests
├── packages/
│   └── shared-types/         # Shared TypeScript types between frontend and backend
├── pnpm-workspace.yaml
├── turbo.json
├── package.json
└── .npmrc
```

---

## 🧩 Coming soon

- Game session and private room management 🔒  
- Role rotation system (President) 👑  
- Scoring and ranking system 🏆  
- Animated and responsive UI 🎨
- Reconnection logic for real-time gameplay 🔄

---

## 🛠️ License
MIT © 2025 — Created by [Guaiman94](https://github.com/Guaiman94) & [JCMiriam](https://github.com/JCMiriam)
