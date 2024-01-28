"use client";

import type { Menu } from "@/app/global";
import Link from "next/link";
import { useParams } from "next/navigation";

const MenuCard = ({ name, description, photoUrl, id }: Menu) => {
  const { slug } = useParams() ;

  return (
    <Link
      className=" shadow-lg  bg-white rounded-md flex  justify-between"
      href={`${slug}/dessert/${id}`}>
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
          // disabled={loading}
          onClick={(e) => {
            e.preventDefault();
          }}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default MenuCard;
