import { expect, test } from "vitest";
import { page } from "@vitest/browser/context";
import App from "./App";

test("button click updates count", async () => {
  const screen = page.render(<App />);

  await screen.getByRole("button").click();

  await expect
    .element(screen.getByRole("button"))
    .toHaveTextContent("count is 1");
});
