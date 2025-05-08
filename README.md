# 🃏 PDT — Turn-Based Card Game

## 📌 Description

**EN 🇬🇧:**  
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
  - Python
  - Flask
  - Flask-SocketIO
  - Python-dotenv

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

### 2.Install dependencies
```bash
pnpm install
```
⚠️ If you are on an exFAT file system, make sure you have in .npmrc:
```bash
node-linker=hoisted
```

### 3.Run locally
Frontend
```bash
cd apps/frontend
pnpm run dev
```
Access in the browser: http://localhost:5173

Backend
```bash
cd apps/backend
python -m venv venv
```

On Windows
```bash
.\venv\Scripts\activate
```

On macOS/Linux
```bash
source venv/bin/activate
```

```bash
pip install -r requirements.txt
python app.py
```
The backend will run on: http://localhost:5000

---

## 📂 Project structure
```bash
pdt/
├── apps/
│   ├── frontend/   # React + Vite + TS + SASS
│   │   └── src
│   │       └── components/ui # Basic and common components from the application, including types, styles, testing and stories by directory
│   └── backend/    # Python + Flask + Socket.IO
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

---

## 🛠️ License
MIT © 2025 — Created by [Guaiman94](https://github.com/Guaiman94) & [JCMiriam](https://github.com/JCMiriam)
