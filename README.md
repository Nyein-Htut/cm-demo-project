# CM Demo Project (Asana + GitHub)

This is a small demo repo you can use to demonstrate **Configuration Management + Change Management** with:
- **Git/GitHub** (branches, commits, PRs, reviews, releases)
- **Asana** (change requests, assignments, workflow stages, traceability via PR URL)

## Quick start
1) Install Node.js (LTS).
2) In this folder:
```bash
npm install
npm test
npm start
```

## Suggested demo change requests
- **CR-001**: Add password validation rules (update `src/auth/passwordPolicy.js`)
- **CR-002**: Fix discount rounding bug (update `src/pricing/discount.js`)
- **CR-003**: Add a new endpoint (update `src/server.js`)

## Where to make changes
- `src/server.js` - tiny Express API
- `src/auth/passwordPolicy.js` - password rules
- `src/pricing/discount.js` - discount calculator
- `test/*.test.js` - Jest tests

## Scripts
- `npm test` runs unit tests
- `npm start` runs the API at http://localhost:3000

## Notes for your presentation
- Treat `main` as the **baseline** (stable).
- Create a **feature branch** for each change request.
- Open a **Pull Request** and link its URL in Asana.
- Review → merge → tag a release (e.g., `v1.1.0`).
