import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TasksContext } from "../../../contexts/TasksContext";
import TaskList from "./TaskList";
import { Task as TaskType } from "../../../store";

describe("TaskList component", () => {
  const mockTasks: TaskType[] = [
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

    expect(screen.getByText("Nenhuma task encontrada!")).toBeInTheDocument();
  });

  it("Should render list of tasks", () => {
    render(
      <TasksContext.Provider value={mockTasks}>
        <TaskList />
      </TasksContext.Provider>
    );

    expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
  });

  it("Should render tasks with proper list structure", () => {
    render(
      <TasksContext.Provider value={mockTasks}>
        <TaskList />
      </TasksContext.Provider>
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
