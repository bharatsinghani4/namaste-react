import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMockData.json";
import "@testing-library/jest-dom";

describe("RestaurantCard Component Test Cases", () => {
  it("Should render Restaurant Card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const restaurantName = screen.getByText("Tossin Pizza");

    expect(restaurantName).toBeInTheDocument();
  });

  it("Should render Restaurant Card component with promoted label", () => {
    const TopRatedRestaurant = withPromotedLabel(RestaurantCard);

    render(<TopRatedRestaurant resData={MOCK_DATA} />);

    const restaurantName = screen.getByText("Tossin Pizza");

    expect(restaurantName).toBeInTheDocument();
  });
});
