import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useState } from "react";
import { useCart } from "../../../context";
import { Link } from "react-router-dom";

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  const { newArray } = useCart();
  return (
    <>
      <section className=" antialiased">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    My Cart
                  </h2>
                  {newArray.map((product) => (
                    <CartCard product={product}></CartCard>
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Cart Summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    {newArray.map((product) => (
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          {product.name}
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          {product.price.toFixed(3)} ETH
                        </dd>
                      </dl>
                    ))}
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {newArray
                        .map((product) => product.price)
                        .reduce((accum, currentV) => accum + currentV, 0)
                        .toFixed(3)}{" "}
                      ETH
                    </dd>
                  </dl>
                </div>

                <button
                  onClick={() => setCheckout(true)}
                  className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400"></span>
                  <Link
                    to="/products"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {checkout && <Checkout setCheckout={setCheckout}></Checkout>}
    </>
  );
};
