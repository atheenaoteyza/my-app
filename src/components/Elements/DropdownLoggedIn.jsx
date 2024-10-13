import { useNavigate } from "react-router-dom";
export const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate();
  const Logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
    navigate("/Login");
    setDropdown(false);
  };
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
              <button
                onClick={() => setDropdown(false)}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setDropdown(false)}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => setDropdown(false)}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </button>
            </li>
            <li>
              <button
                onClick={Logout}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
