import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Static SPA build. Output in dist/ drag-drops straight into Netlify,
// or Netlify can build from this repo with `npm run build` + publish `dist`.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
