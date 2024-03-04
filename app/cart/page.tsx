import Link from "next/link";
import type { Cart } from "../global";
import emptyCart from "@/public/empty-cart.svg";
import { IoChevronForward } from "react-icons/io5";
import CartTable from "../_components/cart/CartTable";
import Image, { type StaticImageData } from "next/image";
import CartWrapper from "../_components/cart/CartWrapper";
import { fetchDataInServerComponents } from "../_lib/supabase/server/databaseRequests";

const Cart = async () => {
  const cart = await fetchDataInServerComponents<Cart>(
    "cart",
    "id, name, price, category, photoUrl, quantity"
  );

  const totalAmount = cart.reduce((accumualator, item)=> (item.price * item.quantity) + accumualator , 0).toFixed(2)

  if (!cart.length)
    return (
      <div className="flex flex-col gap-7 justify-center w-full items-center min-h-screen ">
        <h2 className="text-lg font-bold text-center">
          You have no item in your cart!
        </h2>
        <Image
          src={emptyCart as StaticImageData}
          alt="Empty Cart"
          height={200}
          width={150}
          className="max-w-sm w-full"
        />
        <Link
          href="/menu/all"
          className="px-5 py-2 border border-orange text-orange text-sm flex gap-3 items-center">
            <p>
           Go to Shop
              </p>
          <IoChevronForward />
        </Link>
      </div>
    );

  return (
    <CartWrapper totalAmount={Number(totalAmount)} cartLength={cart.length}>
      <CartTable cart={cart} />

    </CartWrapper>
  );
};

export default Cart;
