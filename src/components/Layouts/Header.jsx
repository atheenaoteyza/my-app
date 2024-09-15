// Header.jsx
import Logo from "../../assets/logo.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearch } from "../Sections/SearchContext";
import { productData } from "../Data/data";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [searchSection, setSearchSection] = useState(false);
  const { search, setSearch } = useSearch(); // Use the context
  const [productName, setProductName] = useState([]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const test = async () => {
    const result = await productData();
    setProductName(result);
    console.log("result", result);
  };

  const handleClick = e => {
    e.preventDefault();
    setSearch(e.target.value);
    navigate(`/products?search=${encodeURIComponent(search)}`);
  };

  useEffect(() => {
    if (searchSection) test();
  }, [searchSection]);

  const navigate = useNavigate();

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
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
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
      {searchSection && (
        <div className="mx-auto max-w-screen-xl p-2 my-5">
          <form className="flex items-center">
            <div className="relative w-full">
              <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
              <input
                onChange={e => setSearch(e.target.value)}
                value={search}
                name="search"
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                autoComplete="off"
                required=""
              />
            </div>
            <button
              onClick={handleClick}
              className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            ></button>
          </form>
        </div>
      )}
    </header>
  );
};
