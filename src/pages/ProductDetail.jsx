import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("http://localhost:3000/products/10001");
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  return (
    <main>
      <section className="flex flex-col lg:flex-row dark:text-slate-100">
        <div className="m-3 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between py-2 px-2">
            <p className="font-normal text-gray-500 dark:text-gray-100">
              diamond
            </p>
            <Link
              to="/"
              className="text-gray-500 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:text-gray-100"
            >
              heart
            </Link>
          </div>
          <img
            className="rounded-b-lg w-full h-74 object-cover"
            src={product.image_url}
            alt="Nft image"
          />
        </div>
        <div className="m-3 px-5 py-2 w-full">
          <div className="text-gray-500 dark:text-gray-100 flex items-center justify-between ">
            <p className="">B1t Cat Gang (check)</p>
            <div className="flex gap-2">
              <p>deal</p>
              <p>share</p>
              <p>more</p>
            </div>
          </div>
          <h1 className="text-4xl font-bold py-2">B1t Cat Gang #10001</h1>
          <h2 className="text-xl">
            Owned by <span className="text-blue-400">DE15246</span>
          </h2>
        </div>
      </section>
    </main>
  );
};
