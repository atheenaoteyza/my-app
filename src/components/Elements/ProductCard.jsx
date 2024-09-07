import { Link } from "react-router-dom";
export const ProductCard = ({ product }) => {
  const { name, overview, id, image_url, price } = product;

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/Products/${id}`} className="relative">
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>

        <img
          className="rounded-t-lg w-full h-74"
          src={image_url}
          alt="Nft image"
        />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>

        <div
          className="flex items-center mt-2.5 text-xl p-0"
          style={{ marginBottom: 0 }}
        >
          <span className="font-bold text-gray-900 dark:text-white">
            {price} ETH
          </span>
        </div>
        <div className="flex items-center justify-between p-0">
          <p className="font-normal text-gray-500 dark:text-gray-100">
            Last sale: {price} ETH
          </p>
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
