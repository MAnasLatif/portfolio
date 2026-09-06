# M. Anas Latif Portfolio

A fast, statically generated portfolio for M. Anas Latif, a software engineer,
product builder, and UX designer. The site presents professional experience,
technical capabilities, selected projects, and long-form writing through a dark,
responsive editorial interface.

- [GitHub](https://github.com/MAnasLatif)
- [LinkedIn](https://www.linkedin.com/in/manaslatif/)
- [Architecture](docs/architecture.md)

## Highlights

- Statically generated pages with no request-time compilation
- Responsive portfolio, experience, education, projects, and writing views
- Markdown-authored articles rendered as accessible HTML
- Plain-text Markdown endpoints at `/blogs/<slug>/md`
- Animated Canvas starfield with reduced-motion and page-visibility support
- Route-aware desktop and mobile navigation
- Optimized responsive portrait loading
- Local `mailto:` contact handoff with no message storage or external service

## Technology

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 App Router, React 19 |
| Language | TypeScript with strict mode |
| Styling | Tailwind CSS v4 |
| Motion | Motion, Canvas API |
| Content | Markdown, react-markdown |
| Icons | `@mal-icons/react` |
| Validation | Zod |
| Quality | Biome, TypeScript |
| Deployment | Vercel |

## Routes

| Route | Purpose | Rendering |
| --- | --- | --- |
| `/` | Profile overview, selected work, writing, and contact | Static |
| `/about` | Professional experience, education, and skills | Static |
| `/projects` | Selected project work | Static |
| `/blogs` | Searchable article index | Static |
| `/blogs/<slug>` | Formatted article page | Pre-generated |
| `/blogs/<slug>/md` | Raw article source served as `text/plain` | Pre-generated |

Every supported route is emitted during `next build`. Dynamic blog segments use
`generateStaticParams` and reject unknown slugs, preventing on-demand rendering
or compilation after deployment.

## Architecture

The application uses React Server Components by default. Client Components are
limited to browser-dependent behavior such as the animated background,
responsive navigation, progressive portrait loading, article search, contact
handoff, and framework recovery boundaries.

Portfolio content is local and typed. There is no database, authentication,
realtime connection, upload service, or external data API. The only Route
Handler serves allowlisted article Markdown as a pre-generated plain-text
response.

See [docs/architecture.md](docs/architecture.md) for module ownership,
boundaries, and durable technical decisions.

## Project Structure

```text
src/
├── app/
│   ├── _components/       # Shared route-level presentation
│   ├── about/             # Experience, education, and skills
│   ├── blogs/             # Articles, Markdown, and raw responses
│   └── projects/          # Project catalogue
├── components/            # Site shell and cross-route UI
└── lib/                   # Typed content and infrastructure
public/                    # Brand, portrait, and favicon assets
docs/                      # Architecture and operational documentation
```

## Getting Started

### Requirements

- Node.js 20.9 or newer
- npm, or Bun 1.3 or newer

No environment variables are required for local development.

### Install

Use either supported package manager:

```bash
npm install
```

```bash
bun install
```

Both lockfiles are committed and must remain synchronized after dependency
changes.

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To test the optimized production build locally:

```bash
npm run build
npm run start
```

## Available Scripts

| npm | Bun | Description |
| --- | --- | --- |
| `npm run dev` | `bun run dev` | Start the development server |
| `npm run build` | `bun run build` | Create the optimized production build |
| `npm run start` | `bun run start` | Serve the production build |
| `npm run check` | `bun run check` | Run Biome checks |
| `npm run format` | `bun run format` | Format the repository with Biome |
| `npm run lint` | `bun run lint` | Run Biome lint rules |
| `npm run typecheck` | `bun run typecheck` | Run strict TypeScript checks |

## Writing Articles

Article metadata is defined in
[`src/lib/portfolio-content.ts`](src/lib/portfolio-content.ts). Article bodies
live in `src/app/blogs/_content/` and use the article slug as the filename.

To publish an article:

1. Add its typed metadata to `articles` in
   [`src/lib/portfolio-content.ts`](src/lib/portfolio-content.ts).
2. Add the matching Markdown file at
   `src/app/blogs/_content/<slug>.md`.
3. Run `npm run build` to verify both the formatted page and raw Markdown route
   are generated.

For example, `designing-software-as-a-system.md` produces:

- `/blogs/designing-software-as-a-system`
- `/blogs/designing-software-as-a-system/md`

## Quality Checks

Run the complete local quality gate before submitting a change:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

The current portfolio has no domain behavior requiring an automated test suite.
Static generation, strict types, Biome, production builds, and browser checks
cover the existing surface.

## Deployment

The application targets Vercel and requires no deployment environment variables
or migrations. Vercel consumes the `.next/` output produced by `npm run build`.
All known pages and raw Markdown responses are pre-rendered and cacheable after
deployment.

## Contributing

Read [AGENTS.md](AGENTS.md) before making changes. Keep Server Components as the
default, colocate route-specific code, avoid unnecessary dependencies, and
preserve the npm and Bun workflows.