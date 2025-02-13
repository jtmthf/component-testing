import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vite.config.ts",
    test: {
      name: "component",
      setupFiles: ["vitest-browser-react"],
      includeSource: ["src/**/*.{ts,tsx}"],
      browser: {
        enabled: true,
        provider: "playwright",
        headless: true,
        instances: [
          { browser: "chromium" },
          { browser: "firefox" },
          { browser: "webkit" },
        ],
      },
    },
  },
  {
    extends: "./vite.config.ts",
    plugins: [
      storybookTest({
        storybookScript: "pnpm storybook --ci",
      }),
    ],
    test: {
      name: "storybook",
      setupFiles: ["./.storybook/vitest.setup.ts"],
      browser: {
        enabled: true,
        provider: "playwright",
        headless: true,
        instances: [
          { browser: "chromium" },
          { browser: "firefox" },
          { browser: "webkit" },
        ],
      },
    },
  },
]);
