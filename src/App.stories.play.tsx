import { createTest } from "@storybook/react/experimental-playwright";
import { test as base, expect } from "@playwright/experimental-ct-react";

import stories from "./App.stories.portable";

const test = createTest(base);

test("should work", async ({ mount, page }) => {
  await mount(<stories.Default />);

  // click button
  await page.getByRole("button").click();

  // expect count to be 1
  await expect(page.getByRole("button")).toHaveText(/count is 1/);
});
