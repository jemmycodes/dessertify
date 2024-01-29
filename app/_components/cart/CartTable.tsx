import Link from "next/link";
import CartItems from "./CartItems";
import type { Cart } from "@/app/global";
import { BiArrowBack } from "react-icons/bi";

const CartTable = ({ cart }: { cart: Cart[] }) => {

  if (!cart.length) return <p>No item in cart!</p>

  return (
    <section
      className={`w-full  overflow-scroll scrollbar-hide ${
        cart.length > 0 ? "h-[70vh] md:h-full " : "h-screen"
      }`}>
      <div className="flex flex-col w-full max-w-2xl gap-4 p-4 mx-auto md:py-16 md:px-10">
        <header className="flex items-center justify-between w-full pb-4 border-b ">
          <h1 className="text-xl font-bold md:text-2xl">Shopping Cart</h1>
          <Link
            href="/menu"
            className="flex items-center gap-2 px-3 py-2 text-sm border whitespace-nowrap">
            <BiArrowBack />
            Back to Menu
          </Link>
        </header>
        <ul className="flex flex-col gap-8">
          {cart.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CartTable;
