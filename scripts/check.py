#!/usr/bin/env python3
"""Repo health check. Exit code 1 means something is wrong; read the messages.

Run before every commit:  python3 scripts/check.py
"""
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from sites_md import NAME_RE, ROOT, read_sites  # noqa: E402

REQUIRED = [
    "CLAUDE.md", "AGENTS.md", "README.md", "sites.md",
    "docs/architecture.md", "docs/agents.md",
    ".github/workflows/create-site.yml", ".github/workflows/pages.yml",
    ".github/workflows/check.yml",
    "templates/site-starter/index.html", "templates/site-starter/style.css",
    "templates/site-starter/404.html", "templates/site-starter/favicon.svg",
]
SECRET_RE = re.compile(r"(ghp_|github_pat_|gho_|ghs_)[A-Za-z0-9_]{20,}")
errors = []


def err(msg):
    errors.append(msg)


for rel in REQUIRED:
    if not (ROOT / rel).is_file():
        err(f"missing required file: {rel}")

sites = read_sites()
names = [s["name"] for s in sites]
for dup in {n for n in names if names.count(n) > 1}:
    err(f"duplicate site in sites.md: {dup}")
for s in sites:
    if not NAME_RE.match(s["name"]):
        err(f"invalid site name: {s['name']}")
    if s["type"] == "folder" and not (ROOT / "sites" / s["name"] / "index.html").is_file():
        err(f"sites.md lists folder site '{s['name']}' but sites/{s['name']}/index.html is missing")
folders = [p.name for p in (ROOT / "sites").glob("*") if p.is_dir()] if (ROOT / "sites").is_dir() else []
folder_rows = {s["name"] for s in sites if s["type"] == "folder"}
for f in folders:
    if f not in folder_rows:
        err(f"sites/{f} exists but is not listed in sites.md")

for path in ROOT.rglob("*"):
    if ".git" in path.parts or "_site" in path.parts or not path.is_file():
        continue
    try:
        text = path.read_text()
    except (UnicodeDecodeError, OSError):
        continue
    if SECRET_RE.search(text):
        err(f"possible secret/token in {path.relative_to(ROOT)} (this repo is public!)")

if errors:
    print("\n".join(f"ERROR: {e}" for e in errors))
    sys.exit(1)
print(f"OK: {len(sites)} site(s), all checks passed")
