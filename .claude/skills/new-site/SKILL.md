---
name: new-site
description: Create a new static site in sites-hub. Use whenever the owner asks for a new site or page. Interviews the owner first, then creates it via the Create site workflow.
---

# New site

1. **Interview first.** Ask several questions in one batch and wait: purpose, audience, pages/sections, look and feel (colours, mood), content they can supply, anything dynamic they expect (remember: static only), name suggestion. Offer sensible defaults.
2. Pick a name: 2-39 chars, `a-z 0-9 -`, not already in `sites.md`.
3. Create it: trigger **Create site** (`create-site.yml`, ref `main`) with `name`, `description` (creates a folder in the hub). If you cannot trigger it, run `python3 scripts/new_site.py --name X --description "..."` and commit.
4. Pull `main`, build out the content in `sites/<name>/` per the interview. Keep relative links, mobile-first, light/dark.
5. `python3 scripts/check.py`, commit, push to `main`.
6. Verify via the deploy-site skill, then report the URL and what you built.

Never include private info: the repo is public.
