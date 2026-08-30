# M. Anas Latif Portfolio

The public developer portfolio for M. Anas Latif, built for recruiters,
prospective clients, and engineering collaborators. It is a statically generated
multipage portfolio with a decorative animated starfield, responsive navigation,
original editorial content, and verified links to public work.

## Portfolio sections

- Home overview with capabilities, selected projects, writing, and principles
- About and professional background
- Projects and blogs with article detail pages
- Shared contact paths through GitHub and LinkedIn

## Architecture decisions

| Concern | Decision |
| --- | --- |
| Application type | Public developer portfolio |
| Package managers | npm and Bun |
| Database and data access | None; portfolio content is local and typed |
| Authentication and authorization | None |
| Application boundary | Server Components; no Server Actions required yet |
| HTTP APIs and external services | None |
| Realtime | None |
| Email | Local `mailto:` handoff; no delivery service |
| Uploads and storage | None |
| Deployment | Vercel |
| Security and privacy | No secrets or private personal data in source |

See [the architecture record](docs/architecture.md) for module ownership and
the rationale behind the intentionally small foundation.

## Technology stack

- Next.js 16 App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS v4
- Biome
- Zod

No UI library, icon package, animation runtime, database client, authentication
library, or client data-fetching library is installed. The shared space
background uses a small Canvas loop, so it adds no runtime dependency.

## Repository structure

```text
src/
├── app/             # Routes, route content, metadata, and boundaries
├── components/      # Shared site shell components
└── lib/             # Typed shared portfolio content and infrastructure
docs/
├── architecture.md  # Durable architecture decisions
└── temp/            # Ignored AI-created temporary files
```

Route-specific components and article bodies remain colocated with their route.
The site shell lives in `src/components/`, while project, article summary, skill,
and principle data shared by multiple routes lives in
`src/lib/portfolio-content.ts`.

## Requirements

- Node.js 20.9 or newer
- npm
- Bun 1.3 or newer when using the Bun workflow

## Getting started

Install with either supported package manager:

```bash
npm install
```

```bash
bun install
```

No environment variables are currently required. `.env.example` records this
empty contract and must be updated when configuration is introduced.

Start the development server:

```bash
npm run dev
```

The application is available at `http://localhost:3000` by default.

## Commands

| npm | Bun | Purpose |
| --- | --- | --- |
| `npm run dev` | `bun run dev` | Start the development server |
| `npm run build` | `bun run build` | Create a production build |
| `npm run start` | `bun run start` | Serve the production build |
| `npm run check` | `bun run check` | Run Biome formatting and lint checks |
| `npm run format` | `bun run format` | Apply Biome formatting |
| `npm run lint` | `bun run lint` | Run Biome lint rules |
| `npm run typecheck` | `bun run typecheck` | Run strict TypeScript checks |

No automated test suite exists yet because the portfolio has no domain logic.
Static generation, strict types, Biome, and browser checks cover the current
surface. Add focused Bun tests with the first behavior that needs them.

## Data and API conventions

The portfolio is statically generated. Server Components are the default, and
there are no Server Actions, Route Handlers, internal APIs, or external service
adapters. The Client Components are the Canvas animation, responsive navigation,
contact form mailto handoff, and required error boundaries. The contact form
opens the visitor's configured email application; the site does not transmit or
store message data.

If future requirements introduce untrusted input, validate it with Zod at the
boundary. Keep privileged operations server-only and return serializable DTOs
to client components. Record any new API or data decision in this README and
`docs/architecture.md`.

## Environment contract

Server configuration belongs in `src/lib/env/server.ts`; browser-safe
`NEXT_PUBLIC_` configuration belongs in `src/lib/env/client.ts`. When a variable
is added, removed, or renamed, synchronize both the applicable schema and:

- `.env.example`
- this README
- deployment and CI configuration
- tests and mocks

Never commit production credentials.

## Deployment

The target platform is Vercel. Use `npm run build` as the production build gate;
Next.js emits the `.next/` output consumed by the platform. No deployment
environment variables or migrations are currently required. Roll back by
promoting the last known-good Vercel deployment.

## AI skill artifacts

Installed skill implementations live under the ignored `/.agents/` directory.
The reproducible selection is committed in `skills-lock.json`.

Durable project skills:

- `find-skills` from `vercel-labs/skills` for relevant skill discovery
- `tailwind-v4` from `MAnasLatif/skills` for future design-system work
- `motion-react` from `MAnasLatif/skills` for future accessible animation work
- `next-dev-loop` from `vercel/next.js` for runtime verification

The Motion skill does not imply a runtime dependency; install `motion` only when
a confirmed interaction requires it.

All disposable AI-created files must stay under the ignored `docs/temp/`
directory and must never be force-added to Git.

## Troubleshooting

- Confirm `node --version` satisfies the engine requirement when installation
  or Next.js startup fails.
- Remove `.next/` and rerun `npm run build` when generated route output is stale.
- Run `npm install` and `bun install` after dependency changes to keep both
  committed lockfiles synchronized.
- Keep server environment imports out of Client Components.

## Contributing

Read `AGENTS.md` before changing the application. Every change should preserve
the Server Component default, route colocation, minimal dependency policy, and
the documented validation commands.