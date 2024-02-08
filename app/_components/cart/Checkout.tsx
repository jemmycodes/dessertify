import type { Cart } from "@/app/global";

export const Checkout = ({ cart }: { cart: Cart[] }) => {
const totalAmount = cart.reduce((accumulator, item)=> accumulator + (item.price * item.quantity), 0)

  return (
    cart.length > 0 && (
      <aside className="bg-white md:w-full md:max-w-lg h-full py-5 ">
        <h2 className="max-w-xs pb-4 mx-auto text-xl font-bold text-black border-b">
          Order Summary
        </h2>
        <div className="flex flex-col max-w-xs gap-4 py-4 mx-auto">
          <span className="flex justify-between">
            <p className="text-sm font-bold">ITEMS {cart.length}</p>
            <p className="font-bold">
              ${totalAmount}</p>
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
    )
  );
};

export default Checkout;
