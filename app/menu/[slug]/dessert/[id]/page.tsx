"use client";

import { FaPlus } from "react-icons/fa6";
import { ENV_ORIGIN } from "@/app/_lib/helpers/constants";
import LoadingSpinner from "../../loading";
import { useEffect, useState } from "react";
import type { Menu, Params } from "@/app/global";
import { FaMinus, FaCartPlus } from "react-icons/fa";

const Desserts = ({ params: { id } }: Params) => {
  const [error, setError] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
    void (async () => {
      const res = await fetch(`${ENV_ORIGIN}/api/menu/dessert?id=${id}`);

      if (!res.ok) {
        setLoading(false)
        setError(res.statusText);
        return;
      }

      const menu = (await res.json()) as Menu;
      setMenu(menu);

      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) return <p>{error}</p>;

  return (
    menu && (
      <div className="flex flex-col items-center justify-center md:h-[65vh] mb-8 mt-5 ">
        <section className="flex flex-col md:flex-row gap-5 ">
          <img
            src={menu.photoUrl}
            loading="lazy"
            alt={menu.name}
            height={700}
            className="object-cover  md:w-1/2 rounded"
          />
          <article className="flex flex-col  gap-3 max-w-md justify-between">
            <p className="font-semibold text-orange tracking-widest text-sm uppercase">
              {menu.category === "Ice_Cream" ? "Ice Cream" : menu.category}
            </p>
            <h2 className="font-semibold text-2xl capitalize ">{menu.name}</h2>
            <p className="text-sm leading-5">{menu.description}</p>
            <div className="flex justify-between gap-4">
              <span className="flex gap-5 items-center font-semi-bold text-sm bg-">
                <p className=" font-bold text-2xl ">$125.00</p>
                <p className="bg-orange/10 text-orange font-semibold py-1 px-3">
                  50%
                </p>
              </span>
              <del className="font-bold text-gray-300">$250.00</del>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <span className=" flex items-center gap-3 w-full justify-between bg-gray-200 rounded-md p-2 font-bold">
                <FaPlus
                  className="w-full text-orange"
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                />
                <input
                  type="text"
                  className="text-black w-full text-center bg-transparent"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(+e.target.value);
                  }}
                />
                <FaMinus
                  className="w-full text-orange cursor-pointer"
                  onClick={() => {
                    if (quantity <= 1) return;
                    setQuantity((prev) => prev - 1);
                  }}
                />
              </span>
              <button className="bg-orange text-white px-4 py-2 w-full rounded font-medium flex gap-3 items-center justify-center">
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </article>
        </section>
      </div>
    )
  );
};

export default Desserts;
