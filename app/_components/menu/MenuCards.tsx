"use client";

import Link from "next/link";
import type { Cart, Menu } from "@/app/global";
import { useParams } from "next/navigation";
import useSendToDb from "@/app/_lib/hooks/useSendToDb";
import { asyncState } from "@/app/_lib/helpers/utils";

type InsertCart = Omit<Cart, "id">;

const MenuCard = ({ name, description, photoUrl, id, category }: Menu) => {
  const { slug } = useParams();

  const { loading, sendToDb } = useSendToDb<InsertCart>(
    "cart",
    { name, quantity: 2, price: 200, photoUrl, category },
    asyncState(name)
  );

  return (
    <div className=" shadow-lg  bg-white rounded-md flex  justify-between">
      <img
        src={photoUrl}
        loading="lazy"
        alt={`Image of  a ${name}`}
        width={200}
        height={65}
        className="object-cover w-full  max-w-[35%] rounded-l-md"
      />
      <div className="flex flex-col justify-between p-3 gap-3">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="line-clamp-3 text-sm">{description}</p>
        <Link
          className="underline text-xs "
          href={`${slug as string}/dessert/${id}`}>
          See more{" "}
        </Link>
        <button
          className="bg-orange px-4 py-2 rounded-md text-white text-sm font-medium hover:brightness-95 duration-500 transition-all disabled:cursor-not-allowed disabled:bg-gray-300 "
          disabled={loading}
          onClick={(e) => {
            e.preventDefault();
            void (async () => {
              await sendToDb();
            })();
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
