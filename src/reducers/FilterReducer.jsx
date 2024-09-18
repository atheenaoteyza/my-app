export const FilterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return { productList: payload.products };
    case "NECKLACE_ONLY":
      return { ...state, necklaceOnly: payload.necklaceOnly };
  }
};
