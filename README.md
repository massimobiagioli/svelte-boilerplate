# Svelte-Boilerplate

## Stack

- [SvelteKit](https://kit.svelte.dev/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

## Pre-requisites

- NodeJs
- A Supabase Account

## Environment variables

Duplicate the file `.env.example` and rename it to `.env`. Then, fill the variables with your own values.

This is the official link to the Supabase api keys documentation: [https://supabase.com/docs/guides/api/api-keys](https://supabase.com/docs/guides/api/api-keys)

## Prepare Supabase

### User

In order to use the authentication, you need to create a user with _email_ provider.

### Table _'device'_

| column_name | data_type                |
| ----------- | ------------------------ |
| id          | bigint                   |
| name        | character varying        |
| address     | character varying        |
| description | text                     |
| created_at  | timestamp with time zone |
| is_active   | boolean                  |
| owner       | uuid                     |

The file `supabase-dump/device.csv` contains some data to populate the table.
Replace the values of the column `owner` with your own values.

## Start local server

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Generate Supabase database types

```bash

# login to supabase
npm run supabase:login

# generate types
npm run supabase:generate:types
```

## Test

### Unit

```bash
npm run test:unit
```

### End-to-end

```bash
npm run test:e2e
```

## Code analysis, formatting and linting

### Format

```bash
npm run format
```

### Lint

```bash
npm run lint
```

### Check

```bash
npm run check
```

## Build for production

To create a production version of your app:

```bash
npm run build
```
