import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch();
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  return (
    <>
      <ProductCard product={product}></ProductCard>
    </>
  );
};
