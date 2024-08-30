import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-10 mr-3" alt="B1t$nap Logo" />
            <span className="self-center text-2xl text-gray-700 font-semibold whitespace-nowrap dark:text-white">
              B1t$nap
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              className="bi bi-gear-wide-connected cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
              onClick={() => setDarkMode(!darkMode)}
            ></span>
            <span className="bi bi-search cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
            <Link to="/cart">
              <span className="bi bi-cart-fill cursor-pointer text-xl text-gray-700 dark:text-white mr-5 relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span className="bi bi-person-circle cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
