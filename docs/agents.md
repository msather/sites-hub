# Working here as an agent

1. Read `CLAUDE.md`.
2. For new sites or large changes, interview the owner first (see the skills).
3. Make changes, then run `python3 scripts/check.py` and `python3 scripts/build_hub.py`.
4. Commit and push. Pushes to `main` deploy automatically.
5. Tell the owner, in plain language, what changed, what worked, what did not.

Triggering the Create site workflow: GitHub UI (Actions → Create site → Run workflow), the GitHub API/MCP `run_workflow` on `create-site.yml` with ref `main` and inputs `name`, `description`. If triggering is blocked, ask the owner to click Run workflow, or use `scripts/new_site.py` and commit.
