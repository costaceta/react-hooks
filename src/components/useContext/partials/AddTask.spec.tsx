import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AddTask from "./AddTask";
import { TasksDispatchContext } from "../../../contexts/TasksContext";

describe("Task component", () => {
  it("Should render input and button", () => {
    const mockDispatch = vi.fn();

    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should uptate the input when user types", () => {
    const mockDispatch = vi.fn();

    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "Task 1" } });

    expect(input).toHaveValue("Task 1");
  });

  it('Should clear the input when user clicks the "Adicionar" button', () => {
    const mockDispatch = vi.fn();

    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });

  it("Should not add a task when input is empty", () => {
    const mockDispatch = vi.fn();

    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it("Should call dispatch with the correct text", () => {
    const mockDispatch = vi.fn();

    render(
      <TasksDispatchContext.Provider value={mockDispatch}>
        <AddTask />
      </TasksDispatchContext.Provider>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(button);

    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD",
      payload: { id: 5, text: "Task 1" },
    });
  });
});
