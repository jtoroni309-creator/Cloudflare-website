# Toroni & Company Website

Professional B2B website for Toroni & Company — technology solutions, managed services, and strategic consulting.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (subtle animations)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Partnerships & VAR | `/partnerships` |
| Managed IT Services | `/managed-it-services` |
| Fractional CFO | `/fractional-cfo` |
| Technology Consulting | `/technology-consulting` |
| About | `/about` |
| Contact | `/contact` |

## Customization

- **Company info**: Edit `src/data/metadata.ts` (name, email, phone, address)
- **Partner logos**: Edit `src/data/partners.ts`
- **Service lists**: Edit `src/data/services.ts`
- **Navigation**: Edit `src/data/navigation.ts`
- **Team bios**: Edit the `team` array in `src/app/about/page.tsx`

## Stripe Integration

The Stripe payment API route is at `src/app/api/stripe/route.ts`. To enable:

1. `npm install stripe`
2. Set `STRIPE_SECRET_KEY` in your environment variables
3. Uncomment the Stripe code in the route file

## Deployment (Cloudflare Pages)

This site is configured for Cloudflare Pages deployment via the GitHub integration.

Build command: `npx next build`
Output directory: `.next`
