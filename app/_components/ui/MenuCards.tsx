"use client";

import Link from "next/link";
import { useMenuStore } from "@/app/_store/useMenu";

const MenuCard = ({
  name,
  description,
  photoUrl,
  _id,
  category,
  slug,
}: MenuTypes) => {
  const setMenu = useMenuStore(({ setMenu }) => setMenu);
  return (
    <Link
      className="  px-6 py-4 bg-white rounded-md flex gap-4  justify-between"
      href={`${slug}/dessert/${_id}`}
      onClick={() => setMenu({ name, description, photoUrl, category })}>
      <img
        src={photoUrl}
        loading="lazy"
        alt={`Image of  a ${name}`}
        width={70}
        height={75}
        className="object-cover max-w-[6rem] h-36 rounded-md"
      />
      <div className="flex flex-col justify-between  ">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="line-clamp-3 text-sm">{description}</p>
        <button className="bg-orange px-4 py-2 rounded-md text-white text-sm font-medium hover:brightness-95 duration-500 transition-all">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default MenuCard;
