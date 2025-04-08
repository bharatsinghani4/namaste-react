import { useDispatch, useSelector } from "react-redux";
import RestaurantItemsList from "./RestaurantItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="max-w-4xl my-10 mx-auto">
      <div className="mb-4 bg-white shadow-lg shadow-gray-200 rounded-md border border-gray-200">
        <h1 className="text-3xl font-bold flex items-center justify-between px-4 pt-4">
          <span>
            Cart({cartItems.length} {cartItems.length === 1 ? "Item" : "Items"})
          </span>
          {cartItems.length !== 0 && (
            <button
              type="button"
              className="px-4 py-1 bg-red-200 rounded-sm ml-2 cursor-pointer text-base"
              onClick={handleClearCart}
            >
              REMOVE ALL
            </button>
          )}
        </h1>
        <RestaurantItemsList
          items={cartItems}
          isCartPage
        />
      </div>
    </div>
  );
};

export default Cart;
