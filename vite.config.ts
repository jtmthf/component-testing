/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['vitest-browser-react'],
    includeSource: ['src/**/*.{ts,tsx}'], 
    browser: {
      enabled: true,
      provider: "playwright",
      name: "chromium",
    },
  },
  define: { 
    'import.meta.vitest': 'undefined', 
  }, 
});
