import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  CartPage,
  Dashboard,
  OrderPage,
  ProductList,
  Login,
  Register,
  PageNotFound,
  ProductDetail,
} from "../pages";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/Products?search=" element={<ProductList />} />
        <Route path="/Products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
