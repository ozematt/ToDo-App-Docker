import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { AddTask } from "../../ui/components/AddTask";
import userEvent from "@testing-library/user-event";
import React from "react";
import { v4 as uuidv4 } from "uuid";

describe("<Input />", () => {
  test("Updates value on new task input", async () => {
    render(<AddTask />);
    const input = screen.getByRole("textbox", { name: "Task name" });
    const idVariables = "test-" + uuidv4();
    await userEvent.type(input, idVariables);
    await userEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(screen.getByText(idVariables)).toBeInTheDocument();
  });
});
