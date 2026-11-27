---
name: deploy-site
description: Deploy and verify sites-hub on GitHub Pages, including running the Create site workflow. Use after any site change or when a site is not showing.
---

# Deploy and verify

Deploys are automatic: any push to `main` runs `.github/workflows/pages.yml`, and the **Create site** workflow (`create-site.yml`) calls it itself.

1. `python3 scripts/check.py && python3 scripts/build_hub.py` locally.
2. Push to `main`.
3. Check the latest `Deploy hub to Pages` run succeeded (GitHub Actions list/get tools). On failure read the job logs and fix.
4. Open `https://msather.github.io/sites-hub/` and `https://msather.github.io/sites-hub/sites/<name>/` and confirm they load (Pages can take a minute).

**Create site workflow:** `workflow_dispatch` on `create-site.yml`, ref `main`, inputs `name`, `description`. If you cannot trigger workflows, ask the owner to click Actions → Create site → Run workflow.
