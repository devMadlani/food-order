import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

describe("Contact Us page Test Case", () => {
  //"it" is an alias of "test"
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside my Contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside my Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load two input boxes inside my Contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
