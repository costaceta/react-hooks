import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TasksDispatchContext } from "../../../contexts/TasksContext";
import { Task as TaskType } from "../../../store";
import Task from "./Task";

import userEvent from "@testing-library/user-event";

describe("Task component", () => {
  const mockTask: TaskType = {
    id: 1,
    text: "Tarefa 1",
    done: false,
  };

  const mockDispatch = vi.fn();

  it("Should render task", () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <Task task={mockTask} />
      </TasksDispatchContext.Provider>
    );

    const taskText = screen.getByText("Tarefa 1");
    const editButton = screen.getByRole("button", { name: "Editar" });
    const removeButton = screen.getByRole("button", { name: "Remover" });

    expect(taskText).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  it("Should show save button when editing", () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <Task task={mockTask} />
      </TasksDispatchContext.Provider>
    );

    const editButton = screen.getByRole("button", { name: "Editar" });
    const saveButton = screen.queryByRole("button", { name: "Salvar" });

    expect(saveButton).not.toBeInTheDocument();

    fireEvent.click(editButton);

    const visibleSaveButton = screen.getByRole("button", {
      name: "Salvar",
    });

    expect(visibleSaveButton).toBeInTheDocument();
  });

  it("Should update the text when editing", async () => {
    const user = userEvent.setup();

    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <Task task={mockTask} />
      </TasksDispatchContext.Provider>
    );

    const editButton = screen.getByRole("button", { name: "Editar" });

    fireEvent.click(editButton);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("Tarefa 1");

    await user.clear(input);
    await user.type(input, "Texto atualizado");

    expect(input).toHaveValue("Texto atualizado");
  });

  it("Deve chamar a função removeTask ao clicar no botão 'Remover'", () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <Task task={mockTask} />
      </TasksDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText("Remover"));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
