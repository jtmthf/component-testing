import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig(
  mergeConfig(
    viteConfig,
    defineConfig({
      plugins: [
        storybookTest({
          storybookScript: "pnpm storybook --ci",
        }),
      ],
      test: {
        setupFiles: ["vitest-browser-react", "./.storybook/vitest.setup.ts"],
        include: ["src/**/*.{spec,stories}.{ts,tsx}"],
        includeSource: ["src/**/*.{ts,tsx}"],
        browser: {
          enabled: true,
          provider: "playwright",
          name: "chromium",
          headless: true,
        },
      },
    })
  )
);
