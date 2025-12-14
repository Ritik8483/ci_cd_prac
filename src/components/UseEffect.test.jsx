import { render, screen } from "@testing-library/react";
import UseEffect from "./UseEffect";
import "@testing-library/jest-dom";
import { describe, test } from "vitest";

describe("UseEffect Component", () => {
  test("renders Ritik paragraph", () => {
    render(<UseEffect />);
    expect(screen.getByText("Ritik")).toBeInTheDocument();
  });
});
