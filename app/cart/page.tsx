"use client";

import Checkout from "../_components/cart/Checkout";
import { CartTable } from "../_components/cart/CartTable";

const cart: [] = []

const Cart = () => {
 
  return (
    <>
      <CartTable cart={cart} />

      <Checkout cartLength={cart.length} />
    </>
  );
};

export default Cart;
