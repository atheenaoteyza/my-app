import { Link } from "react-router-dom";
import { memo } from "react";
import { useCart } from "../../context";

const ProductCard = ({ product }) => {
  const { name, id, image_url, price } = product;
  const { addToCart, removeToCart, newArray } = useCart();

  const isInCart = (item) => item.id === id;
  const inCart = newArray.some(isInCart);

  const handleCartToggle = () => {
    if (inCart) {
      removeToCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/Products/${id}`} className="relative">
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>
        <img
          className="rounded-t-lg w-full h-74"
          src={image_url}
          alt={`Image of ${name}`}
          loading="lazy" // Lazy loading for better performance
        />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 text-xl">
          <span className="font-bold text-gray-900 dark:text-white">
            {price} ETH
          </span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="font-normal text-gray-500 dark:text-gray-100">
            Last sale: {price} ETH
          </p>
          <button
            onClick={handleCartToggle}
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              inCart
                ? "bg-red-700 hover:bg-red-800"
                : "bg-blue-700 hover:bg-blue-800"
            } focus:ring-4 focus:outline-none focus:ring-${
              inCart ? "red" : "blue"
            }-300`}
            aria-label={inCart ? "Remove from cart" : "Add to cart"}
          >
            {inCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(ProductCard);
