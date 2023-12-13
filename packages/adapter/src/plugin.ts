import type { DevToolbarApp } from "astro";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { SupabaseConfig } from "./index";

let supabase: SupabaseClient | null;

/* Get Supabase config from client */
if (import.meta.hot) {
  import.meta.hot.on("astro-supabase:config", async (data: SupabaseConfig) => {
    const { supabaseUrl, supabaseKey } = data;
    supabase = createClient(supabaseUrl, supabaseKey);
  });
}

export default {
  id: "astro-supabase",
  name: "Astro Supabase",
  icon: "astro:logo",
  init(canvas, eventTarget) {
    eventTarget.addEventListener("plugin-toggled", async (event) => {});
  },
} satisfies DevToolbarApp;
