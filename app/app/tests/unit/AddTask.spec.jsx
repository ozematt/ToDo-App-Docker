import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import React from "react";

import { App } from "../../ui/components/App";
import { ShowNewTaskProvider } from "../../utils/contextAPI";

describe("Button find ", () => {
  test("Updates value on new task input", async () => {
    render(
      <ShowNewTaskProvider>
        <App />
      </ShowNewTaskProvider>
    );

    const input = screen.getByText("ToDo-App:");

    expect(input).toBeInTheDocument();
  });
});
