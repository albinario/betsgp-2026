This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**Speedway Fantasy** lets users manage picks for the Speedway Grand Prix (SGP).

## Requirements

- **Node.js** 24+
- **Bun** (package manager and runtime)

## Tech Stack & Setup

The app is built with:

| Layer         | Service                          | Purpose                                                      |
| ------------- | -------------------------------- | ------------------------------------------------------------ |
| **Framework** | [Next.js 16](https://nextjs.org) | React app with App Router, API routes, and server components |
| **Auth**      | [Auth0](https://auth0.com)       | Login, logout, and role-based access control (RBAC)          |
| **Hosting**   | [Vercel](https://vercel.com)     | Deployment and serverless functions                          |
| **Database**  | [Neon](https://neon.tech)        | Serverless PostgreSQL via Kysely                             |
| **Email**     | [Resend](https://resend.com)     | Transactional email delivery                                 |

- **Next.js** runs the frontend, API routes (`/api/*`), and server-side rendering.
- **Auth0** handles authentication and exposes roles via custom claims for admin access.
- **Vercel** hosts the app and provides env vars (`VERCEL_ENV`, `VERCEL_URL`, etc.).
- **Neon** is the Postgres database; connect via `DATABASE_URL` in env.
- **Resend** is used for sending emails; configure with `RESEND_API_KEY`.

## Environment Variables

| Variable              | Purpose                                  |
| --------------------- | ---------------------------------------- |
| `APP_BASE_URL`        | Base URL (used for Auth0 callbacks)      |
| `AUTH0_DOMAIN`        | Auth0 tenant domain                      |
| `AUTH0_CLIENT_ID`     | Auth0 application client ID              |
| `AUTH0_CLIENT_SECRET` | Auth0 application secret                 |
| `AUTH0_SECRET`        | 32-byte hex for session encryption       |
| `DATABASE_URL`        | Neon Postgres connection string          |
| `RESEND_API_KEY`      | Resend API key (for transactional email) |

Copy `.env.example` to `.env.local` and fill in the values.

## Environments & Deployments

| Environment    | Where                  | `APP_BASE_URL`                       | `VERCEL_ENV` |
| -------------- | ---------------------- | ------------------------------------ | ------------ |
| **Local**      | Your machine           | `http://localhost:3000`              | —            |
| **Preview**    | Vercel (PRs, branches) | `https://speedwayfantasy.vercel.app` | `preview`    |
| **Production** | Vercel (main branch)   | `https://speedwayfantasy.com`        | `production` |

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

## Database

Regenerate Kysely types from the schema (requires `DATABASE_URL` in `.env.local`):

```bash
bun run db:types
```

Outputs to `src/types/db.ts`.

## Contributing

Code changes require review from `@albinario` (see `.github/CODEOWNERS`).
