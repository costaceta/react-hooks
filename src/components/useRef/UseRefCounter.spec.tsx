import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UseRefCounter from "./UseRefCounter";

/*
    Testes unitários para o componente UseRefCounter

    - Initial Render Test: Verifies that all component elements are rendered correctly with their initial states.
    - Re-render Count Test: Checks if the re-render count updates correctly when clicking the "Forçar Re-renderização" button.
    - useRef Counter Persistence Test: Ensures that the useRef counter value is maintained between re-renders by:
        - Spying on console.log calls
        - Incrementing the counter twice
        - Forcing a re-render
        - Verifying the counter values through the console.log calls
*/


describe("UseRefCounter component", () => {
    it("should render correctly", () => {
        render(<UseRefCounter />);

        expect(screen.getByText("Contador sem Re-renderização")).toBeInTheDocument();
        expect(screen.getByText("O contador atual está armazenado em useRef.")).toBeInTheDocument();
        expect(screen.getByText("Incrementar")).toBeInTheDocument();
        expect(screen.getByText("Forçar Re-renderização")).toBeInTheDocument();
        expect(screen.getByText("Quantidade de re-renderizações: 0")).toBeInTheDocument();
    });

    it("should update re-render count when clicking re-render button", () => {
        render(<UseRefCounter />);

        const reRenderButton = screen.getByText("Forçar Re-renderização");

        fireEvent.click(reRenderButton);
        expect(screen.getByText("Quantidade de re-renderizações: 1")).toBeInTheDocument();

        fireEvent.click(reRenderButton);
        expect(screen.getByText("Quantidade de re-renderizações: 2")).toBeInTheDocument();
    });

    it("should maintain useRef counter value between re-renders", () => {
        const consoleSpy = vi.spyOn(console, "log");
        render(<UseRefCounter />);

        const incrementButton = screen.getByText("Incrementar");
        const reRenderButton = screen.getByText("Forçar Re-renderização");

        // Increment counter twice
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);

        // Force re-render
        fireEvent.click(reRenderButton);

        // Check if counter value was maintained after re-render
        expect(consoleSpy).toHaveBeenCalledWith("Valor atual do contador:", 1);
        expect(consoleSpy).toHaveBeenCalledWith("Valor atual do contador:", 2);

        consoleSpy.mockRestore();
    });
});