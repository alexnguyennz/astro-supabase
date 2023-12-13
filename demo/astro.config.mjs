import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import supabase from "astro-supabase";

const { SUPABASE_URL, SUPABASE_ANON_KEY } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    supabase({
      supabaseKey: SUPABASE_ANON_KEY,
      supabaseUrl: SUPABASE_URL,
    }),
  ],
});
