export const FilterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return { ...state, productList: payload.products };
    case "NECKLACE_ONLY":
      return { ...state, necklaceOnly: payload.necklaceOnly };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "UPDATE_BACKGROUND":
      return { ...state, backgroundArray: payload.backgroundArray };
    default:
      return state; // Ensures the current state is returned for unknown action types
  }
};
