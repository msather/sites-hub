# Lessons learned

Newest first. Add an entry whenever something unexpected is found and fixed (see `.claude/skills/learn/SKILL.md`). Each entry: what happened, cause, fix.

## 2026-11-27: Music sites: what is verified
- **Classic rock trivia:** the song bank (63 artists, about 494 songs) comes from general knowledge, with covers and duets left out on purpose. The code checks every round (200 simulated rounds: right answer always correct, no repeated options, no repeated artists, artists do not repeat across 12 rounds). To add songs, edit `sites/classic-rock-trivia/data.js` and keep each title under only one artist.
- **Seattle grunge:** dates and facts are from general knowledge. Agent sessions cannot open Wikipedia, so link names were not click-tested. If a link is dead, fix it in `sites/seattle-grunge/data.js`. Places link to map searches, not exact addresses.

## 2026-11-27: Two Create site runs at once conflicted
- **What happened:** Two runs started seconds apart. The second failed with a merge conflict in `sites.md` ([failed run](https://github.com/msather/sites-hub/actions/runs/45953314417)).
- **Cause:** The workflow checked out the snapshot of `main` from when it was *triggered*, not the newest one.
- **Fix:** The workflow now checks out `main`, rebuilds from the newest `main` and retries the push up to 5 times. Safe to trigger several sites in a row now.

## 2026-11-27: Fishing guide data that was verified vs. not
- **Marine forecast zones** were checked against NWS (PZZ131 Central Strait, PZZ132 East Strait, PZZ133 San Juans, PZZ134 Admiralty Inlet, PZZ135 Puget Sound/Hood Canal). My first memory of these numbers was wrong, so always look IDs up instead of recalling them.
- **NOAA tide stations** confirmed: Seattle 9447130, Olympia 9446969, Quilcene 9445272. Not confirmed from search (from memory): Neah Bay 9443090, Port Angeles 9444090, Friday Harbor 9449880, Port Townsend 9444900, Tacoma 9446484, Everett 9447659. The page prints the station name beside the tides so a wrong one is easy to spot. Agent sessions cannot reach NOAA, so confirm in a browser: https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=<station>.
- **Boat launch names and fishing spots** are from general knowledge and are not verified against official sources.
- Live tides load in the visitor's browser (NOAA allows this, no key), with a saved copy and written fallback.

## 2026-11-27: Check every new site in a real browser at phone width
- **What happened:** The first fishing guide worked but the filter checkboxes and a dropdown looked wrong on a phone.
- **Fix:** After `python3 scripts/build_hub.py`, open `_site/sites/<name>/index.html` with Playwright at 390x844, check for console errors and look at a screenshot before publishing. Rule of thumb: a CSS rule like `.controls label` can accidentally override a more specific-looking `fieldset label`; check both.

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
