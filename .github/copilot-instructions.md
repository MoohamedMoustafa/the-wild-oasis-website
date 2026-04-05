# Project Guidelines

## Code Style

- Use JavaScript with React Server Components by default in `app/`; add `"use client"` only when client-side state/effects are required.
- Use the `@/*` path alias from `jsconfig.json` for cross-folder imports.
- Keep Tailwind utility classes and existing theme tokens (`primary-*`, `accent-*`) consistent with `tailwind.config.js`.
- Follow existing naming and placement patterns from `app/_components/` and `app/_lib/`.

## Architecture

- This project uses the Next.js App Router (`app/`) with nested layouts and route segments.
- Data access belongs in `app/_lib/data-service.js` and uses Supabase via `app/_lib/supabase.js`.
- Page-level metadata is defined with `export const metadata` or `generateMetadata` in route files.
- Loading/error UX uses App Router conventions: `loading.js`, `error.js`, and `not-found.js`.

## Build and Test

- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build for production: `npm run build`
- Run production server: `npm run start`
- Lint: `npm run lint`
- There is currently no automated test suite; do not add test commands unless the repo adds a test framework.

## Conventions

- Prefer server-side data fetching in route files and async server components.
- Keep Supabase queries centralized in `app/_lib/data-service.js` instead of spreading direct queries across components.
- Use `Suspense` + spinner fallback patterns as shown in `app/cabins/page.js`.
- Use `date-fns` for date calculations/formatting and `@heroicons/react` for icons to match existing UI patterns.

## Environment and Pitfalls

- Required local env vars: `SUPABASE_URL` and `SUPABASE_KEY` in `.env.local`.
- If Supabase storage host changes, update `images.remotePatterns` in `next.config.mjs`.
- Some account/auth UI is scaffolded but not fully wired; preserve current behavior unless a task explicitly requests auth implementation.

## References

- See `README.md` for Next.js runtime basics.
- See `.specify/memory/constitution.md` for project constitution notes used by local workflows.
