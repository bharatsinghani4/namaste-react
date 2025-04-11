import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search functionality Test Cases", () => {
  it("should search restaurant list for pizza text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const allRestaurants = screen.getAllByTestId("res-card");
    expect(allRestaurants.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, {
      target: {
        value: "pizza",
      },
    });
    fireEvent.click(searchBtn);

    const searchResults = screen.getAllByTestId("res-card");
    expect(searchResults.length).toBe(5);
  });

  it("should filter top rated restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const allRestaurants = screen.getAllByTestId("res-card");
    expect(allRestaurants.length).toBe(20);

    const topRatedRestaurantsBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(topRatedRestaurantsBtn);

    const filteredRestaurants = screen.getAllByTestId("res-card");

    expect(filteredRestaurants.length).toBe(1);
  });
});
