# Repository Guidelines

## Project Structure & Module Organization

- Source lives in `src/` (TypeScript). Key modules: `main.ts` (bootstrap/render loop), `physics.ts` (cannon-es world), `cat.ts` / `mouse.ts` (entities), `level.ts` (procedural generation), `input.ts`, `ui.ts`, `audio.ts`, `utils.ts`, `types.d.ts`.
- Assets are under `models/` (e.g., `models/cat/*`, `models/mouse/*`). Keep new assets grouped by entity.
- Entry is `index.html`; build tooling is `vite.config.ts`; TS config is `tsconfig.json`.

## Build, Test, and Development Commands

- `npm run dev` (or `npm start`): Launches Vite dev server with auto-open. Visit `http://localhost:5173`.
- `npm run build`: Type-checks (`tsc`) and builds production bundle via Vite.
- `npm run preview`: Serves the built app locally to verify production output.

## Coding Style & Naming Conventions

- Language: TypeScript (ES modules). Indentation: 2 spaces. Use semicolons. Prefer double quotes for strings; match nearby code when editing.
- Names: `camelCase` for variables/functions, `PascalCase` for classes/types, `UPPER_SNAKE_CASE` for constants.
- Files: lowercase, short names (e.g., `cat.ts`, `level.ts`). For multiword, prefer `kebab-case` (if needed).
- Imports: use relative paths or `@/` alias for `src/*` per `tsconfig.json`.
- No linter is configured; keep formatting consistent with existing files.

## Testing Guidelines

- No automated test suite yet. Manually verify key flows: pointer lock, movement, pounce, collisions, level progression, FPS stability, and resize handling.
- Before opening a PR, run `npm run build` and then `npm run preview` to sanity-check the production bundle.

## Commit & Pull Request Guidelines

- Commits: Use clear, imperative messages. Conventional Commits are encouraged (e.g., `feat: add pounce cooldown`, `fix: prevent camera clipping`). Group related changes.
- PRs: Include a concise description, linked issues, and before/after notes or a short clip/screenshot of gameplay when visual changes are made. Note asset sources/licenses if adding models/textures.
- Scope PRs narrowly; avoid unrelated refactors.

## Security & Configuration Tips

- Do not commit secrets; this is a client-only game. Keep asset sizes reasonable; use `models/<entity>/` folders. Verify you have rights to new assets.

## Agent-Specific Instructions

- Follow these guidelines across the repo. Avoid introducing heavy dependencies or frameworks. If you add controls, UI, or commands, update `README.md` and this file as needed.
