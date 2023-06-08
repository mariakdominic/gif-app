import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import App from "../src/App";

test("render app component", async () => {
  renderWithProviders(<App />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
