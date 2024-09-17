import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ScrollToTop } from "./components/index.jsx";
import { SearchProvider } from "./components/Sections/SearchContext.jsx";
import { FilterProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <FilterProvider>
        <SearchProvider>
          <ScrollToTop />
          <App />
        </SearchProvider>
      </FilterProvider>
    </Router>
  </StrictMode>
);
