# Architecture

## Product scope

This repository contains the public portfolio of M. Anas Latif. Its primary
audiences are recruiters, prospective clients, and engineering collaborators.
Future product modules will present a profile, professional experience,
selected projects, and contact paths.

The initial milestone establishes the application foundation only. Visual
design, portfolio content, and interactive workflows are intentionally deferred.

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
at the smallest boundary required by a future interaction.