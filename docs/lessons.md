# Lessons learned

Newest first. Add an entry whenever something unexpected is found and fixed (see `.claude/skills/learn/SKILL.md`). Each entry: what happened, cause, fix.

## 2026-11-27: Pages source must be "GitHub Actions"
- **What happened:** First deploys failed with "Resource not accessible by integration"; later Pages was set to deploy from the `/docs` folder, which would have published the agent docs instead of the hub.
- **Cause:** The default workflow token cannot turn Pages on, and the branch-folder setting ignores our build workflow.
- **Fix:** Owner sets Settings → Pages → Source = **GitHub Actions** once (https://github.com/msather/sites-hub/settings/pages). Then re-run https://github.com/msather/sites-hub/actions/workflows/pages.yml. Documented in `docs/architecture.md`.

## 2026-11-27: A leftover Pages run can block deploys
- **What happened:** A deploy sat "queued" behind GitHub's own "pages build and deployment" run (same `pages` concurrency group) created by the wrong Pages setting.
- **Fix:** Wait for it to finish or cancel it; it clears once the source is "GitHub Actions".

## 2026-11-27: Agent sessions cannot open github.io
- **What happened:** `curl https://msather.github.io/...` from a cloud agent session is refused by the network proxy.
- **Fix:** Verify deploys through the Actions API (job conclusion `success` on https://github.com/msather/sites-hub/actions) and ask the owner to open the live link. Do not claim a page "loads" unless it was actually viewed.

## 2026-11-27: Agent sessions need the Claude GitHub App with write access
- **What happened:** `git push` and GitHub write tools returned 403 until the Claude GitHub App was installed on this repo.
- **Fix:** Owner installs/reconnects at https://github.com/apps/claude/installations/select_target. Reads can work while writes fail.

## 2026-11-27: Separate-repo sites were dropped
- Creating repos needs a long-lived personal token, which the owner chose not to keep. All sites are folders in this repo; do not reintroduce token-based flows without asking.
