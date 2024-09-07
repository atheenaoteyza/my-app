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
        <div className="m-3 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
        <div className="m-3 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt
            doloremque magnam! Odit, ex voluptatum quidem esse nam ab assumenda,
            commodi cupiditate repudiandae provident inventore. Veritatis culpa
            aspernatur nulla adipisci!
          </p>
        </div>
      </section>
    </main>
  );
};
