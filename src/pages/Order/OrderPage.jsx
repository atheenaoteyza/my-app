import { useState, useEffect } from "react";
import { OrderSuccess } from "./components/OrderSuccess";

export const OrderPage = () => {
  const [user, setUser] = useState({});
  const token = sessionStorage.getItem("token");
  const cbid = sessionStorage.getItem("cbid");
  const orderId = Number(sessionStorage.getItem("orderId"));

  useEffect(() => {
    const authentication = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    async function getUser() {
      const response = await fetch(
        `http://localhost:3000/660/orders`,
        authentication
      );
      const data = await response.json();
      const order = data[orderId - 1];
      console.log(order);
      setUser(order);
    }
    getUser();
  }, []);
  return (
    <>
      <OrderSuccess data={user}></OrderSuccess>
    </>
  );
};
