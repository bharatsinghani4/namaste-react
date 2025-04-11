import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load an input field with placeholder text as name inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input fields inside contact us component", () => {
    render(<Contact />);

    const allInputs = screen.getAllByRole("textbox");

    expect(allInputs.length).toBe(2);
  });
});
