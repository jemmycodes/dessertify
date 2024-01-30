"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import type { Cart, Menu } from "@/app/global";
import { addItem } from "@/app/_lib/supabase/client/database";
import { useParams } from "next/navigation";

type InsertCart = Omit<Cart, "id">;

const MenuCard = ({ name, description, photoUrl, id, category }: Menu) => {
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  const addItemToCart = async () => {
    setLoading(true);
    const toastID = toast.loading(`Adding ${name} to cart`);

    const error = await addItem<InsertCart>("cart", {
      name,
      photoUrl,
      category,
      price: 400,
      quantity: 1,
    });

    if (error) {
      return toast.error(`Cannot add ${name} to cart`, { id: toastID });
    }

    toast.success(`Added ${name} to cart`, { id: toastID });
  };

  return (
    <Link
      className=" shadow-lg  bg-white rounded-md flex  justify-between"
      href={`${slug as string}/dessert/${id}`}>
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
        <button
          className="bg-orange px-4 py-2 rounded-md text-white text-sm font-medium hover:brightness-95 duration-500 transition-all disabled:cursor-not-allowed disabled:bg-gray-300 "
          disabled={loading}
          onClick={addItemToCart as () => void}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default MenuCard;
