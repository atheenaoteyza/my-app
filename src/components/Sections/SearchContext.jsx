/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
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

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children are required
};

// Custom hook to use the search context
export const useSearch = () => useContext(SearchContext);
