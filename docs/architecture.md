# Architecture

## Product scope

This repository contains the public portfolio of M. Anas Latif. Its primary
audiences are recruiters, prospective clients, and engineering collaborators.
Future product modules will present a profile, professional experience,
selected projects, and contact paths.

The initial milestone established the application foundation. The UI phase
begins with a decorative animated space background, responsive primary
navigation, and an introductory hero; deeper portfolio content and interactive
workflows remain deferred.

## Decisions

| Concern | Decision |
| --- | --- |
| Application | Public developer portfolio |
| Package managers | npm and Bun |
| Data layer | Local, typed content; no database or ORM |
| Authentication | None |
| Authorization | None |
| Application boundary | Server Components; no Server Actions required yet |
| HTTP APIs | None |
| External services | None |
| Realtime | None |
| Email | None |
| Uploads and storage | None |
| Deployment | Vercel |
| Security and privacy | No secrets or private personal data in source |

## Module ownership

- `src/app/` owns routes, layouts, metadata, and route boundaries.
- Route-specific implementation will remain colocated with its route.
- `src/components/` will contain only components reused across routes.
- `src/lib/` owns cross-cutting infrastructure and validated configuration.
- `src/types/` will contain shared serializable contracts when reuse exists.
- `docs/` contains durable architecture and operational decisions.
- `docs/temp/` is ignored and reserved for disposable AI-created artifacts.

Server Components are the default. Client Components will be introduced only
at the smallest boundary required by an interaction. The home route's
`SpaceBackground` is a client boundary because it draws through the Canvas API.
It is decorative, ignores pointer input, respects reduced-motion preferences,
and pauses when the page is hidden. The effect is implemented locally instead
of adding an animation runtime because the reference uses the same small Canvas
particle loop.

The home route also owns its `SiteHeader` and `HeroHeader`. The hero remains a
Server Component, while only the responsive menu is client-side. Navigation
links point to confirmed public destinations and do not introduce placeholder
routes or unverified contact details.