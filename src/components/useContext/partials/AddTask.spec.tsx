import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TasksDispatchContext } from "../../../contexts/TasksContext";
import AddTask from "./AddTask";

describe("AddTask component", () => {
  it("Should render input and button", () => {
    render(
      <TasksDispatchContext.Provider value={vi.fn()}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByPlaceholderText("Adicionar tarefa");
    const button = screen.getByRole("button", { name: "Adicionar" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should uptate the input when user types", () => {
    render(
      <TasksDispatchContext.Provider value={vi.fn()}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByPlaceholderText("Adicionar tarefa");
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "Tarefa 1" } });
    expect(input).toHaveValue("Tarefa 1");
  });

  it('Should clear the input when user clicks the "Adicionar" button', () => {
    render(
      <TasksDispatchContext.Provider value={vi.fn()}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByPlaceholderText("Adicionar tarefa");
    const button = screen.getByRole("button", { name: "Adicionar" });

    fireEvent.change(input, { target: { value: "Tarefa 1" } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });

  it("Should not add a task when input is empty", () => {
    render(
      <TasksDispatchContext.Provider value={vi.fn()}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const button = screen.getByRole("button", { name: "Adicionar" });
    fireEvent.click(button);

    expect(vi.fn()).not.toHaveBeenCalled();
  });

  it("Should call dispatch with the correct text", () => {
    const mockDispatch = vi.fn();

    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByPlaceholderText("Adicionar tarefa");
    const button = screen.getByRole("button", { name: "Adicionar" });

    fireEvent.change(input, { target: { value: "Tarefa 1" } });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD",
      payload: { id: 5, text: "Tarefa 1" },
    });
  });
});
