This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech Stack & Setup

The app is built with:

| Layer         | Service                          | Purpose                                                      |
| ------------- | -------------------------------- | ------------------------------------------------------------ |
| **Framework** | [Next.js](https://nextjs.org) 16 | React app with App Router, API routes, and server components |
| **Auth**      | [Auth0](https://auth0.com)       | Login, logout, and role-based access control (RBAC)          |
| **Hosting**   | [Vercel](https://vercel.com)     | Deployment and serverless functions                          |
| **Database**  | [Neon](https://neon.tech)        | Serverless PostgreSQL via Kysely                             |
| **Email**     | [Resend](https://resend.com)     | Transactional email delivery                                 |

- **Next.js** runs the frontend, API routes (`/api/*`), and server-side rendering.
- **Auth0** handles authentication and exposes roles via custom claims for admin access.
- **Vercel** hosts the app and provides env vars (`VERCEL_ENV`, `VERCEL_URL`, etc.).
- **Neon** is the Postgres database; connect via `DATABASE_URL` in env.
- **Resend** is used for sending emails; configure with `RESEND_API_KEY`.

## Environments & Deployments

| Environment    | Where                  | `APP_BASE_URL`                   | `VERCEL_ENV` |
| -------------- | ---------------------- | -------------------------------- | ------------ |
| **Local**      | Your machine           | `http://localhost:3000`          | —            |
| **Preview**    | Vercel (PRs, branches) | `https://sgp-fantasy.vercel.app` | `preview`    |
| **Production** | Vercel (main branch)   | `https://speedwayfantasy.com`    | `production` |

- **Local**: Run `bun dev`. Uses `.env.local` for secrets.
- **Preview**: Automatic per push/PR. Use Vercel project env vars; add preview URLs to Auth0 allowed callbacks if needed.
- **Production**: Deploys from `main`. Set `APP_BASE_URL` in Vercel to your production domain.

Auth0 needs the correct callback/logout URLs for each env. Add them in Auth0 → Applications → Your app → Settings.

## Getting Started

First, install dependencies and run the development server with Bun:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Auth0

1. Create an Auth0 Regular Web Application.
2. Configure the following URLs in Auth0:
   - Allowed Callback URLs: `http://localhost:3000/auth/callback`
   - Allowed Logout URLs: `http://localhost:3000`
3. Create a `.env.local` file with:

```bash
APP_BASE_URL=http://localhost:3000
AUTH0_DOMAIN=YOUR_DOMAIN
AUTH0_CLIENT_ID=YOUR_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_CLIENT_SECRET
AUTH0_SECRET=your-random-32-byte-hex
RESEND_API_KEY=some-key
```
