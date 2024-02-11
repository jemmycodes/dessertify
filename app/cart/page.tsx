import type { Cart } from "../global";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import emptyCart from "@/public/empty-cart.svg";
import Checkout from "../_components/cart/Checkout";
import CartTable from "../_components/cart/CartTable";
import { fetchDataInServerComponents } from "../_lib/supabase/server/databaseRequests";

const Cart = async () => {
  const cart = await fetchDataInServerComponents<Cart>(
    "cart",
    "id, name, price, category, photoUrl, quantity"
  );

  if (!cart.length)
    return (
      <div className="flex flex-col gap-7 justify-center w-full items-center min-h-screen ">
        <h2 className="text-lg font-bold text-center">You have no item in your cart!</h2>
        <Image
          src={emptyCart as StaticImageData}
          alt="Empty Cart"
          height={200}
          width={150}
          className="max-w-sm w-full"
        />
        <Link
          href="/menu/all"
          className="px-5 py-1 border border-orange text-orange text-sm ">
          Go to Shop
        </Link>
      </div>
    );

  return (
    <>
      <CartTable cart={cart} />

      <Checkout cart={cart} />
    </>
  );
};

export default Cart;
