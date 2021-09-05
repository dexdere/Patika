import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Header";

test("Render App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("Render Header", () => {
  const div2 = document.createElement("div");
  ReactDOM.render(<Header />, div2);
});

test("Check Title", () => {
  render(<App />);
  expect(screen.getByText("Emoji Search"));
});

test("Check Emoji list", () => {
  render(<App />);
  const emoji = screen.getByTestId("emojies");
  expect(emoji.childNodes.length === 20);
});

test("Check Filter", () => {
  render(<App />);
  const input = document.getElementsByTagName("input");
  userEvent.type(input[0], "Sunglasses");
  expect(screen.getByText("Sunglasses"));
});

test("Check Click to copy emoji", () => {
  render(<App />);
  const clicked = screen.getByTestId("emojies");
  userEvent.click(clicked);
});
