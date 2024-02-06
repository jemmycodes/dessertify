"use client";

import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import type { Cart } from "@/app/global";
import useRemoveRow from "@/app/_lib/hooks/useDeleteRow";

const CartItems = ({ photoUrl, name, category, id, quantity, price }: Cart) => {
  const { loading, removeRow } = useRemoveRow("cart", id, {
    loading: `Removing ${name} from cart!`,
    success: ` Removed ${name}  from cart!`,
    error: `Error removing ${name} from cart!`,
  });
  return (
    <li className="grid grid-cols-7 gap-3 border-b pb-4">
      <img
        src={photoUrl}
        width={70}
        height={70}
        loading="lazy"
        alt={name}
        className=" w-full h-full  col-span-2 object-cover"
      />
      <div className="flex gap-2 flex-col col-span-2 justify-between">
        <p className="text-sm font-bold ">{name}</p>
        <p className="text-xs text-orange font-semibold">
          {category === "Ice_Cream" ? "Ice Cream" : category}
        </p>
        <button
          className=" text-left text-xs"
          disabled={loading}
          onClick={(e) => {
            e.preventDefault();
            void (async () => {
              await removeRow();
            })();
          }}>
          {loading ? "Removing..." : "Remove"}
        </button>
      </div>
      <div className=" justify-between items-center gap-2 flex flex-col">
        <span className="p-1 cursor-pointer bg-orange text-white rounded ">
          <TiPlus />
        </span>
        <p>{quantity}</p>
        <span className="p-1 cursor-pointer bg-orange text-white rounded cursor">
          <TiMinus />
        </span>
      </div>
      <p className="font-bold  text-sm col-span-2">
        ${price} <span className="text-gray-400 text-xs"> x{quantity}</span>
      </p>
    </li>
  );
};

export default CartItems;
