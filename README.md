# Team Sheriya

Next.js 15 website for web products, UI/UX, websites, and growth content.

## Requirements

- Node.js 20.9 or newer
- npm; the repository includes package-lock.json

## Local setup

1. Run npm ci.
2. Copy .env.example to .env.local.
3. Run npm run dev.
4. Visit http://localhost:3000.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| NEXT_PUBLIC_SITE_URL | Yes in production | Canonical URL, sitemap, robots, and metadata base. Example: https://team-sheriya.vercel.app |
| NEXT_PUBLIC_SUPABASE_URL | For contact submissions | Supabase project URL |
| SUPABASE_SERVICE_ROLE_KEY | For contact submissions | Server-only key used by the enquiry API. Never expose it in client code. |

## Vercel deployment

1. Import the GitHub repository into Vercel.
2. Set Root Directory to team-sheriya if importing from the parent repository.
3. Add the three variables above in Project Settings > Environment Variables.
4. Use the default deployment settings:
   - Install command: npm ci
   - Build command: npm run build
   - Output directory: leave blank; Next.js handles it.
5. Add your production domain, update NEXT_PUBLIC_SITE_URL to its HTTPS URL, then redeploy.

Vercel enforces HTTPS for Vercel and correctly configured custom domains.

## SEO checklist after deployment

- Submit https://YOUR_DOMAIN/sitemap.xml in Google Search Console.
- Confirm https://YOUR_DOMAIN/robots.txt loads and allows public pages.
- Use Search Console URL Inspection on the homepage and request indexing after a successful deployment.
- Check social previews using /opengraph-image.
- Add only truthful business details, client quotes, reviews, and claims that you can substantiate.
- Build backlinks ethically: claim relevant business profiles, publish useful case studies, and earn mentions from real partners or clients. Do not buy links or use automated link schemes.

## Compliance notes

The included privacy, cookie, terms, and refund pages are a starting point. Have a qualified lawyer review them for your legal entity, services, location, and applicable laws. Update them before launch if you add analytics, advertising pixels, payments, embeds, or new data processors.
