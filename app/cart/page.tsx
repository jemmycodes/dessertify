import type { Cart } from "../../global";
import Checkout from "../_components/cart/Checkout";
import CartTable from "../_components/cart/CartTable";
import { fetchDataInServerComponents } from "../_lib/supabase/server/databaseRequests";

const Cart = async () => {
  const cart = await fetchDataInServerComponents<Cart>(
    "cart",
    "id, name, price, category, photoUrl, quantity"
  );

  return (
    <>
      <CartTable cart={cart} />

      <Checkout cart={cart} />
    </>
  );
};

export default Cart;
