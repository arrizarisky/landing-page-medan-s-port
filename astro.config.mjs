import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://medan-sports-area.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
