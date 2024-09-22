export const FilterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return { ...state, productList: payload.products };
    case "NECKLACE_ONLY":
      return { ...state, necklaceOnly: payload.necklaceOnly };
    case "HAT_ONLY":
      return { ...state, hatOnly: payload.hatOnly };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "UPDATE_BACKGROUND":
      return { ...state, backgroundArray: payload.backgroundArray };
    case "CLEAR_FILTER":
      return {
        ...state,
        sortBy: null,
        backgroundArray: [],
        necklaceOnly: false,
        hatOnly: false,
      };
    default:
      return state; // Ensures the current state is returned for unknown action types
  }
};
