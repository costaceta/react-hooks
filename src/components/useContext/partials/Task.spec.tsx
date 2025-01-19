import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TasksDispatchContext } from "../../../contexts/TasksContext";
import { Task as TypeTask } from "../../../store";
import { userEvent } from "@testing-library/user-event";
import Task from "./Task";

describe("Taks component", () => {
  const mockTask: TypeTask = {
    id: 1,
    text: "Task 1",
    done: false,
  };

  const mockDispatch = vi.fn();

  it("Should render task", () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <Task task={mockTask} />
      </TasksDispatchContext.Provider>
    );

    const textText = screen.getByText("Task 1");
    const butonEdit = screen.getByRole("button", { name: "Editar" });
    const buttonRemove = screen.getByRole("button", { name: "Remover" });

    expect(textText).toBeInTheDocument();
    expect(butonEdit).toBeInTheDocument();
    expect(buttonRemove).toBeInTheDocument();
  });

  it("Should show save button when editing", () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <Task task={mockTask} />
      </TasksDispatchContext.Provider>
    );

    const editButton = screen.getByRole("button", { name: "Editar" });
    const saveButton = screen.queryByRole("button", { name: "Salvar" });

    expect(editButton).toBeInTheDocument();
    expect(saveButton).not.toBeInTheDocument();

    fireEvent.click(editButton);

    const visibleSaveButton = screen.getByRole("button", { name: "Salvar" });

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
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Task 1");

    await user.clear(input);
    await user.type(input, "Update text");

    expect(input).toHaveValue("Update text");
  });

  it("Shuld run removeTaks when remove task", () => {
    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <Task task={mockTask} />
      </TasksDispatchContext.Provider>
    );

    const removeButton = screen.getByRole("button", { name: "Remover" });

    fireEvent.click(removeButton);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
