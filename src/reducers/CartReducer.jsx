export const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartArray: payload.product };

    case "REMOVE_TO_CART":
      return;

    case "UPDATE_CART":
      return;

    case "CLEAR_CART":
      return;

    default:
      return state; // Ensures the current state is returned for unknown action types
  }
};
