import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import Header from "../components/header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("it should render header component with a login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const loginButton = screen.getByRole("button",{name:"Login"})
// const loginButton = screen.getByText("Login")
  expect(loginButton).toBeInTheDocument()
});

it("it should render header component with a cart item ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const cartItem = screen.getByText(/Cart/);
  // const loginButton = screen.getByText("Login")
  expect(cartItem).toBeInTheDocument();
});

it("it should change login button to logout onclick", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  // const loginButton = screen.getByText("Login")
  expect(logoutButton).toBeInTheDocument();
});