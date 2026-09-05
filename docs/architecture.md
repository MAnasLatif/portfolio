# Architecture

## Product scope

This repository contains the public portfolio of M. Anas Latif. Its primary
audiences are recruiters, prospective clients, and engineering collaborators.
The product presents a profile, technical range, selected projects, original
writing, and contact paths.

The accepted UI is a dark, editorial multipage experience with a decorative
animated space background. Its information architecture follows four top-level
routes: Home, About, Blogs, and Projects.

## Decisions

| Concern | Decision |
| --- | --- |
| Application | Public developer portfolio |
| Package managers | npm and Bun |
| Data layer | Local, typed content; no database or ORM |
| Authentication | None |
| Authorization | None |
| Application boundary | Server Components; no Server Actions required yet |
| HTTP APIs | Static raw Markdown delivery at `/blogs/<slug>/md` |
| External services | None |
| Realtime | None |
| Email | Local `mailto:` handoff; no delivery service |
| Uploads and storage | None |
| Deployment | Vercel |
| Security and privacy | No secrets or private personal data in source |

## Module ownership

- `src/app/` owns routes, layouts, metadata, and route boundaries.
- Route-specific implementation and article bodies remain colocated with their
	route.
- `src/components/` owns the shared site header, footer, and Canvas background.
- `src/lib/portfolio-content.ts` owns typed content shared by Home, Projects, and
	Blogs.
- `src/app/blogs/_content/` owns Markdown article bodies and their server-only
	loader; filenames match the typed article slugs.
- `src/lib/env/` owns validated configuration.
- `src/types/` will contain shared serializable contracts when reuse exists.
- `docs/` contains durable architecture and operational decisions.
- `docs/temp/` is ignored and reserved for disposable AI-created artifacts.

Server Components are the default. Client Components exist only where browser
APIs or framework recovery require them. `SpaceBackground` draws through Canvas,
ignores pointer input, respects reduced motion, and pauses when the page is
hidden. `SiteHeader` owns the responsive menu and route-aware navigation. The
hero portrait loads a low-quality responsive image first and upgrades only the
visible breakpoint image during browser idle time. The contact form builds a
local `mailto:` draft and does not transmit or store form data. The error
boundaries are client-side so they can log failures and invoke recovery.

All top-level routes are statically generated. Blog article metadata is shared
with Home, while article bodies are authored as route-owned Markdown under
`src/app/blogs/_content/`. The dynamic article route enumerates every supported
slug through `generateStaticParams`, reads the matching Markdown file at build
time, and renders it with `react-markdown`; unknown slugs resolve to the shared
not-found boundary. Article pages retain the global Canvas background beneath a
translucent editorial reading surface.

The `/blogs/[slug]/md` Route Handler provides the same known article sources as
raw `text/plain` responses with inline `.md` filenames. It is statically
generated, rejects slugs absent from the typed article catalogue, and never
passes an unvalidated request path to the filesystem loader.

Public claims are limited to information verified from the linked GitHub and
LinkedIn profiles. Project records are typed local content and may use clearly
labelled demo entries until verified case studies and destinations are supplied.
