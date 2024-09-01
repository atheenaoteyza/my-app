import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5 mr-5">
        <h1 className="text-5xl font-bold">
          Trade cat NFTs at <span>LOWEST </span>cost
        </h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          The world’s first and largest digital marketplace for cats
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore Cattos
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src="https://i.seadn.io/gcs/files/7c2864105630a41cc0b77992feadad96.png?auto=format&dpr=1&w=1000"
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};
