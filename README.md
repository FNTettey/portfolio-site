# Francis Tettey — Portfolio (Python + React + MUI)

## Overview

The goal of this project was to build a personal portfolio web application where I could showcase my existing and future software projects, experience, certifications, and CV. It serves as a central hub for recruiters, collaborators, and potential employers to learn more about my background and work.

---

## Tech Stack

### 🔧 Frontend

- **React** — for building the UI
- **React Router** — for client-side routing
- **Material UI (MUI)** — for component styling and responsive layouts
- **Vite** — for fast development builds
- **Vercel** — for frontend deployment
- **Theme switching** — includes light/dark mode toggle

### ⚙️ Backend

- **Python** — core language
- **FastAPI** — for serving the API endpoints
- **Static file serving** — handles CV, image files, and downloadable assets
- **JSON file database** — used for storing project data (for simplicity)
- **CORS middleware** — allows frontend to securely interact with backend
- **Render** — for backend deployment

---

## Deployment

- **Frontend**: [Vercel](https://vercel.com/) — auto-deploys from GitHub and serves the React SPA
- **Backend**: [Render](https://render.com/) — serves the FastAPI backend and static files

---

## Quick Start (Local Development)

### Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
