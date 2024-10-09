import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ScrollToTop } from "./components/index.jsx";
import { SearchProvider } from "./components/Sections/SearchContext.jsx";
import { FilterProvider, CartProvider } from "./context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <FilterProvider>
            <SearchProvider>
              <ScrollToTop />
              <ToastContainer />
              <App />
            </SearchProvider>
          </FilterProvider>
        </CartProvider>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
