# Project guidance

Veronica Kurteva’s English-language professional website. Astro generates static HTML; no backend, analytics or contact form. It is hosted on GitHub Pages at https://veronicakurteva.com.

## Working on the site

- `src/data/cv.ts` is the shared source for the CV page and downloads; `src/data/site.ts` contains public identity and contact information.
- Edit data instead of duplicating CV content in templates. Do not publish a phone number or the original input PDF.
- Keep all public claims supported by the source notes in `CONTENT.md`. The EGT Digital responsibilities come from the owner's notes recorded there; do not extend them or claim active job-search availability.
- The design is warm editorial: Lora headings, Source Sans 3 text, ivory, charcoal, terracotta, generous space and restrained dividers. Keep it responsive and useful without JavaScript.
- The portrait is a real photograph, served locally. Never synthesize or substitute a person’s likeness.
- Use trailing slashes for page links. The production URL is https://veronicakurteva.com; pushes to `main` deploy via `.github/workflows/deploy.yml`.
- Run `npm run verify` before committing. `npm test` tests existing build artifacts; `npm run build:all` must run first. A plain Astro build clears generated downloads.
- Use conventional commit messages. Preserve a fresh independent repository; no other site’s Git history, assets or content belong here.

## Commands

`npm ci`, `npm run dev`, `npm run format`, `npm run check`, `npm run lint`, `npm run build:all`, `npm test`, `npm run verify`.

PDF generation and browser tests require `npx playwright install chromium` and the browser’s OS dependencies.
