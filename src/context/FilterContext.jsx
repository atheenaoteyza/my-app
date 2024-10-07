import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers";

const filterInitialState = {
  productList: [],
  sortBy: null,
  backgroundArray: [],
  necklaceOnly: false,
  hatOnly: false,
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
    return state.necklaceOnly
      ? products.filter((product) => product.necklace === true)
      : products;
  }

  function hat(products) {
    return state.hatOnly
      ? products.filter((product) => product.hat === true)
      : products;
  }

  function sort(products) {
    if (state.sortBy === "lowToHigh") {
      products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "highToLow") {
      products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }

  function filterWithColor(products) {
    if (state.backgroundArray.length > 0) {
      return products.filter((product) =>
        state.backgroundArray
          .map((color) => color.toLowerCase())
          .includes(product.background.toLowerCase())
      );
    }
    return products;
  }

  const filteredProductList = hat(
    filterWithColor(sort(necklace(state.productList)))
  );

  const value = {
    state,
    dispatch,
    products: filteredProductList,
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
