# Ajay's Tech Blog

A technical tutorial blog at [blog.ajayunnikuttan.com](https://blog.ajayunnikuttan.com), built with **Next.js (App Router)**, **React**, and **Tailwind CSS v4**. JavaScript only — no TypeScript.

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| Framework    | Next.js 16 (App Router, Server Components)      |
| Deployment   | Cloudflare Workers via [vinext](https://github.com/cloudflare/vinext) & Wrangler |
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

| Command                | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `npm run dev`          | Start standard Next.js dev server (Turbopack, port 3000)   |
| `npm run dev:vinext`   | Start vinext Vite dev server with HMR (port 3001)           |
| `npm run build`        | Production build for Next.js                               |
| `npm run build:vinext` | Build for Cloudflare Workers via Vite (`dist/` output)     |
| `npm run deploy`       | Build and deploy to Cloudflare Workers (`blog.ajayunnikuttan.com`) |
| `npm run start`        | Serve Next.js production build                             |
| `npm run lint`         | Run ESLint                                                 |
| `npm run postinstall`  | Apply package patches via `patch-package`                  |

## Deployment (Cloudflare Workers)

The site is deployed globally to Cloudflare Workers using **[vinext](https://github.com/cloudflare/vinext)** and **Wrangler**, mapped to the custom domain **`blog.ajayunnikuttan.com`**.

### How It Works

1. **Vite RSC Architecture**: `vite.config.ts` pairs `vinext` with `@cloudflare/vite-plugin` and `@vitejs/plugin-rsc` to bundle Next.js App Router Server Components, SSR environments, and static client assets into `dist/`.
2. **Worker Entry**: [`worker/index.ts`](worker/index.ts) delegates request handling to `vinext/server/app-router-entry` and provides edge image optimization via Cloudflare Images binding.
3. **Custom Domain**: Configured in [`wrangler.jsonc`](wrangler.jsonc) with `custom_domain: true`. Cloudflare automatically provisions DNS records and manages SSL/TLS certificates.
4. **Patches**: Uses `patch-package` (`patches/vinext+0.0.7.patch`) to ensure Windows cross-platform compatibility for the Wrangler runner. Runs automatically during `npm install`.

### Prerequisites

Make sure you are logged in to your Cloudflare account with Wrangler:

```bash
npx wrangler login
```

### Deploy to Production

To build and deploy in a single step:

```bash
npm run deploy
```

*(Alternatively, you can run `npx vinext deploy`)*

## Environment Variables

See [`.env.local.example`](.env.local.example) for all supported variables:

| Variable               | Required | Description                        |
| ---------------------- | -------- | ---------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Public URL for metadata / OG tags  |
| `STRAPI_API_URL`       | Later    | Strapi REST API base URL           |
| `STRAPI_API_TOKEN`     | Later    | Strapi API token for authenticated requests |

