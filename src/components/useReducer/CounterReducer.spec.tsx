import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import CounterReducer from "./CounterReducer";

import * as actions from "../../store/actions";

describe("CounterReducer component", () => {
  beforeEach(() => {
    vi.spyOn(actions, "increment");
    vi.spyOn(actions, "decrement");
    vi.spyOn(actions, "reset");
    vi.spyOn(actions, "increment10");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Should render counter with initial value 0", () => {
    render(<CounterReducer />);

    const counter = screen.getByRole("heading", { name: "Counter: 0" });

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("Counter: 0");
  });

  it("Should render buttons", () => {
    render(<CounterReducer />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    const increment10Button = screen.getByRole("button", {
      name: "Increment 10",
    });
    const resetButton = screen.getByRole("button", { name: "Reset" });

    expect(incrementButton).toBeInTheDocument();
    expect(incrementButton).toHaveTextContent("Increment");

    expect(decrementButton).toBeInTheDocument();
    expect(decrementButton).toHaveTextContent("Decrement");

    expect(increment10Button).toBeInTheDocument();
    expect(increment10Button).toHaveTextContent("Increment 10");

    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toHaveTextContent("Reset");
  });

  it("Should increment counter when clicked", () => {
    render(<CounterReducer />);

    const counter = screen.getByRole("heading", { name: "Counter: 0" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    fireEvent.click(incrementButton);

    expect(counter).toHaveTextContent("Counter: 1");
  });

  it("Should decrement counter when clicked", () => {
    render(<CounterReducer />);

    const counter = screen.getByRole("heading", { name: "Counter: 0" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    fireEvent.click(decrementButton);

    expect(counter).toHaveTextContent("Counter: -1");
  });

  it("Should increment 10 counter when clicked", () => {
    render(<CounterReducer />);

    const counter = screen.getByRole("heading", { name: "Counter: 0" });
    const increment10Button = screen.getByRole("button", {
      name: "Increment 10",
    });

    fireEvent.click(increment10Button);

    expect(counter).toHaveTextContent("Counter: 10");
  });

  it("Should reset counter when clicked", () => {
    render(<CounterReducer />);

    const counter = screen.getByRole("heading", { name: "Counter: 0" });
    const resetButton = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(resetButton);

    expect(counter).toHaveTextContent("Counter: 0");
  });

  it("Should call dispatch actions when buttons clicked", () => {
    render(<CounterReducer />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    const increment10Button = screen.getByRole("button", {
      name: "Increment 10",
    });
    const resetButton = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(incrementButton);
    expect(actions.increment).toHaveBeenCalledTimes(1);

    fireEvent.click(decrementButton);
    expect(actions.decrement).toHaveBeenCalledTimes(1);

    fireEvent.click(increment10Button);
    expect(actions.increment10).toHaveBeenCalledTimes(1);

    fireEvent.click(resetButton);
    expect(actions.reset).toHaveBeenCalledTimes(1);
  });
});
