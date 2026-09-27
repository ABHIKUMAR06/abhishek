# Abhishek Kumar — Portfolio

**Live site:** [abhishek-rust.vercel.app](https://abhishek-rust.vercel.app/)

Personal portfolio site for **Abhishek Kumar**, a backend and full-stack developer working with
Python, FastAPI, React.js and AWS.

Built as a single-page site with React, TypeScript, Vite and Tailwind CSS v4.

## Features

- Responsive single-page layout: hero, about, experience timeline, work, skills and contact
- Professional projects (JigsawML, FloatChat, Your Ad Genius) alongside public GitHub repositories
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Accessible markup: skip link, ARIA labels on icon-only links, keyboard-navigable mobile menu
- SEO and Open Graph metadata for link previews

## Tech stack

| Area    | Choice                       |
| ------- | ---------------------------- |
| UI      | React 19 + TypeScript        |
| Build   | Vite 8                       |
| Styling | Tailwind CSS v4 (Vite plugin) |
| Linting | oxlint                       |
| Fonts   | Inter + JetBrains Mono       |

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually http://localhost:5173).

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload     |
| `npm run build`   | Type-check and build production output to `dist/` |
| `npm run preview` | Serve the built `dist/` locally               |
| `npm run lint`    | Run oxlint across the project                 |

## Editing content

All copy lives in one place — `src/data/content.ts`. Update that file to change the bio,
experience, projects, repositories, skills or contact details. No component edits needed for
routine content changes.

## Project structure

```
src/
├── components/     # Nav, Hero, About, ExperienceSection, Work, Skills, Contact, Footer, Icons
├── data/
│   └── content.ts  # All site copy and data
├── hooks/
│   └── useReveal.ts
├── App.tsx
├── index.css       # Tailwind theme tokens and component classes
└── main.tsx
```

## Deploying

The build sets `base: './'` in `vite.config.ts`, so `dist/` works from any path — a root domain,
a subdirectory or a GitHub Pages project site.

### GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes on every push to `main`. To
enable it, open **Settings → Pages** in the repository and set **Source** to **GitHub Actions**.

### Vercel or Netlify

Import the repository and accept the detected defaults:

- Build command: `npm run build`
- Output directory: `dist`

## License

Content and copy © Abhishek Kumar. Source code released under the MIT License — see `LICENSE`.
