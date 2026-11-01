# Content provenance

The site combines Veronica’s supplied CV (a PDF, not committed) and her LinkedIn profile, inspected on 12 October 2026 and again on 1 November 2026: https://www.linkedin.com/in/veronica-kurteva/.

- Public name: Veronica Kurteva, explicitly chosen by the user to match LinkedIn.
- LinkedIn provides the EGT Digital role (February 2025-present), Cognitive Science master’s (October 2025-present), updated psychology degree title, and the two MentorMate positions. The MentorMate dates overlap in March-April 2022 on the profile; retain them rather than guessing a correction.
- The PDF provides the psychology and teaching internships, certifications, interests, contact email and further details of earlier technical work.
- EGT Digital had no responsibility description in either source. On 12 October 2026 the owner supplied the role content directly: backend services for the gaming platform in C# and ASP.NET Core with PostgreSQL, Redis, RabbitMQ, Docker and Kibana; end-to-end ownership of features and driving whole initiatives independently; AI-assisted development using OpenCode with an in-house language model. The model is deliberately unnamed. Hybrid, Sofia.
- The completed 2021-2025 bachelor’s is described using LinkedIn’s degree title. The master’s is explicitly ongoing.
- Certification expiry dates are not provided. The site lists credentials and training without asserting current certification validity.
- First-person homepage copy is an editorial paraphrase grounded in these sources. Do not claim seniority, active availability or clinical qualifications, or numbers that LinkedIn does not state.
- Do not include phone details in source content, generated documents or metadata. The original PDF is deliberately not committed or distributed.
- Portrait source: the real LinkedIn profile photograph, when available. Store a local optimized derivative rather than using an expiring LinkedIn URL.

The site is hosted on GitHub Pages at https://veronicakurteva.com.

## Homepage redesign, 12 October 2026

- The headline "I build .NET backends. I study how people think." paraphrases the CV summary and the ongoing master's. It claims no seniority or outcomes.
- "Eight months as a psychologist intern" is May to December 2024 from the CV. "Supporting art therapy sessions for people living with dementia" paraphrases the CV bullet.
- The timeline derives every bar from the period strings in `src/data/cv.ts`. Year-only degree periods are drawn as academic years (October to July), which is an interpretation, not a sourced date.
- The social preview image at `public/images/og.jpg` is rendered from the real portrait and the headline; regenerate it if either changes.
- The public email address was changed to veronica.kurteva@gmail.com on the owner's instruction on 12 October 2026, replacing the address from the PDF.
- The timeline chart starts at 2020; everything that ended earlier is summarised in one sentence beneath it, and Sensata (which began in September 2019) is drawn from the left edge with a faded start.
- The favicon is the timeline mark: a charcoal bar above the axis, a terracotta one below.
- Content pass, 12 October 2026, on the owner's instruction: the "ChatGPT for Beginners" course was removed from certifications; skills were split into Tools and Practices, with PostgreSQL, RabbitMQ, Kibana, OpenCode, SOLID, AI-assisted development and end-to-end feature ownership added from the EGT Digital notes; the CV summary gained a sentence about the current role; the about heading became "I've worked on factory floors, in data centres and with people living with dementia", which paraphrases the Sensata, Telepoint and Blocks Rehabilitation Hospital entries.

## Developer focus, 1 November 2026

- The Blocks Rehabilitation Hospital psychologist internship stays in the CV data, so it appears on the timeline, the CV page and the downloads (the owner briefly removed it, then asked for it back). The homepage about copy no longer mentions it: the "eight months" line and the dementia heading noted above are superseded by the two bullets below.
- The about heading is now "Five years of building and running production .NET services", chosen by the owner. It paraphrases her LinkedIn About ("5+ years building and running production services in C#, ASP.NET Core..."), checked on 1 November 2026; the .NET roles from Sensata (2019) to EGT Digital (present) support it.
- On the owner's instruction, the second about paragraph lists the degrees in order: the Computer Science bachelor's (2014-2018), the second bachelor's in Cognitive Science and Psychology (2021-2025, taken while working as a developer) and the ongoing master's. The CS subjects and the research focus (how people judge what AI tools can do and how far to trust them) come from the LinkedIn education entries, checked on 1 November 2026. Daily use of AI coding assistants comes from the EGT Digital entry.
- On the owner's instruction, the timeline chart now starts at 2017, so the Computer Science bachelor’s (2014-2018) is drawn on it from the left edge with a faded start, as is the IT teacher internship (December 2016 to March 2017). Telepoint and the IT teacher internship are drawn too, and the "Before 2020" sentence is hidden because nothing ends before the chart begins. This supersedes the earlier note about the chart starting at 2020.
- The timeline heading is now "My path to backend development", chosen by the owner to keep the homepage developer-focused for recruiters. It replaces "Where code and cognition overlap".
- `site.ts` links to https://www.linkedin.com/in/veronica-kurteva/ (seen on 1 November 2026).
- On the owner's instruction, every technical role's bullets, homepage description and technology labels now come from her LinkedIn Experience section (read 1 November 2026), rewritten in plain first person. This supersedes the October EGT Digital notes: RabbitMQ, Docker, OpenCode and "end to end" ownership are no longer claimed. The numbers (seven messaging channels, 20% less database load, two migrated projects, two applications, two mentored juniors) are stated on LinkedIn. LinkedIn also gives the corrected dates (MentorMate junior role to February 2022, Sensata to February 2020) and the on-site locations for Sensata and Telepoint.
- The homepage "The tools behind the work" section was removed on the owner's instruction, because each recent job now shows its technology labels. The CV page keeps the full skills list.
