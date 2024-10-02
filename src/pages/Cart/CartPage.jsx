import { CartList } from "./components/CartList.jsx";
import { CartEmpty } from "./components/CartEmpty.jsx";
import { useCart } from "../../context/CartContext.jsx";
export const CartPage = () => {
  const { newArray } = useCart();
  return (
    <>
      <main>
        {newArray.length > 0 ? <CartList></CartList> : <CartEmpty></CartEmpty>}
      </main>
    </>
  );
};
