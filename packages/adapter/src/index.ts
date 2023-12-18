import type { AstroIntegration } from "astro";

export interface SupabaseConfig {
  supabaseUrl: string;
  supabaseKey: string;
}

export default function supabaseIntegration({
  supabaseUrl,
  supabaseKey,
}: SupabaseConfig): AstroIntegration {
  return {
    name: "astro-supabase",
    hooks: {
      "astro:config:setup": ({ addDevToolbarApp }) => {
        addDevToolbarApp("astro-supabase/plugin");
      },
      "astro:server:setup": ({ server }) => {
        server.ws.on("astro-dev-toolbar:astro-supabase:initialized", () => {
          server.ws.send("astro-supabase:config", {
            supabaseUrl,
            supabaseKey,
          });
        });
      },
    },
  };
}
