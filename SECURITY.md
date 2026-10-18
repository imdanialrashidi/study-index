# Security Policy

## Reporting a vulnerability

Do not open a public issue containing an exploitable vulnerability, secret, private log, or user data. Use the repository's private **Security → Report a vulnerability** flow when available. If private reporting is unavailable, contact the repository owner through a private channel and share only the minimum reproduction needed.

Include the affected version/commit, impact, prerequisites, a minimal reproduction, and any known mitigation. Remove credentials and personal data from evidence.

## Execution boundary

The agent works with the operating-system permissions of the account that starts it. Real isolation must come from the operating system, container, or VM — not from prompts or tool allowlists.

Solo work is local-only by default: no commits, pushes, merges, releases, or deployments unless the owner explicitly asks. Team delivery uses only the reviewed `scripts/omp-pr.mjs` helper on the fixed `ai-changes` branch (see `docs/GIT_POLICY.md`): no per-task branches, no `main` writes, no auto-merge. Read-only inspection (`status`, `diff`, `log`) remains available.

## Supported versions

Security fixes are applied to the current `main` branch. The repository does not currently publish versioned releases; once releases begin, list supported release lines here.
