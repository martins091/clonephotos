# Clonepictures Photo Studio: website

A Next.js 16 static site with a calm, gallery-like design. Prices, studio spaces and policies come first.

```
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/ — upload that folder to any host
```

All content lives in `lib/site.ts`: branches, services, packages, studio spaces, gallery, booking steps and FAQ/policies.

## Photos: drop them in `public/images/` and rebuild
Each slot shows a labelled placeholder until its file exists. The build checks automatically, so no code changes are needed.

| File | What | Recommended size |
|---|---|---|
| hero-1.jpg, hero-2.jpg, hero-3.jpg | Hero slideshow (best shoots) | 2400×1600, landscape |
| service-weddings / -birthdays / -family / -maternity / -graduation / -branding.jpg | Service cards | 1200×900, 4:3 |
| space-regular.jpg | Regular Backdrop Space | 1500×1200, 5:4 |
| space-content.jpg | Content Space | 1500×1200, 5:4 |
| gallery-01 … gallery-12.jpg | Gallery: 01, 06, 11 Weddings · 02, 07 Birthdays · 03, 08 Family · 04, 09, 12 Studio · 05, 10 Outdoor | long edge 1600; mix of portrait and landscape |
| branch-yaba / branch-leisure / branch-adeniran.jpg | Branch cards | 1600×900, 16:9 |
| logo.png (optional) | Studio logo, if they have one | SVG or transparent PNG |

To change gallery categories or captions, edit `gallery` in `lib/site.ts`.

## Placeholders to confirm with the owner
Every placeholder appears on the site highlighted in yellow, e.g. `[price]` or `[CONFIRM WITH OWNER]`.
- **Packages (Basic / Standard / Premium):** price, looks/outfits, session length, edited photos, raw photos yes/no, delivery time
- **Add-ons:** Content Space upgrade, extra edited photo, extra look, raw photos, express delivery
- **Studio spaces:** what Regular includes (incl. passport/ID photos?), the Content Space surcharge
- **Policies / FAQ:** raw photos, number of edited photos, delivery time and method, deposit amount, cancellation and rescheduling, own makeup artist, lateness, what the studio provides
- **"Prices and policies are the same at every branch":** confirm, or list the differences per branch
- **Testimonials:** paste 3 real client reviews (e.g. from Google) into `testimonials` in `lib/site.ts`. Never invent quotes
- **Socials:** Instagram, Facebook and TikTok links
- **Domain:** set `NEXT_PUBLIC_SITE_URL`
