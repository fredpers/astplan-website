# RamosMap Website

> **Redesign preview** (branch `cursor/ramosmap-redesign-preview`): avaros-style pass on Designer tokens v0.1, brand purple `#5F3CD7`. Preview only — do not merge.

Marketing site for **RamosMap** (Feld-Baumkontrolle). Static Astro site, DE-first.

## Stack

- [Astro](https://astro.build) with `output: 'static'`
- CSS custom properties (RamosMap tokens) — no heavy UI kit
- Montserrat and Inter self-hosted via `@fontsource` (no Google Fonts)
- Brand: **RamosMap** (camelCase; nickname Ramos OK in short UI)

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

Live preview: `https://astplan-website.pages.dev` (repo still `fredpers/astplan-website`).

Canonical `site` in `astro.config.mjs` is `https://ramosmap.com` (SEO intent). Custom domain / DNS is pending — do not buy or attach DNS from this repo.

No paid secrets required. No waitlist / FormSubmit backend.

## CTAs (product direction)

| CTA | Behavior |
|-----|----------|
| **App öffnen** | Primary everywhere → `https://astplanapp.web.app` (lime filled on dark, purple filled on light) |
| **Registrierung** | Plain text only: "Registrierung folgt in Kürze" — not a button, not clickable |

`/warteliste` redirects to `/`. No waitlist form or Pages Function in the user path.

## Brand assets

Masters live under `public/brand/`:

- `ramosmap-logo.svg` — icon-only mark (header/footer, >= 48px); official set, `#5F3CD7`
- `ramosmap-favicon.svg` — small-size / 64px CTA-panel variant

Logo switches live in `src/config/brand.ts` (`SHOW_NAME_TEXT` toggles the plain "RamosMap" text next to the mark).

## Project layout

```
src/
  components/   SiteHeader, SiteFooter, Hero, FeatureCards, StepRow,
                CtaBand, CompareTable, FaqAccordion, LegalStub
  layouts/      BaseLayout.astro
  pages/        /, /produkt, /einordnung, /preise,
                /faq, /impressum, /datenschutz
  styles/       fonts.css, tokens.css, site-tokens.css, global.css
```

## Out of scope (by design)

- English locale
- Real product photos / motion / blog
- App chrome clone
- Domain purchase / custom DNS
- Waitlist / FormSubmit (canceled)
- Competitor vendor brand names on the marketing site
- Final Impressum/Datenschutz legal copy (stubs only)
- Changes to `fredpers/ast_plan_app`

## License

Private — not for public redistribution.
