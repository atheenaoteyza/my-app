import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductDetail = () => {
  const [product, setProduct] = useState(null); // Use null for initial state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("http://localhost:3000/products/10001");
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product data available.</p>;

  return (
    <main>
      <section className="flex flex-col lg:flex-row dark:text-slate-100">
        {/* Product Details Container */}
        <div className="lg:order-2 m-3 px-5 py-2 w-full">
          <section>
            <div className="text-gray-700 dark:text-gray-100 flex items-center justify-between">
              <p>{product.name || "Product Name"}</p>
              <div className="flex gap-2">
                <p>deal</p>
                <p>share</p>
                <p>more</p>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold py-2">
                {product.name || "Product Title"}
              </h1>
              <h2 className="text-xl">
                Owned by{" "}
                <span className="text-blue-400">
                  {product.owner || "Owner"}
                </span>
              </h2>
            </div>
          </section>
          {/* Product Details extension */}
          <section className="hidden lg:flex gap-3 py-5">
            <h3>{product.views || "views"}</h3>
            <h3>{product.favorites || "favorites"}</h3>
            <h3>{product.pfp || "PFP"}</h3>
          </section>
          <section className="hidden lg:flex lg:flex-col">
            <div id="accordion-collapse" data-accordion="collapse">
              <div className="flex flex-col w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-200 gap-3">
                <p className="dark:text-gray-400">Best Offer</p>
                <p className="dark:text-gray-400">
                  <span className="text-2xl font-bold dark:text-gray-200">
                    0.025 WETH{" "}
                  </span>
                  $467.40
                </p>
                <div className="flex gap-2">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/5">
                    Add to cart
                  </button>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/4">
                    Make offer
                  </button>
                </div>
              </div>

              <h2 id="accordion-collapse-heading-2" className="py-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Price History</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border  border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-700 dark:text-gray-200">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-700 dark:text-gray-200">
                    Check out the{" "}
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Figma design system
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>Listings</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-700 dark:text-gray-200">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-200">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-200">
                    Learn more about these technologies:
                  </p>
                  <ul className="ps-5 text-gray-700 list-disc dark:text-gray-200">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Container to control order on different screens */}
        <div className="flex flex-col lg:flex-row lg:order-1 w-full">
          {/* Product Image Container */}
          <article className="m-3 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <header className="flex items-center justify-between py-2 px-2">
              <p className="font-normal text-gray-700 dark:text-gray-100">
                diamond
              </p>
              <Link
                to="/"
                className="text-gray-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:text-gray-100"
              >
                heart
              </Link>
            </header>
            <img
              className="rounded-b-lg w-full h-74 object-cover"
              src={product.image_url || "placeholder.jpg"}
              alt={product.title || "Product image"}
            />
          </article>
        </div>

        <div>
          {/* Product Details extension */}
          <section className="lg:hidden m-5 flex gap-10">
            <h3>{product.views || "views"}</h3>
            <h3>{product.favorites || "favorites"}</h3>
            <h3>{product.pfp || "PFPs"}</h3>
          </section>
        </div>
      </section>
    </main>
  );
};
