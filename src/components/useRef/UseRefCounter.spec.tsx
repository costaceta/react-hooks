import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import UseRefCounter from "./UseRefCounter";

describe("Compontent UseRefCounter", () => {
  it("Should render all elements", () => {
    render(<UseRefCounter />);

    const title = screen.getByText("Contador sem Re-renderização");
    const text1 = screen.getByText(
      "O contador atual está armazenado em useRef."
    );
    const buttonIncrement = screen.getByText("Incrementar");
    const buttonForceRender = screen.getByText("Forçar Re-renderização");
    const text2 = screen.getByText("Quantidade de re-renderizações: 0");

    expect(title).toBeInTheDocument();
    expect(text1).toBeInTheDocument();
    expect(buttonIncrement).toBeInTheDocument();
    expect(buttonForceRender).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it("should update re-render count when clicking re-render button", () => {
    render(<UseRefCounter />);

    const buttonForceRender = screen.getByText("Forçar Re-renderização");

    fireEvent.click(buttonForceRender);
    expect(
      screen.getByText("Quantidade de re-renderizações: 1")
    ).toBeInTheDocument();

    fireEvent.click(buttonForceRender);
    expect(
      screen.getByText("Quantidade de re-renderizações: 2")
    ).toBeInTheDocument();
  });

  it("Should maintain useRef counter value between re-renders", () => {
    const consoleSpy = vi.spyOn(console, "log");

    render(<UseRefCounter />);

    const incrementButton = screen.getByText("Incrementar");
    const buttonForceRender = screen.getByText("Forçar Re-renderização");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    fireEvent.click(buttonForceRender);

    expect(consoleSpy).toHaveBeenCalledWith("Valor atual do contador:", 1);
    expect(consoleSpy).toHaveBeenCalledWith("Valor atual do contador:", 2);

    consoleSpy.mockRestore();
  });
});
