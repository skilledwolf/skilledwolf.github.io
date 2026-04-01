# AGENTS.md

Guidance for coding agents working in this repository.

## Project overview

- This is a small Jekyll-based personal academic website.
- Primary content lives in root-level Markdown pages such as `index.md`, `about.md`, and `software.md`.
- Shared layout is in `_layouts/default.html`.
- Site-wide styling lives in `assets/css/main.css`.
- Small interaction behavior lives in `assets/js/scroll-reveal.js`.
- Site metadata and navigation are defined in `_config.yml`.

## Working expectations

- Prefer small, direct edits over introducing new frameworks or build tools.
- Preserve the existing visual language unless the task explicitly asks for a redesign.
- Keep pages content-first. This repo is a personal/research website, not an app shell.
- When adding or renaming top-level pages, update `nav_links` in `_config.yml`.
- If a new page is an important user-facing destination, consider also linking it from the homepage resource cards in `index.md`.
- Do not commit generated output such as `_site/`, `.jekyll-cache/`, `vendor/`, or `.bundle/`.

## Content conventions

- Pages are usually written as Markdown with embedded HTML sections where tighter layout control is needed.
- The homepage uses custom section/card markup; match the existing patterns rather than inventing parallel ones.
- External profile/package/documentation links should use the real canonical URLs, not placeholders.
- For the `software.md` page:
  - Treat package metadata as source-of-truth from public package registries and repo READMEs.
  - Only list packages that are actually published or intentionally public-facing.
  - If a project has no dedicated docs site, linking to the repo README is acceptable.

## Styling conventions

- `assets/css/main.css` is the single source for site styling. Keep related styles grouped and avoid duplicating patterns.
- Reuse existing utility patterns such as `.card`, `.info-card`, `.btn`, and responsive breakpoints before adding new primitives.
- Check mobile behavior whenever adding new cards, grids, or long install commands.
- Do not remove the asset version query-string behavior in `_layouts/default.html`; it exists to prevent stale CSS/JS caching after deploys.

## Local preview

- Preferred preview path:
  - `docker compose up`
- The repo also supports plain Jekyll/Ruby workflows, but Docker is the most reliable local preview path in this project.
- After using Docker for verification, clean up:
  - `docker compose down -v`
- If you pulled `jekyll/jekyll:4` only for the task, remove it afterward to avoid leaving unnecessary local image bloat.

## Deployment

- GitHub Pages deploys through `.github/workflows/deploy.yml`.
- Pushes to `master` or `main` trigger deployment automatically.
- If a change touches layout, CSS, navigation, or asset loading, verify the live site after deploy.
- If the live HTML looks correct but styling is wrong, suspect cache issues first and verify versioned asset URLs.

## Safe change checklist

- Does the site still have a clear path for Home, About, Publications, Software, and CV?
- If you added new assets or script/style changes, are they referenced through the existing layout?
- If you used Docker, did you tear down containers, volumes, and any task-specific pulled image afterward?
- Is the worktree free of generated files before finishing?
