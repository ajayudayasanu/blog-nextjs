# Ajay's Tech Blog

A technical tutorial blog at [blog.ajayunnikuttan.com](https://blog.ajayunnikuttan.com), built with **Next.js (App Router)**, **React**, and **Tailwind CSS v4**. JavaScript only — no TypeScript.

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| Framework    | Next.js 16 (App Router, Server Components)      |
| Styling      | Tailwind CSS v4 + CSS custom properties          |
| Fonts        | Geist / Geist Mono via `next/font`               |
| Markdown     | `react-markdown` + `remark-gfm` + `rehype-highlight` |
| Dates        | `date-fns`                                       |
| CMS (future) | Strapi (REST API)                                |

## Project Structure

```
src/
  app/                  # Next.js App Router pages and layouts
    layout.js           # Root layout — metadata, fonts, Header/Footer shell
    page.js             # Home page — Hero + recent posts grid
    globals.css         # Theme (CSS variables → Tailwind @theme)
    blog/[slug]/page.js # Individual blog post
    topics/[topic]/page.js # Posts filtered by topic
  components/           # Reusable React components (Header, Footer, PostCard, etc.)
  lib/
    api.js              # Data-access layer — all reads go through here
  data/
    posts.json          # Local mock data (replaced by Strapi later)
public/
  images/               # Static assets (favicons, OG images, etc.)
```

### Key Conventions

- **All data access goes through `lib/api.js`**. Components never read from `posts.json` directly. When switching to Strapi, only `api.js` needs to change — function signatures stay the same.
- **Theme colors are CSS custom properties** defined in `globals.css` and wired into Tailwind via `@theme inline`. To change the palette, edit the `:root` block.
- **Components are stubs** for now. Each file has a `// TODO` comment describing the full design intent.
- **No TypeScript** — the entire codebase is JavaScript (`.js` / `.mjs`).

## Data Layer

Currently reads from a **local JSON file** (`src/data/posts.json`). Each post has this shape:

```json
{
  "id": 1,
  "slug": "getting-started-with-nextjs",
  "title": "Getting Started with Next.js App Router",
  "excerpt": "Short summary...",
  "content": "Full markdown body...",
  "coverImage": "https://images.unsplash.com/...",
  "topic": "nextjs",
  "tags": ["nextjs", "react"],
  "author": "Ajay Unnikuttan",
  "publishedAt": "2026-10-01T10:00:00.000Z",
  "featured": true
}
```

**Strapi migration plan:** Every function in `api.js` has a `// TODO` comment with the equivalent Strapi REST query. When ready, set `STRAPI_API_URL` and `STRAPI_API_TOKEN` in `.env.local` (see `.env.local.example`) and swap the function bodies.

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template (first time only)
cp .env.local.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm run start` | Serve production build       |
| `npm run lint`  | Run ESLint                   |

## Environment Variables

See [`.env.local.example`](.env.local.example) for all supported variables:

| Variable               | Required | Description                        |
| ---------------------- | -------- | ---------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Public URL for metadata / OG tags  |
| `STRAPI_API_URL`       | Later    | Strapi REST API base URL           |
| `STRAPI_API_TOKEN`     | Later    | Strapi API token for authenticated requests |
