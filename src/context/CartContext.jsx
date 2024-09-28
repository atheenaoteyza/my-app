import { useContext, createContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
const initialCartContext = {
  cartArray: [],
  price: 0,
};

const CartContext = createContext(initialCartContext);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialCartContext);

  function addToCart(product) {
    const updatedList = state.cartArray.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: updatedList,
      },
    });
  }
  const newArray = state.cartArray;
  const value = {
    state,
    dispatch,
    newArray,
    addToCart,
    initialCartContext,
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
