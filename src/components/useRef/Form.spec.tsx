import { describe, expect, it } from "vitest";
import Form from "./Form";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Form component", () => {
    it("Should render input and button", () => {
        render(<Form />);

        const title = screen.getByRole("heading", {
            name: "Digite seu nome"
        })
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");

        expect(title).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    it("Should focus input when button clicked", () => {
        render(<Form />);

        const button = screen.getByRole("button");
        const input = screen.getByRole("textbox");

        expect(input).not.toHaveFocus();

        fireEvent.click(button);

        expect(input).toHaveFocus();
    })
})