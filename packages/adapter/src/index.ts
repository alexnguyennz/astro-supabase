import type { AstroConfig, AstroIntegration } from 'astro';

export default function supabase(): AstroIntegration {
  return {
    name: "astro-supabase",
    hooks: {
    },
  };
}

