import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tasks from "./Tasks";

describe("Tasks component", () => {
  it("Should render title", () => {
    render(<Tasks />);

    const title = screen.getByRole("heading", { name: "Lista de tarefas" });
    expect(title).toBeInTheDocument();
  });

  it("Should render the AddTask component", () => {
    render(<Tasks />);

    const addTask = screen.getByTestId("add-task");
    expect(addTask).toBeInTheDocument();
  });

  it("Should render the TaskList component", () => {
    render(<Tasks />);

    const taskList = screen.getByTestId("task-list");
    expect(taskList).toBeInTheDocument();
  });
});
