import { Link } from "react-router-dom";
export const ProductCard = () => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/" className="relative">
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>
        <img
          className="rounded-t-lg w-full h-74"
          src="https://i.seadn.io/gcs/files/d71cacd006207e9b6e3c4e29bf7ede9d.png?auto=format&dpr=1&w=1000"
          alt="Nft image"
        />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Starlight Sport
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          aliquid, obcaecati doloribus nesciunt ullam, odit cumque veritatis
          eligendi illo ducimus ipsam incidunt hic? Deleniti quae modi error
          obcaecati nulla eius.
        </p>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            0.65 ETH
          </span>
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};
