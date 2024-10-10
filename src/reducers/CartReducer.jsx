export const CartReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartArray: [...state.cartArray, action.payload] };

    case "REMOVE_TO_CART":
      return {
        ...state,
        cartArray: state.cartArray.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "UPDATE_CART":
      return;

    case "CLEAR_CART":
      return;

    default:
      return state; // Ensures the current state is returned for unknown action types
  }
};
