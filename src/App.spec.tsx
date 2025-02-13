import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "./App";

test("button click updates count", async () => {
  const screen = render(<App />);

  await screen.getByRole("button").click();

  await expect
    .element(screen.getByRole("button"))
    .toHaveTextContent("count is 1");
});
