# Repository Agent Instructions

## Project overview

This repository is the public portfolio of M. Anas Latif. It is a statically
generated Next.js App Router application for recruiters, prospective clients,
and engineering collaborators.

The current milestone is an application skeleton. Portfolio content, visual
design, and interactions are intentionally deferred. Read `README.md` and
`docs/architecture.md` before changing that scope.

## Required stack

- Next.js App Router and React Server Components by default
- Strict TypeScript under `src/` with the `@/` import alias
- Tailwind CSS v4 with CSS-first configuration
- Biome for formatting and linting; do not add ESLint or Prettier
- Zod at runtime and untrusted-input boundaries
- npm and Bun package-manager support with both lockfiles synchronized
- Bun's test runner when product behavior requires tests

Do not add a UI, icon, animation, form, state, data-fetching, database, or auth
package merely because it is common. Verify that a requirement justifies every
new dependency.

## Task workflow

Follow this sequence for every task:

1. Read `README.md`, this file, and the relevant files under `docs/`.
2. Inspect the owning route or module, its call sites, nearby patterns,
   configuration, and tests when present. Do not plan from the request alone.
3. Review `skills-lock.json`, then read every installed `SKILL.md` relevant to
   the task and only the references needed for the current work.
4. Write an ordered implementation plan. Every file-producing step must name a
   focused validation and its Git commit boundary.
5. Execute one step at a time. Validate and commit each file-producing step
   before starting the next one; keep the plan current when evidence changes.
6. Before adding a dependency, verify its necessity, latest stable version,
   official documentation, maintenance, and compatibility with the supported
   Next.js, React, Node.js, npm, and Bun versions.
7. Update `README.md` and `docs/architecture.md` in the same change whenever an
   accepted architecture or workflow changes.

Read-only investigation and validation-only steps do not require empty commits.

## Module ownership

- `src/app/`: routes, layouts, metadata, providers, and route boundaries
- `src/lib/`: cross-cutting infrastructure and validated configuration
- `src/components/`: components proven to be shared across routes
- `src/hooks/`: reusable client hooks shared across routes
- `src/context/`: genuinely shared React Context providers and hooks
- `src/types/`: shared serializable contracts
- `docs/`: durable architecture and operational decisions
- `docs/temp/`: ignored disposable files created by AI agents

Keep route-specific components, content, actions, hooks, schemas, contexts, and
types colocated with their route. Prefix private route folders with `_` where
useful. Do not create generic dumping grounds such as a broad `utils.ts`.

Files use kebab-case, React exports use PascalCase, hooks use `use-*`, Zod
schemas use a `Schema` suffix, and serializable contracts use a `Dto` suffix.

## Application boundaries

Server Components are the default. Add `"use client"` only at the smallest
boundary that requires browser state or effects. Keep secrets and privileged
operations server-only.

The root loading, error, global-error, and not-found boundaries currently render
no visual output because UI work is explicitly deferred. Replace them with
accessible recovery and status experiences during the UI phase rather than
building parallel boundaries.

There are currently no Server Actions, Route Handlers, internal HTTP APIs,
external services, database, authentication, realtime connections, email, or
uploads. Introduce one only after its architecture is confirmed and documented.
Validate all untrusted inputs with Zod and keep transport separate from domain
logic.

## Environment variables

Server variables belong in `src/lib/env/server.ts`. Explicit browser-safe
`NEXT_PUBLIC_` variables belong in `src/lib/env/client.ts`; never spread
`process.env` into client code.

For every variable addition, removal, or rename, synchronize:

1. The applicable environment schema.
2. `.env.example`.
3. `README.md`.
4. Deployment and CI configuration.
5. Tests and mocks when present.

Never commit production secrets or private personal data.

## Local artifacts

- Put every AI-created temporary, scratch, inspection, and disposable file under
  `docs/temp/`; never force-add that directory.
- Keep installed skills under ignored `/.agents/`; use the Skills CLI to add,
  update, or remove them.
- Keep root `skills-lock.json` and this file tracked and current.
- Do not restore setup-only skills after project creation unless a later setup
  task explicitly requires them.

## Commands

Install dependencies with `npm install` or `bun install`.

```bash
npm run dev
npm run check
npm run typecheck
npm run build
```

The equivalent `bun run <script>` commands must also work. There is no test
script yet because the skeleton has no product behavior. Add focused `bun:test`
coverage with the first logic that needs it.

## Git workflow

- Inspect the worktree before editing and preserve pre-existing user changes.
- Stage explicit paths owned by the current step; do not broadly stage a dirty
  repository.
- Run the focused validation named in the plan before committing.
- Inspect `git diff --cached --check` and the staged file list.
- Commit each completed file-producing plan step separately.
- Never create empty commits, bypass hooks, push, or rewrite history unless the
  user explicitly requests it.
- After each commit, confirm the index is clear and user-owned changes remain.

## Completion gate

Before completing a change, run the applicable commands:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

Run Bun tests when tests exist. Confirm that npm and Bun lockfiles remain
synchronized after dependency changes, `.agents/` and `docs/temp/` remain
ignored, no secret is tracked, and documentation matches behavior.

For UI work, also verify accessible semantics, keyboard behavior, responsive
layout, browser console output, and runtime behavior with the installed
`next-dev-loop` skill.
