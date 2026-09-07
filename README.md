# Glad Auto Sales & Services LLC — Website

Static site for **Glad Auto Sales & Services LLC**, 617 E. Pine St, Lodi, CA 95240.

- **Live URL:** https://gladautosllc.netlify.app
- **Stack:** Astro 5 (static) + Netlify
- **Repo:** https://github.com/carloscbrls/glad-auto-astro
- **Owner:** Lavichia (client) · Carlos Cabrales / CC3PO LLC (build/maintain)

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # → dist/
```

## Deploy

Pushes to `main` auto-deploy via Netlify. No manual step required.

Build command: `npx astro build` · Publish dir: `dist` · Node: 22.

## Brand

- Background `#000000`
- Gold `#B8860B` (accents, SUV, wordmark outline)
- Green `#228B22` (primary CTA, GLAD wordmark fill)
- White `#FFFFFF` (body)
- Display: Anton · Body: Inter

Source of truth: physical yard sign. Update CSS variables in `src/styles/global.css`.

## Sections

1. Sticky nav + phone CTA
2. Hero with sign artwork + phone CTA
3. Services grid (4 cards)
4. Hours / Address / Contact + Google Maps embed
5. Contact card grid (call / email / walk-in)

## Future

- Customer intake form (Section 4 of checklist — pending Lavichia)
- Online payments via Stripe (Section 3 — pending Lavichia)
- Custom domain if Lavichia owns `gladautos.com`
- Logo SVG (currently using JPG from sign photo)
