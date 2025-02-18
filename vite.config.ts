import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://stefanpython.github.io/asociatia-lsag",
  plugins: [react()],
});
