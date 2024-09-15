export const productData = async () => {
  try {
    const result = await fetch("http://localhost:3000/products");
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("product data error", error);
  }
};
