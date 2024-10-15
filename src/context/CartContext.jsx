import { useContext, createContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
const initialCartContext = {
  cartArray: [],
  total: 0,
};

const CartContext = createContext(initialCartContext);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialCartContext);

  function addToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  function removeToCart(product) {
    dispatch({
      type: "REMOVE_TO_CART",
      payload: product, // Send the product directly
    });
  }
  const newArray = state.cartArray;

  const value = {
    state,
    dispatch,
    newArray,
    addToCart,
    removeToCart,
    initialCartContext,
    total: state.total,
  };
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
