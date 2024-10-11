import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/header";
import Cart from "../components/Cart"
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </BrowserRouter>
      </Provider>
    )
  );
  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);
  const itemsTotal = screen.getAllByTestId("items");
  expect(itemsTotal.length).toBe(20);
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("items").length).toBe(21);

  fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}))
  expect(screen.getAllByTestId("items").length).toBe(20);
  expect(screen.getByText("Your Cart is Empty!!! Add items to Cart"));

});
