<p align="center">
  <picture>
    <img src="./src/app/opengraph-image.png" alt="Fen Logo">
  </picture>

  <h3 align="center">Fen</h3>

  <p align="center">
    Email reimagined for modern workflows.
    <br />
    <a href="https://fen.email"><strong>Learn more »</strong></a>
    <br /><br />
    <a href="https://discord.gg/SFqtWQgxVM">Discord</a>
    ·
    <a href="https://fen.email">Website</a>
    ·
    <a href="https://github.com/fenemail/fenemail/issues">Issues</a>
    ·
    <a href="https://github.com/fenemail/fenemail/projects">Roadmap</a>
  </p>
</p>

## What is Fen

Fen makes email feel as intuitive as a modern messaging app.
Think **channels, intuitive threads, and quick actions** — all in a familiar interface. Privacy-focused and 100% open-source.

## Features

- **Threaded Conversations** – Organize emails like channels and threads for easier follow-ups.
- **Developer-Friendly** – Fully open-source. Inspect the code, contribute, or fork your own version.
- **Privacy-First** – Emails are never stored in Fen’s database. They stay in your inbox.
- **Unified Inbox** – Connect multiple Gmail accounts in one clean interface.
- **Slack-Like Workflow** – Navigate email with channels, threads, and quick actions.
- **Indie-Built & Transparent** – Public roadmap, Discord community, and frequent updates.
- **Fast & Simple** – No clutter, no bloat. Just email that works.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Drizzle ORM
- **Database**: PostgreSQL
- **Authentication**: Better Auth, Google OAuth

See [package.json](./package.json) for full details.

---

## Getting Started

### Prerequisites

You’ll need:

- [Node.js](https://nodejs.org/en/download) (>= 18)
- [pnpm](https://pnpm.io) (>= 10)
- [Docker](https://docs.docker.com/engine/install/) (>= 20)

### 1. Clone the repository

```bash
git clone https://github.com/fenemail/fenemail.git
cd fenemail
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Then edit `.env`:

- `DATABASE_URL`: Connection string to your PostgreSQL instance.
- `BETTER_AUTH_SECRET`: Generate with `openssl rand -hex 32`.

### 4. Start the database

```bash
pnpm docker:db:up
```

### 5. Run the dev server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Google OAuth Setup (Required for Gmail integration)

1. Go to [Google Cloud Console](https://console.cloud.google.com).
2. Create a project.
3. Enable APIs:
   - [People API](https://console.cloud.google.com/apis/library/people.googleapis.com)
   - [Gmail API](https://console.cloud.google.com/apis/library/gmail.googleapis.com)
4. Enable **OAuth2 API**.
5. Create OAuth 2.0 credentials (Web application).
6. Add redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-production-url/api/auth/callback/google`
7. Add to `.env`:

   ```env
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```

8. Add yourself as a test user:
   - Go to [Audience](https://console.cloud.google.com/auth/audience)
   - Under **Test users**, click **Add Users**
   - Add your email and click **Save**

---

## Database Setup

Fen uses PostgreSQL for storing data.

### 1. Start the Database

```bash
pnpm docker:db:up
```

This creates a database with:

- Name: `fenemail`
- Username: `postgres`
- Password: `postgres`
- Port: `5432`

### 2. Set Up Database Connection

Make sure your database connection string is in `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fenemail"
```

### 3. Database Commands

- **Set up database tables**:

  ```bash
  pnpm db:push
  ```

- **Create migration files** (after schema changes):

  ```bash
  pnpm db:generate
  ```

- **Apply migrations**:

  ```bash
  pnpm db:migrate
  ```

- **View database content**:

  ```bash
  pnpm db:studio
  ```

  > When you run `pnpm dev`, the studio command will run alongside the app.

---

## Contributing

See our [contribution guide](./CONTRIBUTING.md) for details.
