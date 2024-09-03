import { ProductCard } from "../../../components/Elements/ProductCard";
import { useEffect, useState } from "react";

export const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured collection
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard></ProductCard>
        ))}
      </div>
    </section>
  );
};
