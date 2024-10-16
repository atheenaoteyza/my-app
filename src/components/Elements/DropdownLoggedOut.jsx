import { Link } from "react-router-dom";
export const DropdownLoggedOut = ({ setDropdown }) => {
  return (
    <>
      <div className="absolute right-0 z-10 top-10 mr-5">
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <Link
                onClick={() => setDropdown(false)}
                to="/Products"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setDropdown(false)}
                to="/Login"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setDropdown(false)}
                to="/Register"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
