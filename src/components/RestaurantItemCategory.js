import RestaurantItemsList from "./RestaurantItemsList";

const RestaurantItemCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  const onClickHandler = () => setShowIndex();

  if (!itemCards || itemCards.length === 0) return null;

  return (
    <div className="mb-4 bg-white shadow-lg shadow-gray-200 rounded-md">
      <div onClick={onClickHandler}>
        <button
          type="button"
          className="flex items-center justify-between font-bold text-lg cursor-pointer w-full p-4"
        >
          <span>
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </button>
      </div>
      {showItems && <RestaurantItemsList items={itemCards} />}
    </div>
  );
};

export default RestaurantItemCategory;
