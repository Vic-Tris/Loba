# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Routing & navigation

- `BrowserRouter` is mounted in `src/main.tsx`. Route table and modal shell live in `src/App.tsx`.
- On **Home (`/`)**, Header nav opens `NavigationDrawers` topic modals. On **full pages**, Header navigates via routes in `src/utils/routes.ts` (`TOPIC_ROUTES` / `topicFromPath`).
- Each drawer footer (and desktop left panel) has a **See more** CTA that closes the modal and routes to the full page.
- Service detail paths: `/services/data-analysis`, `/services/business`, `/services/academic-presentations`, `/services/undergrad`, `/services/cover-letter`, `/services/academic-article`, `/services/thesisdissertations`, `/services/assignments-essay`.
- Brand tokens: `src/index.css` (`brand-navy`, `brand-blue`, `brand-ice`, `primary`).

## Commands

- `npm run build` — TypeScript + Vite production build
- `npm test` — Vitest (`--run` for CI-style once)

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
