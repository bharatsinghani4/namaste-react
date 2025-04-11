import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import useOnlineStatus from "../../utils/useOnlineStatus";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body component Test Cases", () => {
  it("should search restaurant list for pizza text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
          <Body />
        </BrowserRouter>
      )
    );

    const { result } = renderHook(useOnlineStatus);

    expect(result.current).toBe(true);

    fireEvent.offline(window);

    expect(result.current).toBe(false);

    fireEvent.online(window);

    expect(result.current).toBe(true);
  });
});
