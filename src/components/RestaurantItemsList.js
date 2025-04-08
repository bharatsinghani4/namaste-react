import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurantItemsList = ({ items, isCartPage = false }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-4">
      {items.map((item) => {
        const {
          id,
          name,
          description,
          imageId,
          isVeg,
          price,
          defaultPrice,
          ratings,
          variantsV2,
        } = item?.card?.info;

        return (
          <div
            className={`py-4 border-t border-t-gray-200 flex justify-between w-full ${
              isCartPage && "items-center"
            }`}
            key={id}
          >
            <div className="flex-1 min-h-[176px]">
              {isVeg === 1 ? (
                <div className="flex items-center justify-center h-4 w-4 rounded border-2 border-green-600">
                  <span className="block h-2 w-2 bg-green-600 rounded-full"></span>
                </div>
              ) : (
                <div className="flex items-center justify-center h-4 w-4 rounded border-2 border-red-600">
                  <span className="block h-2 w-2 bg-red-600 rounded-full"></span>
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-700 my-2">{name}</h2>
              <h3 className="text-md font-bold text-black mb-1">
                ₹{(price || defaultPrice) / 100}
              </h3>
              {ratings?.aggregatedRating?.rating && (
                <h3 className="text-sm text-gray-700 my-3">
                  ⭐{" "}
                  <span className="font-bold text-green-500">
                    {ratings?.aggregatedRating?.rating}
                  </span>
                  <span>({ratings?.aggregatedRating?.ratingCountV2})</span>
                </h3>
              )}
              <h3 className="text-ms text-gray-500 line-clamp-2">
                {description}
              </h3>
            </div>
            <div className="relative object-contain ml-4 h-[144px] w-[156px] ">
              {imageId && (
                <img
                  className="h-[144px] w-[156px] rounded-lg overflow-hidden"
                  src={CDN_URL + imageId}
                  alt={name}
                />
              )}
              {!isCartPage && (
                <div className="absolute w-[75%] h-[56px] left-[50%] translate-x-[-50%] -bottom-9 text-center">
                  <button
                    type="button"
                    className="bg-white font-bold text-lg text-green-600 border border-gray-400 rounded-lg px-4 py-2 w-full leading-none cursor-pointer"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                  {variantsV2?.variantGroups?.length && (
                    <p className="text-gray-500 text-sm">Customisable</p>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantItemsList;
