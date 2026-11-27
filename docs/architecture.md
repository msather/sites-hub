# Architecture

```
sites.md ──► scripts/build_hub.py ──► _site/index.html (card grid)
sites/<name>/ ───────────────────────► _site/sites/<name>/
                                         │
                      .github/workflows/pages.yml ──► GitHub Pages
```

- **One Pages site** for this repo, deployed by the `Deploy hub to Pages` workflow (GitHub Actions source, not branch source).
- **Folder sites** live in `sites/<name>/` and are served at `https://msather.github.io/sites-hub/sites/<name>/`.
- **Create site workflow** (`create-site.yml`): validates input, renders `templates/site-starter` into `sites/<name>/`, appends a row to `sites.md`, commits to `main` and calls `pages.yml` to redeploy. A push made with the default `GITHUB_TOKEN` does not trigger other workflows, which is why deploy is called explicitly.
- **Public repo:** no private data anywhere; see CLAUDE.md rule 1.
