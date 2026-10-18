# Veronica Kurteva

An English-language personal website for a .NET developer in Sofia, Bulgaria. Built with Astro and TypeScript, with locally served fonts and a real portrait. Live at https://veronicakurteva.com.

## Develop

Use Node 22.12 or later and npm.

```sh
npm ci
npx playwright install chromium
npm run dev
```

Open the URL printed by Astro. The development server does not generate CV download files; use the full build and preview to check them.

```sh
npm run build:all
npm run preview
```

The complete static output is in `dist/`, including the PDF and DOCX. A plain `npm run build` clears `dist/` and does not regenerate downloads. Browser installation may require `npx playwright install --with-deps chromium` on a new Linux machine.

## Validate

```sh
npm run verify
```

This checks formatting, lint and types; builds the pages and CV downloads; and tests responsive layouts, keyboard navigation, no-JavaScript rendering, metadata, links and print presentation. Use `npm run format` to format source files.

## Content

Site identity is stored in `src/data/site.ts`; CV data is in `src/data/cv.ts`. Both CV downloads are generated from the same content as the website. The public contact details are email, Sofia and LinkedIn; the phone number is deliberately omitted. See `CONTENT.md` for provenance and editorial decisions.

The optional portrait lives at `public/images/veronica.webp`. If absent, the homepage uses a typography-only layout without a broken image or placeholder. Replace it with a real portrait when updating the photograph.

## Hosting

The site is hosted on GitHub Pages at https://veronicakurteva.com, with DNS on Cloudflare. Every push to `main` runs `.github/workflows/deploy.yml`, which builds with `SITE_URL=https://veronicakurteva.com npm run build:all` (enabling canonical URLs and the sitemap) and publishes `dist/`. `public/CNAME` holds the custom domain.
