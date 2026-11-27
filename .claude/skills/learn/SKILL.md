---
name: learn
description: Capture what was discovered or corrected so future agents do not repeat it. Use after fixing any unexpected problem, or when the owner corrects a mistake or states a preference.
---

# Learn over time

1. Add a dated entry (what happened, cause, fix, with links) at the top of `docs/lessons.md`.
2. If it changes how agents should behave, also update `CLAUDE.md` or the relevant skill. If a step will recur, create a new skill in `.claude/skills/<name>/SKILL.md`.
3. Run `python3 scripts/check.py`, commit, push to `main`.
4. Tell the owner in plain words what you recorded, with the link to the file.
