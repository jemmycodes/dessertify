"use client";

// import useCartStore from "../_store/useCart";
import { useEffect, useState } from "react";
import { fetchData } from "../_lib/helpers/utils";
import Checkout from "../_components/cart/Checkout";
import { CartTable } from "../_components/cart/CartTable";

const Cart = () => {
  const [cart, setCart] = useState<CartType[] | null>();

  useEffect(() => {
    void (async () => {
      const data = await fetchData<CartType>(`/api/cart`);

      setCart(data);
    })();
  }, []);

  if (!cart || !cart.length) {
    return <div className="text-center">No item in cart</div>;
  }

  return (
    <>
      <CartTable cart={cart} />

      <Checkout cartLength={cart.length} />
    </>
  );
};

export default Cart;
