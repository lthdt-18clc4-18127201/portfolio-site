## AI Agents Guide for This Repo

This document explains how AI agents (like Cursor's) should work in this project.

### Project Context

- **Purpose**: Personal portfolio site for Su Pham.
- **Stack**: Next.js (App Router), TypeScript, React, Tailwind/CSS modules (see `src/app/globals.css`).
- **Entry points**: `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`.

### How Agents Should Work Here

- **Use tools before guessing**: Always read relevant files (especially under `src/app` and `src/components`) before making changes.
- **Prefer minimal, focused edits**: Only touch files needed for the requested change; avoid large refactors unless explicitly asked.
- **Keep UX clean and modern**: Any new UI should match the existing visual style and be responsive.
- **TypeScript-first**: Maintain or improve type safety; avoid `any` unless there is a strong reason and document it briefly in code.
- **No noisy comments**: Only add comments for non-obvious intent or constraints, not to narrate what the code does.

### Local Development & Commands

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint**: `npm run lint` (and use Cursor lints on recently edited files to keep the repo clean).

When changing behavior:

- **For UI changes**: Check the relevant page under `src/app/**/page.tsx` and any shared components in `src/components/`.
- **For layout changes**: Update `src/app/layout.tsx` and `src/app/globals.css` carefully to avoid breaking other pages.

### Code & Content Conventions

- **Components**: Prefer small, composable React components in `src/components/` (e.g. `Header`, `Footer`, `ProjectCard`, `NewsletterForm`).
- **Styling**: Reuse existing styles and design tokens where possible instead of inventing new patterns.
- **Copywriting**: Keep portfolio copy professional, concise, and aligned with Su Pham's personal brand.
- **Lazy loading**: Use `lazyComponent()` from `@/lib/lazy` for below-the-fold or heavy components so code stays split and the pattern is consistent. Use `LazyFallback` (optionally via `Suspense`) when you need a custom fallback. Images: keep using Next.js `Image` with `priority` only for above-the-fold assets.

### Agent Behavior Expectations

- **Be proactive but safe**: If instructions are slightly ambiguous, make a reasonable choice and document it in the PR/summary.
- **Test changes**: For anything non-trivial, explain how to verify it (e.g. "visit `/projects` and check cards render correctly").
- **Respect Git history**: Do not create commits or push branches unless the user explicitly asks.

This file is the single source of truth for how AI agents should behave in this repository; update it when project conventions change.

