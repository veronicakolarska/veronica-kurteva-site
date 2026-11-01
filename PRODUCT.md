# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers who have met Veronica Kurteva through LinkedIn or a CV and open the site to decide whether to start a conversation. They arrive with a specific question (is she worth talking to, what has she done, how do I reach her) and limited time.

Secondary (unconfirmed, do not design for): professional peers and friends who are sent the link.

## Product Purpose

An English-language personal site for Veronica Kurteva, a .NET developer in Sofia, Bulgaria. It presents who she is, her experience, education and skills, and offers her CV as PDF and DOCX downloads generated from the same data as the pages.

Success is the visitor emailing her. The CV page and downloads are supporting evidence for that decision, not the goal.

## Positioning

A backend .NET developer with a completed bachelor's in Cognitive Science and Psychology and an ongoing master's in Cognitive Science, plus a psychology internship with dementia patients. The "code plus cognition" story is the distinct claim: technical work informed by a genuine interest in how people think, learn and decide. Keep it central; a generic developer portfolio could not truthfully copy it.

## Operating Context

- Static Astro site, no backend, analytics or contact form. Hosted on GitHub Pages at https://veronicakurteva.com, deployed by `.github/workflows/deploy.yml`.
- Two pages (home and CV) plus a 404. The CV page has PDF and DOCX downloads generated at build time from `src/data/cv.ts`.
- Contact is by email (`mailto:`) and LinkedIn only.
- Must remain fully usable without JavaScript; browser tests cover responsive layouts, keyboard navigation, no-JS rendering, metadata, links and print presentation.
- `npm run verify` is the pre-commit gate; a plain `astro build` clears the generated downloads, so `npm run build:all` must run first.

## Capabilities and Constraints

- Content source of truth: `src/data/cv.ts` (CV content) and `src/data/site.ts` (identity and contact). Templates must not duplicate CV content.
- All public claims must be supported by `CONTENT.md`. Job descriptions come from the LinkedIn Experience section; do not invent responsibilities, seniority, quantified outcomes beyond those LinkedIn states, clinical qualifications, or active job-search availability.
- Never publish a phone number or the original input PDF.
- The portrait at `public/images/veronica.webp` is a real photograph. Never synthesize or substitute a likeness. The homepage must degrade to a typography-only layout if the portrait is absent.
- Page links use trailing slashes.
- Conventional commit messages. The repository must stay independent: no other site's history, assets or content.
- Terminology: ".NET Developer" is the public role title; "Veronica Kurteva" is the public name, matching LinkedIn (/in/veronica-kurteva/).

## Brand Commitments

- Binding visual constraint (confirmed by the owner): the warm editorial world stays. Lora headings, Source Sans 3 text, ivory paper, charcoal ink and terracotta accent remain; distinctiveness is to come from composition, detail and motion inside that world, not by replacing it.
- Voice: first person, plain, modest, curious. No hype, no superlatives.

## Evidence on Hand

- Real CV content in `src/data/cv.ts`: five technical roles (EGT Digital, Accedia, MentorMate, Sensata Technologies, Telepoint), two additional roles (psychologist intern, IT teacher intern), three degrees from New Bulgarian University, four skill groups, four certifications, three interests.
- Real portrait: `public/images/veronica.webp` (800×800 derivative of the LinkedIn photograph), plus resized copies `veronica-400.webp` and `veronica-600.webp` that phones and smaller screens load instead. Regenerate the copies if the portrait changes.
- Provenance notes in `CONTENT.md`.
- Absent, do not fabricate: testimonials, project case studies, metrics other than those on LinkedIn, open-source links, blog posts, availability status, certification expiry dates.

## Product Principles

1. Earn the email. Every section should make a recruiter more confident about starting a conversation; contact must be easy to find from anywhere.
2. Code plus cognition is the story. Lead with the combination, not with a generic developer pitch.
3. Say only what the sources support. Restraint is part of the credibility.
4. One source of content. Pages and downloads must never drift apart.
5. Works everywhere: no JavaScript required, printable, keyboard-navigable, responsive.

## Accessibility & Inclusion

No product-specific standard was set. The existing test suite enforces keyboard navigation, no-JS rendering and responsive layouts; keep those passing and keep text contrast at WCAG AA or better.
