import { test, expect } from "vitest";
import { render } from "vitest-browser-react";
import { composeStories } from "@storybook/react";

import * as stories from "./App.stories";

const { Default, DefaultPlay } = composeStories(stories);

test("button click updates count", async () => {
  const screen = render(<Default />);

  await screen.getByRole("button").click();

  await expect
    .element(screen.getByRole("button"))
    .toHaveTextContent("count is 1");
});

test("play", async () => {
  await DefaultPlay.run();
});
