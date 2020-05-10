import { render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Navigation from "./Navigation";

test("Navigation rendering", () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <Navigation />
    </Router>
  );
  expect(container.firstChild).toBeInTheDocument();
});
