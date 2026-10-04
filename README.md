# RamosMap Website

> **Redesign preview** (branch `cursor/ramosmap-redesign-preview`): avaros-style pass on Designer tokens v0.1, brand purple `#5F3CD7`. Preview only — do not merge.

Marketing site for **RamosMap** (Feld-Baumkontrolle). Static Astro site, DE-first, Feldklar design tokens.

Implements Linear carve-out **AST-68** (site scaffold) plus **AST-89** (RamosMap brand cutover), matching IA/copy from **AST-66** and design from **AST-67**.

## Stack

- [Astro](https://astro.build) with `output: 'static'`
- CSS custom properties (Feldklar tokens) — no heavy UI kit
- Inter via Google Fonts
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

Canonical `site` in `astro.config.mjs` is `https://ramosmap.com` (SEO intent). **Custom domain / DNS is pending AST-87** — do not buy or attach DNS from this repo.

No paid secrets required. No waitlist / FormSubmit backend.

## CTAs (product direction)

| CTA | Behavior |
|-----|----------|
| **App öffnen** | Primary everywhere → `https://astplanapp.web.app` (Firebase project stays astplanapp; `app.ramosmap.com` DNS not ready — AST-87) |
| **Registrieren** | Visible but disabled: "Registrieren · bald verfügbar", muted dashed outline, `aria-disabled`, not clickable (no strikethrough) |

**Waitlist / FormSubmit Phase A (AST-69) canceled.** `/warteliste` redirects to `/`. No waitlist form or Pages Function in the user path.

## Brand assets

Masters live under `public/brand/`:

- `ramosmap-logo.svg` — icon-only mark (header/footer/CTA, >= 48px); Designer set 2026-10-04, `#5F3CD7`
- `ramosmap-favicon.svg` — small-size optimised mark (< 48px)
- `ramos-*.svg` — legacy AST-89 masters (unused by the redesign)

Logo switches live in `src/config/brand.ts` (`SHOW_NAME_TEXT` toggles the plain "RamosMap" text next to the mark).

## Project layout

```
src/
  components/   SiteHeader, SiteFooter, Hero, FeatureCards, StepRow,
                CtaBand, CompareTable, FaqAccordion, LegalStub
  layouts/      BaseLayout.astro
  pages/        /, /produkt, /einordnung, /preise,
                /faq, /impressum, /datenschutz
  styles/       global.css (Feldklar tokens)
```

## Out of scope (by design)

- English locale
- Real product photos / motion / blog
- App chrome clone
- Domain purchase / custom DNS (AST-87 — Fredrik)
- Waitlist / FormSubmit (canceled)
- Competitor vendor brand names on the marketing site
- Final Impressum/Datenschutz legal copy (AST-87 stubs only)
- Changes to `fredpers/ast_plan_app`

## License

Private — not for public redistribution.
