# Karthikeyan — Portfolio

React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Contact form (EmailJS)

Copy `.env.example` to `.env` and fill in your EmailJS service/template/public
key (from emailjs.com). Without these set, the form falls back to opening a
pre-filled `mailto:` draft.

## Content

All copy — profile, skills, projects, experience, services — lives in
`src/data/content.ts`. Edit that one file to update the site.

## Structure

```
src/
  components/   shared UI: nav, footer, cursor, particle background, cards
  sections/     one file per page section (Hero, About, Skills, ...)
  hooks/        useTypewriter, useCounter
  data/         content.ts — single source of truth for copy
```

## Notes

- Replace `public/favicon.svg` and add a real `public/resume.pdf`.
- Update `profile.github` / `linkedin` / `email` / `phone` in `content.ts`.
- Swap project `github` / `demo` links once repos are public.
