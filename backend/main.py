from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import json

BASE_DIR = Path(__file__).resolve().parent
app = FastAPI(title="Francis Tettey — Portfolio API")


origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://fntettey.com",
    "https://www.fntettey.com",
    "https://portfolio-site-nu-rose.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static files (CV, downloads, images)
static_dir = BASE_DIR / "static"
(static_dir / "downloads").mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=static_dir), name="static")

PROJECTS_PATH = BASE_DIR / "projects.json"

def load_projects():
    with open(PROJECTS_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.get("/api/projects")
def get_projects():
    return load_projects()

@app.get("/api/projects/{slug}")
def get_project(slug: str):
    projects = load_projects()
    project = next((p for p in projects if p.get("slug") == slug), None)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@app.get("/api/cv")
def get_cv():
    # Returns a URL path served by /static
    return {"url": "/static/cv.pdf"}

# Run locally:
#   cd backend
#   python -m venv .venv && source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
#   pip install -r requirements.txt
#   uvicorn main:app --reload --port 8000