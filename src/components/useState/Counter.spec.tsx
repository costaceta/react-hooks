import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter component", () => {
    it("Should render counter with initial value 0", () => {
        render(<Counter />)

        const counterElement = screen.getByText("Counter 0");

        expect(counterElement).toHaveTextContent("Counter 0");
        expect(counterElement).toBeInTheDocument();
    })

    it("Should increment counter when clicked", () => {
        render(<Counter />)

        const counterElement = screen.getByText("Counter 0");

        fireEvent.click(counterElement);

        expect(counterElement).toHaveTextContent("Counter 1");
        expect(counterElement).toBeInTheDocument();
    })

    it("Should increment counter when clicked multiple times", () => {
        render(<Counter />)

        const counterElement = screen.getByText("Counter 0");

        fireEvent.click(counterElement);
        fireEvent.click(counterElement);
        fireEvent.click(counterElement);

        expect(counterElement).toHaveTextContent("Counter 3");
        expect(counterElement).toBeInTheDocument();
    })
})