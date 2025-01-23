import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "./Form";

describe("Compontent Form", () => {
  it("Should render title, input and button", () => {
    render(<Form />);

    const title = screen.getByRole("heading", { name: "Digite seu nome" });
    expect(title).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Focus" });
    expect(button).toBeInTheDocument();
  });

  it("Should focus em click in button", () => {
    render(<Form />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Focus" });

    expect(input).not.toHaveFocus();

    fireEvent.click(button);

    expect(input).toHaveFocus();
  });
});
