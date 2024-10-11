import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should  render the body componennt", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSerach = screen.getAllByTestId("resCard");
  expect(cardsBeforeSerach.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "dada" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = await screen.findAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it('shold filter top rated restaurant', async () => {
   await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restuarants",
  });
  fireEvent.click(topRatedBtn)
  const cardsAfterFilter = screen.getAllByTestId("resCard")
  expect(cardsAfterFilter.length).toBe(7)
});

