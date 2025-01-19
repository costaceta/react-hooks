import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TasksContext } from "../../../contexts/TasksContext";
import TaskList from "./TaskList";
import { Task as TypeTask } from "../../../store";

describe("TaksList component", () => {
  const mockTasks: TypeTask[] = [
    {
      id: 1,
      text: "Tarefa 1",
      done: false,
    },
    {
      id: 2,
      text: "Tarefa 2",
      done: true,
    },
  ];

  it("Should render empty state when there are no tasks", () => {
    render(
      <TasksContext.Provider value={[]}>
        <TaskList />
      </TasksContext.Provider>
    );

    const emptyState = screen.getByText("Nenhuma task encontrada!");
    expect(emptyState).toBeInTheDocument();
  });

  it("Should render list of tasks", () => {
    render(
      <TasksContext.Provider value={mockTasks}>
        <TaskList />
      </TasksContext.Provider>
    );

    const task1 = screen.getByText("Tarefa 1");
    const task2 = screen.getByText("Tarefa 2");

    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
  });

  it("Should render tasks with proper list structure", () => {
    render(
      <TasksContext.Provider value={mockTasks}>
        <TaskList />
      </TasksContext.Provider>
    );

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
  });
});
