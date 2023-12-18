# astro-supabase

Astro integration for displaying Supabase tables in the Dev Toolbar.

## Prerequisites

Follow [this tutorial](https://docs.astro.build/en/guides/backend/supabase/) for setting up your Supabase credentials and client.

## Usage

### Installation

```sh
# Using NPM
npm install astro-supabase
# Using Yarn
yarn add astro-supabase
# Using PNPM
pnpm add astro-supabase
```

If you're using pnpm, you'll need to install `vite` separately:

```sh
pnpm add vite --save-dev
```

```diff
// astro.config.mjs
import { defineConfig } from "astro/config";
+ import { loadEnv } from "vite";
+ import supabase from "astro-supabase";

// Load your Supabase credentials from your .env file
const { SUPABASE_URL, SUPABASE_ANON_KEY } = loadEnv(
  "",
  process.cwd(),
  "SUPABASE",
);

export default defineConfig({
  integrations: [
    supabase({
      supabaseKey: SUPABASE_ANON_KEY,
      supabaseUrl: SUPABASE_URL,
    }),
  ],
});
```

### Run

Run your development server:

```sh
# Using NPM
npm run dev
# Using Yarn
yarn run dev
# Using PNPM
pnpm run dev
```

Click the Supabase tab in the dev toolbar to see your tables.