import type { Cart } from "../global";
import Checkout from "../_components/cart/Checkout";
import CartTable from "../_components/cart/CartTable";
import { fetchDataInServerComponents } from "../_lib/helpers/utils";

const Cart = async () => {
  const cart = await fetchDataInServerComponents<Cart>(
    "cart",
    "id, name, price, category, photoUrl, quantity"
  );

  return (
    <>
      <CartTable cart={cart} />

      <Checkout cartLength={cart.length} />
    </>
  );
};

export default Cart;
