# AstPlan Website

Marketing site for **AstPlan** (Feld-Baumkontrolle). Static Astro site, DE-first, Feldklar design tokens.

Implements Linear carve-out **AST-68** (site scaffold), matching IA/copy from **AST-66** and design from **AST-67**.

## Stack

- [Astro](https://astro.build) with `output: 'static'`
- CSS custom properties (Feldklar tokens) — no heavy UI kit
- Inter via Google Fonts
- Brand: **AstPlan** (TreeWhere rename locked; cutover not greenlit)

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

No paid secrets required. No waitlist / FormSubmit backend.

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
```

## Out of scope (by design)

- English locale
- Real product photos / motion / blog
- App chrome clone
- Final production domain cutover
- Waitlist / FormSubmit (canceled)
- Competitor vendor brand names on the marketing site
- TreeWhere rename cutover
- Final Impressum/Datenschutz legal copy (AST-70 stubs only)

## License

Private — not for public redistribution.
