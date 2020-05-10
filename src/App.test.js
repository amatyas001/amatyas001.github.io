import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("App rendering", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeInTheDocument();
});
