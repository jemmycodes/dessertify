"use client";

// import useCartStore from "../_store/useCart";
import Checkout from "../_components/cart/Checkout";
import { CartTable } from "../_components/cart/CartTable";
import { useEffect, useState } from "react";
// import { fetchData } from "../_lib/helpers/utils";

const Cart = () => {
  const [cart, setCart] = useState<CartType[] | null>();

  useEffect(() => {
    void (async () => {
      const res = await fetch("http://localhost:3000/api/cart");
      const data = (await res.json()) as CartType[];

      console.log(data);
      setCart(data);
    })();
  }, []);

  if (!cart) {
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
