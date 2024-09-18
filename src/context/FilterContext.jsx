import { Children, createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers";

const filterInitialState = {
  productList: [],
  necklaceOnly: true,
};

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  function necklace(products) {
    return state.necklaceOnly === true
      ? products.filter((product) => product.necklace === true)
      : products;
  }

  const filteredProductList = necklace(state.productList);

  const value = {
    state,
    dispatch,
    productList: filteredProductList,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
