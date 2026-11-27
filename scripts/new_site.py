#!/usr/bin/env python3
"""Create a new site from templates/site-starter and register it in sites.md.

Writes sites/<name>/ inside this hub repo and adds a row to sites.md.

Standard library only.
"""
import argparse
import datetime
import os
import pathlib
import shutil
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from sites_md import NAME_RE, ROOT, add_site, clean, read_sites  # noqa: E402

TEMPLATE = ROOT / "templates" / "site-starter"
OWNER = os.environ.get("GITHUB_REPOSITORY_OWNER", "msather")
HUB = os.environ.get("GITHUB_REPOSITORY", f"{OWNER}/sites-hub").split("/")[-1]
RESERVED = {HUB, "sites", "templates", "docs", "scripts"}
TEXT_SUFFIXES = {".html", ".css", ".svg", ".md", ".txt", ".json", ".xml"}


def render(dest: pathlib.Path, name: str, description: str, base: str):
    values = {
        "{{NAME}}": name,
        "{{TITLE}}": name.replace("-", " ").title(),
        "{{DESCRIPTION}}": clean(description),
        "{{BASE_URL}}": base,
        "{{YEAR}}": str(datetime.date.today().year),
    }
    shutil.copytree(TEMPLATE, dest)
    for path in dest.rglob("*"):
        if path.is_file() and path.suffix in TEXT_SUFFIXES:
            text = path.read_text()
            for key, val in values.items():
                text = text.replace(key, val)
            path.write_text(text)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--name", required=True)
    ap.add_argument("--description", required=True)
    args = ap.parse_args()

    name = args.name.strip()
    if not NAME_RE.match(name) or name in RESERVED:
        sys.exit(f"Invalid or reserved name '{name}'. Use 2-39 chars: a-z, 0-9, hyphens.")
    if name in {s["name"] for s in read_sites()}:
        sys.exit(f"'{name}' is already listed in sites.md")
    today = datetime.date.today().isoformat()

    dest = ROOT / "sites" / name
    if dest.exists():
        sys.exit(f"{dest} already exists")
    render(dest, name, args.description, f"/{HUB}/sites/{name}/")
    add_site(name, args.description, "folder", f"sites/{name}/", today)
    print(f"Created site '{name}'")


if __name__ == "__main__":
    main()
