/// <reference types="@vitest/browser/providers/playwright" />

import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@vitest/browser/context";
import { expect, test } from "vitest";
import App from "./App";

test("button click updates count", async () => {
  render(<App />);

  const button = screen.getByRole("button");

  await act(async () => {
    await userEvent.click(button);
  });

  expect(button).toHaveTextContent("count is 1");
});
