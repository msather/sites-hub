---
name: large-change
description: Process for any large change to sites-hub (restructure, new feature, workflow or script changes, edits across many files). Interview the owner before building.
---

# Large change

1. **Interview first.** Ask several questions in one batch and wait: goal, why now, scope and non-goals, what must not break, preferred approach with trade-offs, how they will judge success.
2. Summarise the plan in a few bullets and get a go-ahead if the interview left real ambiguity.
3. Work on a branch; keep commits small. Update `CLAUDE.md` and `docs/` if behaviour or conventions change.
4. Run `python3 scripts/check.py` and `python3 scripts/build_hub.py`.
5. Merge to `main` (or open a PR if the owner asked), then verify with the deploy-site skill.
6. Report what worked and what didn't, honestly.
