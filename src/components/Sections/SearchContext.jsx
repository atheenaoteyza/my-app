// SearchContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context with default values
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearch = () => useContext(SearchContext);
