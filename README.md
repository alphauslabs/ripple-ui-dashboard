# ripple-ui-dashboard

## Overview
Ripple UI Dashboard is a micro app for the Ripple V2 dashboard that consumes the shared SPA library.

## Micro Frontend Model

- The Ripple V2 shell loads this package as a standalone micro frontend, mounting the exported SPA entry point from `src/main.tsx` inside its iframe/portal slot.
- Shared behavior such as navigation wiring, telemetry, theming, and i18n comes from the `public/src/spa.js` bridge plus the reusable packages under `lib/`.
- Contracts between the shell and this micro app live in `src/shared/types` (e.g., host events, dashboard store shape). Changing them requires coordinating with the shell repo.
- Every feature should be self-contained

## Requirements

- Node.js 20+
- Modern browser for manual verification
- `npx` (bundled with Node) to run the pinned pnpm version without a global install

## Quick Start

```bash
npx pnpm install        # install root + workspace deps
npx pnpm dev            # start Vite dev server on default port 5173
npx pnpm test           # run Jest + Vitest suites where configured
npx pnpm build          # create production build via Vite
```

## Project Structure (High Level)

- `src/` – main dashboard SPA, including routes, stores, and shared UI bits.
- `lib/*` – shareable packages (constants, hooks, HTTP service, icons, utils, i18n).
- `scripts/` – helper scripts for tooling and releases.
- `public/` – static assets served by Vite.
