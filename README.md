# Shubham Gupta Portfolio

Top-tier dark portfolio rebuilt with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, React Three Fiber, Radix UI, React Hook Form, Zod, Sonner, and Resend.

## Stack

- Next.js 15 App Router
- TypeScript strict mode
- Tailwind CSS v4 with CSS variables
- Framer Motion animations
- React Three Fiber / Three.js hero scene
- Radix UI Dialog primitive
- Lucide React icons
- React Hook Form + Zod contact form
- Resend-ready email API route
- Dynamic Open Graph image via `next/og`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Create `.env.local` to enable real email delivery:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
```

Without `RESEND_API_KEY`, the form runs in preview mode and returns success without sending an email.

## Project Structure

```text
app/                  App Router pages, metadata, API, OG, robots, sitemap
components/           Feature-based UI sections
components/ui/        Shared UI primitives
data/index.ts         Portfolio data, skills, projects, experience, socials
hooks/                Motion, mouse, and active-section hooks
lib/                  Shared utilities
public/images/        Optimized local visual assets
public/resume/        Resume PDF
```

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run format
```

## Deployment

Deploy directly to Vercel. The included `vercel.json` is ready for Next.js.
