# Steady Start

A content-first, beginner-friendly fitness blog built for the first milestone.

## Included

- Homepage, article index, and reusable static article route
- Three cross-linked sample posts: workouts, nutrition basics, and habits
- Start Here, editorial standards, and fitness/medical disclaimer pages
- Typed post model with build-time validation, per-post metadata, JSON-LD, sitemap, and robots rules
- Responsive, keyboard-friendly Calm Momentum visual system

## Run locally

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the real public origin before deployment (for example, `https://your-domain.com`). Local builds use `http://localhost:3000` automatically. Add new posts in `lib/posts.ts`; the build validates slugs, categories, sections, citations, and related-post links.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```
