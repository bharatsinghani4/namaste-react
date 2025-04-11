import { screen, render, act, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenuMockData.json";
import appStore from "../../utils/appStore.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("Cart Flow Test Cases", () => {
  it("should load Restaurant Item Menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const category = screen.getByText("Recommended (13)");

    fireEvent.click(category);

    const menuItems = screen.getAllByTestId("menu-item");

    expect(menuItems.length).toBe(13);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });

    fireEvent.click(addBtns[0]);

    const cartWithItemText = screen.getByText("Cart(1)");

    expect(cartWithItemText).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    const cartWithItemText2 = screen.getByText("Cart(2)");

    expect(cartWithItemText2).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("menu-item");

    expect(cartItems.length).toBe(15);

    fireEvent.click(screen.getByRole("button", { name: "REMOVE ALL" }));

    expect(screen.getByText("Cart(0 Items)")).toBeInTheDocument();
  });
});
