import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use "/fpsk-website/" for GitHub Pages build, "/" for local development
  const base = command === "build" ? "/fpsk-website/" : "/";
  
  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
