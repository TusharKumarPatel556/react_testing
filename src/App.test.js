import { render, screen } from "@testing-library/react";
import App from "./App.js";

test("Test First React App case", () => {
  render(<App />);
  const text = screen.getByText(/First React test case/i);
  expect(text).toBeInTheDocument();
});

test("test image title ", () => {
  render(<App />);
  const title = screen.getByTitle(/AI generated img/i);
  expect(title).toBeInTheDocument();
});
