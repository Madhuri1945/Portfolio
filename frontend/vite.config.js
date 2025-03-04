import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["swiper"],
  },
  build: {
    outDir: "dist", // Keep the default output directory for built files
    emptyOutDir: true, // Clean the output directory before building
  },
  publicDir: "public-assets", // Use a separate directory for static assets
  server: {
    port: 3000, // Optional: Customize the development server port
  },
});
