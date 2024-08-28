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
} from "../pages";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/Product" element={<ProductList />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
