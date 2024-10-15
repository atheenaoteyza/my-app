export const CartReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "ADD_TO_CART":
      // Add the item to the cart and update the total
      return {
        ...state,
        cartArray: [...state.cartArray, action.payload],
        total: state.total + action.payload.price,
      };

    case "REMOVE_TO_CART":
      const itemToRemove = state.cartArray.find(
        (item) => item.id === action.payload.id
      );
      // Check if the item exists before removing it
      if (!itemToRemove) return state; // If item doesn't exist, return current state

      return {
        ...state,
        cartArray: state.cartArray.filter(
          (item) => item.id !== action.payload.id
        ),
        total: state.total - itemToRemove.price * (itemToRemove.quantity || 1), // Ensure quantity is accounted for
      };

    case "UPDATE_CART":
      // Implement logic to update a cart item, if needed
      // For example, if the payload has the updated item and its new quantity
      const updatedCartArray = state.cartArray.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity } // Update item with new quantity
          : item
      );

      const newTotal = updatedCartArray.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );

      return {
        ...state,
        cartArray: updatedCartArray,
        total: newTotal,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartArray: [],
        total: 0, // Reset total when clearing cart
      };

    default:
      return state; // Ensures the current state is returned for unknown action types
  }
};
