import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ScrollToTop } from "./components/index.jsx";
import { SearchProvider } from "./components/Sections/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <SearchProvider>
        <ScrollToTop />
        <App />
      </SearchProvider>
    </Router>
  </StrictMode>
);
