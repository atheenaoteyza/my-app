// ProductList.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";

import ProductCard from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";
import { useSearch } from "../../components/Sections/SearchContext";
import { useFilter } from "../../context";
import { useLocation } from "react-router-dom";

export const ProductList = () => {
  const { products, initialProductList } = useFilter();
  const [filterBar, setFilterBar] = useState(false);
  const { search } = useSearch();
  const location = useLocation();
  const { dispatch } = useFilter();

  // Loading state
  const [loading, setLoading] = useState(true);

  // Memoized filtering logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      Object.keys(product).some((key) =>
        product[key].toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [products, search]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        initialProductList(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };
    fetchProducts();
  }, []);

  // Fetch products once on mount

  // Clear filters on location change
  useEffect(() => {
    dispatch({ type: "CLEAR_FILTER" });
  }, [location, dispatch]);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All Cattos ({filteredProducts.length})
          </span>
          <span>
            <button
              onClick={() => setFilterBar(!filterBar)}
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        {/* Show loading indicator while products are being fetched */}
        {loading ? (
          <div className="text-center">Loading products...</div>
        ) : (
          <div className="flex flex-wrap justify-center lg:flex-row">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      {filterBar && <FilterBar setFilterBar={setFilterBar} />}
    </main>
  );
};
