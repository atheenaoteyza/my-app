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
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <SearchProvider>
            <ScrollToTop />
            <ToastContainer />
            <App />
          </SearchProvider>
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
