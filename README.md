# Portfolio

Personal portfolio site for [bandusch.com](https://www.bandusch.com), showcasing frontend/fullstack projects for recruiters and technical interviewers.

![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![LESS](https://img.shields.io/badge/LESS-4-1D365D?logo=less&logoColor=white)
![Zoneless](https://img.shields.io/badge/Change_Detection-Zoneless-0f766e)
![Prerendered](https://img.shields.io/badge/SSG-Prerendered-0f766e)

---

## Features

- **Prerendered per route (SSG)** — every route renders to real HTML at build time, so crawlers, link previews and ATS systems get actual content instead of a blank shell
- **Bilingual DE/EN** — a custom signal-based translation service, single build, client-side toggle, no locale routes
- **Contact form** — posts to an existing PHP mail endpoint on the webspace, with a compact variant on the home page and a full variant (subject, privacy consent) on the dedicated contact page
- **Sticky header with anchor navigation** — smooth-scrolls to sections, works from every route
- **Legal pages** — Impressum and Datenschutz share a component, with a sticky jump nav down the side
- **Responsive** — burger menu navigation below the desktop breakpoint

---

## Tech Stack

| Technology | Version |
|---|---|
| Angular (standalone, zoneless) | 22 |
| TypeScript | 6 |
| LESS | 4 |

No backend — the contact form posts directly to a PHP script already living on the webspace. No test runner — deliberate choice, the site has too little logic surface to justify one; manual QA covers it instead.

---

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). This runs `ng serve`, which builds with SSR under the hood in dev mode — harmless, the deployed build is fully static.

### Build

```bash
ng build
```

Outputs static files to `dist/portfolio/browser/`.

### Deploy

Upload the contents of `dist/portfolio/browser/` to the webspace via FTP. There is no Node server involved in production.

---

## Architecture

### Rendering

`outputMode: "static"` in `angular.json`, every route renders via `RenderMode.Prerender`. Nothing differs per request — no login, no user data — so prerendering the whole site up front is enough; `src/server.ts` / `main.server.ts` exist only because `ng new --ssr` scaffolds them and the prerender build step uses them internally, they don't run anywhere in production.

### Translations

`core/language/` holds a signal-based `LanguageService` with one object per locale (`language.de.ts`, `language.en.ts`) implementing a shared `Language` interface. Components read strings through a single `t()` signal, so switching language is one signal write, no route change, no re-render strategy to think about.

### Layout

Full-bleed elements (header, footer, section dividers, the contact band) put their border/background on the component's `:host`, so they reach the viewport edge, while an `.inner` element — built from a shared `.container()` LESS mixin — centers and caps the actual content at 1280px.

---

## Project Structure

```
portfolio/
└── src/app/
    ├── core/
    │   ├── language/       # i18n service, DE/EN content, shared types
    │   └── contact/        # Contact form HTTP service
    ├── shared/
    │   ├── header/         # Sticky nav, language switch, burger menu
    │   ├── footer/
    │   ├── contact-form/   # Shared compact/full contact form component
    │   └── legal-section/  # Shared layout for Impressum/Datenschutz
    └── pages/
        ├── home/           # Hero, project list, about, skills, contact band
        ├── contact/
        ├── imprint/
        └── privacy/
```

---

## Author

**Andreas Bandusch**
