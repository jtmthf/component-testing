import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "./App";

test("button click updates count", async () => {
  render(<App />);

  const button = screen.getByRole("button");

  await userEvent.click(button);

  expect(button).toHaveTextContent("count is 1");
});
