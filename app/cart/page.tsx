"use client";

import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import useCartStore from "../_store/useCart";
import CartItems from "../_components/ui/CartItems";

const Cart = () => {
  const cart = useCartStore(({ cart }) => cart);

  if (!cart.length) {
    return <div className="text-center">No item in cart</div>;
  }

  return (
    <>
      <section className="w-full h-[50vh] overflow-scroll scrollbar-hide md:h-[80vh]">
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
              <CartItems key={item._id} {...item} />
            ))}
          </ul>
        </div>
      </section>

      <aside className="lg:min-w-[300px] lg:max-w-xs w-full rounded-t-3xl lg:rounded-t-none  px-8 py-16 text-gray-500 bg-white shadow-lg">
        <h2 className="max-w-xs pb-4 mx-auto text-xl font-bold text-black border-b">
          Order Summary
        </h2>
        <div className="flex flex-col max-w-xs gap-4 py-4 mx-auto">
          <span className="flex justify-between">
            <p className="text-sm font-bold">ITEMS {cart.length}</p>
            <p className="font-bold">$500</p>
          </span>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-bold">SHIPPING</label>
            <select className="w-full p-2 text-sm border-0 rounded-md focus:border-0 focus:outline-none">
              <option>Pickup - 0$</option>
              <option>Delivery - $20</option>
            </select>
          </div>

          <form className="flex flex-col gap-4 pb-8 border-b border-b-gray-400">
            <label className="text-sm font-bold">ADDRESS</label>
            <input
              type="text"
              className="w-full px-5 py-3 text-xs text-black border-0 rounded-md focus:border-0 focus:outline-none"
              placeholder="Enter your code"
            />
          </form>
          <div className="flex flex-col gap-8 mt-5">
            <span className="flex justify-between gap-4 font-bold">
              <p>TOTAL COST</p>
              <p>70</p>
            </span>
            <button
              type="button"
              className="px-2 py-3 text-sm font-bold text-white uppercase bg-orange">
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart;
