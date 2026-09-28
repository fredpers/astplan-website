# RamosMap Website

Marketing site for **RamosMap** (Feld-Baumkontrolle). Static Astro site, DE-first, Feldklar design tokens.

Implements Linear carve-out **AST-89** (RamosMap brand cutover), on the scaffold from **AST-68**.

## Stack

- [Astro](https://astro.build) with `output: 'static'`
- CSS custom properties (Feldklar tokens) — no heavy UI kit
- Inter via Google Fonts
- Brand: **RamosMap** (camelCase). Purple `#5B45E0`. Wordmark: charcoal Ramos + purple Map.

## Local development

```bash
npm install
npm run dev
```

Requires **Node 20+**.

```bash
npm run build    # output → dist/
npm run preview  # preview production build
```

## Cloudflare Pages

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` |
| Canonical site | `https://astplan-website.pages.dev` (Astro `site`; no custom DNS / `ramosmap.com` until the domain is bought later) |

No paid secrets required. No waitlist / FormSubmit backend. Do **not** buy domains or attach custom DNS in this cutover. Brand+copy ships on the current Pages host.

## Brand assets

Masters live in `public/brand/`:

| File | Use |
|------|-----|
| `ramos-mark-outlined.svg` | Header / footer mark |
| `ramos-lockup.svg` | Outlined mark + wordmark |
| `ramos-mark.svg` | Filled D2 Map Sheet (squircle + sheet + dog-ear + contours + bullseye) |
| `ramos-wordmark.svg` | Ramos + Map |

`public/favicon.svg` is the filled mark (strokes thickened for 16–24px). Raster: `favicon-32.png`, `apple-touch-icon.png` (180×180).

## CTAs (product direction)

| CTA | Behavior |
|-----|----------|
| **App öffnen** | Primary everywhere → `https://astplanapp.web.app` |
| **Registrieren** | Visible but disabled (strikethrough, `aria-disabled`, not clickable) — coming soon |

**Waitlist / FormSubmit Phase A (AST-69) canceled.** `/warteliste` redirects to `/`. No waitlist form or Pages Function in the user path.

## Project layout

```
src/
  components/   SiteHeader, SiteFooter, Hero, FeatureCards, StepRow,
                CtaBand, CompareTable, FaqAccordion, LegalStub
  layouts/      BaseLayout.astro
  pages/        /, /produkt, /einordnung, /preise,
                /faq, /impressum, /datenschutz
  styles/       global.css (Feldklar tokens)
public/
  brand/        RamosMap SVG masters
```

## Out of scope (by design)

- English locale
- Real product photos / motion / blog
- App chrome clone
- Buying domains or attaching custom DNS / `ramosmap.com` (later: AST-87 / AST-90)
- Waitlist / FormSubmit (canceled)
- Competitor vendor brand names on the marketing site
- Final Impressum/Datenschutz legal copy (Platzhalter until AST-87)

## License

Private — not for public redistribution.
