#!/usr/bin/env python3
"""Build the hub's GitHub Pages output into _site/.

Generates index.html (a card grid) from sites.md and copies sites/ alongside.
Never hand-edit the generated index; change sites.md or this script instead.
Standard library only.
"""
import html
import pathlib
import shutil
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from sites_md import ROOT, read_sites  # noqa: E402

OUT = ROOT / "_site"

PAGE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sites Hub</title>
<meta name="description" content="A collection of small static websites.">
<link rel="icon" href="favicon.svg">
<style>
:root{{--bg:#fafafa;--fg:#1a1a1a;--muted:#5c5c66;--card:#fff;--line:#e3e3e8;--accent:#3b5bdb}}
@media (prefers-color-scheme:dark){{:root{{--bg:#121214;--fg:#ececf1;--muted:#a0a0ad;--card:#1b1b1f;--line:#2e2e35;--accent:#8ea2ff}}}}
*{{box-sizing:border-box}}
body{{margin:0;font:16px/1.5 system-ui,sans-serif;background:var(--bg);color:var(--fg)}}
main{{max-width:960px;margin:0 auto;padding:48px 16px}}
h1{{margin:0 0 4px;font-size:2rem}}
p.lead{{margin:0 0 32px;color:var(--muted)}}
.grid{{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}}
a.card{{display:block;padding:20px;background:var(--card);border:1px solid var(--line);border-radius:12px;color:inherit;text-decoration:none;transition:transform .15s,border-color .15s}}
a.card:hover,a.card:focus-visible{{transform:translateY(-2px);border-color:var(--accent);outline:none}}
a.card h2{{margin:0 0 6px;font-size:1.1rem;color:var(--accent)}}
a.card p{{margin:0;color:var(--muted);font-size:.95rem}}
small{{display:block;margin-top:12px;color:var(--muted)}}
</style>
</head>
<body>
<main>
<h1>Sites Hub</h1>
<p class="lead">{count} small static websites.</p>
<div class="grid">
{cards}
</div>
</main>
</body>
</html>
"""

CARD = (
    '<a class="card" href="{url}"><h2>{title}</h2><p>{desc}</p>'
    "<small>Added {created}</small></a>"
)

ICON = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">'
    '<rect width="32" height="32" rx="7" fill="#3b5bdb"/>'
    '<path d="M8 12h16M8 16h16M8 20h10" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>'
)


def main():
    sites = read_sites()
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    cards = "\n".join(
        CARD.format(
            url=html.escape(s["url"], quote=True),
            title=html.escape(s["name"].replace("-", " ").title()),
            desc=html.escape(s["description"]),
            created=html.escape(s["created"]),
        )
        for s in sites
    ) or '<p class="lead">No sites yet.</p>'
    (OUT / "index.html").write_text(PAGE.format(count=len(sites), cards=cards))
    (OUT / "favicon.svg").write_text(ICON)
    (OUT / ".nojekyll").write_text("")
    if (ROOT / "sites").is_dir():
        shutil.copytree(ROOT / "sites", OUT / "sites")
    print(f"Built {OUT} with {len(sites)} site(s)")


if __name__ == "__main__":
    main()
