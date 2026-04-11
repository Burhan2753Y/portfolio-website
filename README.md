# Burhanuddin Tinwala — Portfolio Website

[![Site preview](/public/assets/thumbnail.png)](https://figma-portfolio-ten.vercel.app/)

A personal portfolio website built to showcase my work as a **Software Engineer**, **UI/UX Designer**, and **React Native Developer**. Built with [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS v4](https://tailwindcss.com/).

**Live site:** [figma-portfolio-ten.vercel.app](https://figma-portfolio-ten.vercel.app/)

---

## About

I'm **Burhanuddin Tinwala** — a Software Engineer at [WebHR](https://web.hr/) and a self-taught UI/UX designer with 3+ years of industry experience. I design and build meaningful, delightful digital products that balance user needs with business goals.

---

## Features

- **Animated Typing Effect** — Hero section cycles through my roles with a smooth typewriter animation
- **Dark-themed UI** — Designed in Figma with purple gradient accents
- **Responsive Layout** — Works seamlessly on mobile, tablet, and desktop
- **Featured Projects** — Showcases selected design work with descriptions and links
- **Work Experience** — Cards highlighting products I've shipped
- **About Section** — Skills overview with an illustrative layout
- **Vercel Analytics** — Performance and usage tracking
- **Statically Generated** — All pages are statically generated via Next.js

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Node.js | 20 |

**Font:** [Poppins](https://fonts.google.com/specimen/Poppins) (weights 300–900) via `next/font`

---

## Sections

- **Home / Banner** — Introduction with animated role typewriter and hero image
- **About** — Skills illustration and a short overview
- **Work Experience** — Cards for WebHR, WebHR Kiosk, Somezing, and FileIT
- **Projects (Lab)** — Featured Figma design projects:
  - [NeuraWeb – Futuristic AI Website Landing Design](https://www.figma.com/community/file/1441377868897233703/ai-website-landing-design)
  - [Apple Vision Pro – HR Software Design](https://www.figma.com/community/file/1371824014208363481/apple-vision-pro-hr-software-design)

---

## Getting Started

```bash
git clone git@github.com:burhan2753y/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Edit `app/page.tsx` — the page hot-reloads as you save.

---

## Project Structure

```
app/
  components/
    Banner.tsx      # Hero section with typing animation
    About.tsx       # Skills / about section
    Experience.tsx  # Work experience cards
    Projects.tsx    # Featured projects
    Header.tsx      # Navigation
    Footer.tsx      # Footer
  page.tsx          # Root page
  layout.tsx        # Root layout
public/
  assets/           # Icons, illustrations, images
  cards/            # Experience card icons
  projects/         # Project screenshot images
  logo/             # Site logo
```

---

## Deployment

The site is deployed on **Vercel** — every push to `main` is automatically deployed and aliased to the live URL. Pull request previews are created for every branch.

For **Cloudflare Pages** deployment:

```bash
npm run build
```

This runs `next build` followed by `@cloudflare/next-on-pages` to generate the Cloudflare-compatible output, which can then be deployed via Wrangler.

---

## License

&copy; 2025 Burhanuddin Tinwala. All rights reserved.

You're welcome to fork and experiment, but please don't publish the site as-is or claim it as your own work. The typography, color palette, and layout form my personal brand identity — remix rather than copy.

---

If you found this helpful or interesting, consider leaving a star!
