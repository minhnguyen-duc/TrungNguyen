# Thank You — A Quiet Farewell

A static, single-page digital farewell card built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. No backend, no database, no authentication — fully static and deploy-ready for Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Push to a Git repository and import it in [Vercel](https://vercel.com/new) — no configuration needed. The project has no environment variables and no external services beyond Unsplash-hosted images (already allow-listed in `next.config.js`).

## Structure

```
app/                Root layout, global styles, and the single page route
components/         Section components (Hero, Timeline, Gallery, Letter, Ending, Footer)
components/ui/      Small reusable primitives (Button, Toast)
lib/                cn() helper and the reduced-motion hook
public/              Favicon
```

## Notes

- All motion respects `prefers-reduced-motion` — both via a JS hook (floating leaves) and a global CSS override (everything else).
- Gallery images are your own photos, stored in `public/gallery/` and lazy-loaded via `next/image`; swap the files (and the `PHOTOS` array in `components/Gallery.tsx`) any time.
- Colors, type, and copy live close to where they're used — change the palette in `tailwind.config.ts`, and the letter's text directly in `components/Letter.tsx`.
