import { test, expect } from "@playwright/experimental-ct-react";
import App from "./App";

test("should work", async ({ mount }) => {
  const component = await mount(<App />);

  // click button
  await component.getByRole("button").click();

  // expect count to be 1
  await expect(component.getByRole("button")).toHaveText(/count is 1/);
});
