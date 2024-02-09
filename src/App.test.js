import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/dom";
import App from "./App";

test("renders app", () => {
  render(<App />);
  const headElement = screen.getByText(/NY Times Articles/i);
  expect(headElement).toBeInTheDocument();
});
