# AstPlan Website

Marketing site for **AstPlan** (Feld-Baumkontrolle). Static Astro site, DE-first, Feldklar design tokens.

Implements Linear carve-out **AST-68** (site scaffold), matching IA/copy from **AST-66** and design from **AST-67**. Waitlist backend is **AST-69 Phase A**.

## Stack

- [Astro](https://astro.build) with `output: 'static'`
- Cloudflare Pages Functions (`functions/`) for server endpoints
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

> Note: `/api/waitlist` is a Cloudflare Pages Function. It runs on CF Pages (or `wrangler pages dev`), not in plain `astro preview`.

## Cloudflare Pages

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` |
| Functions | `functions/` (auto-detected) |

Environment: no paid secrets required. Waitlist uses FormSubmit’s free AJAX API (see below).

## Waitlist (AST-69 Phase A)

**Flow:** browser → `POST /api/waitlist` (Cloudflare Pages Function) → FormSubmit AJAX → Fredrik’s inbox (`fredrik.persson92@live.se`).

| Piece | Detail |
|-------|--------|
| Endpoint | `functions/api/waitlist.js` |
| Client | `WaitlistForm.astro` posts JSON to `/api/waitlist` |
| Email subject | `AstPlan Warteliste` (`_subject`) |
| Template | FormSubmit `table` (`_template`) |
| Reply-To | Submitter email (`_replyto`) |
| Spam | Honeypot field `website` (must stay empty) + server validation (email required, honeypot rejected / not forwarded) |

**First delivery:** FormSubmit may send Fredrik an **activation / confirmation email** the first time this address is used. Confirm that mail before live submissions arrive in the inbox.

**Phase B** (app auth deep-link / in-app waitlist) is **out of scope** for this carve-out.

## Project layout

```
functions/
  api/waitlist.js   CF Pages Function → FormSubmit
src/
  components/   SiteHeader, SiteFooter, Hero, FeatureCards, StepRow,
                CtaBand, CompareTable, WaitlistForm, FaqAccordion, LegalStub
  layouts/      BaseLayout.astro
  pages/        /, /produkt, /einordnung, /preise, /warteliste,
                /faq, /impressum, /datenschutz
  styles/       global.css (Feldklar tokens)
```

## Out of scope (by design)

- English locale
- Real product photos / motion / blog
- App chrome clone
- Final production domain cutover
- Waitlist Phase B (app auth deep-link)
- TreeWhere rename cutover
- Final Impressum/Datenschutz legal copy (AST-70 stubs only)

## License

Private — not for public redistribution.
