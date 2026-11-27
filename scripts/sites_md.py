"""Shared helpers for reading and writing the site registry (sites.md).

Standard library only, so agents and GitHub Actions can run it with no setup.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITES_MD = ROOT / "sites.md"
START = "<!-- sites:start -->"
END = "<!-- sites:end -->"
NAME_RE = re.compile(r"^[a-z0-9][a-z0-9-]{0,37}[a-z0-9]$")
LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")


def clean(text: str) -> str:
    """Make free text safe for one markdown table cell."""
    return " ".join(text.replace("|", "/").split())


def _block(text: str):
    if START not in text or END not in text:
        raise SystemExit(f"sites.md must contain {START} and {END}")
    head, rest = text.split(START, 1)
    body, tail = rest.split(END, 1)
    return head, body.strip("\n").split("\n"), tail


def read_sites():
    """Return a list of dicts: name, description, type, url, created."""
    _, lines, _ = _block(SITES_MD.read_text())
    sites = []
    for line in lines[2:]:  # skip header and separator rows
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) != 5:
            raise SystemExit(f"Bad sites.md row (need 5 cells): {line}")
        link = LINK_RE.search(cells[3])
        sites.append({
            "name": cells[0],
            "description": cells[1],
            "type": cells[2],
            "url": link.group(1) if link else cells[3],
            "created": cells[4],
        })
    return sites


def add_site(name, description, kind, url, created):
    text = SITES_MD.read_text()
    head, lines, tail = _block(text)
    row = f"| {name} | {clean(description)} | {kind} | [open]({url}) | {created} |"
    lines.append(row)
    SITES_MD.write_text(f"{head}{START}\n" + "\n".join(lines) + f"\n{END}{tail}")
