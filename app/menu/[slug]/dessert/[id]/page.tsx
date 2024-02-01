/* eslint-disable @next/next/no-img-element */
"use client";

import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaMinus, FaCartPlus } from "react-icons/fa";
import type { Menu, Params, Cart } from "@/app/global";
import useSendToDb from "@/app/_lib/hooks/useSendToDb";
import { ENV_ORIGIN } from "@/app/_lib/helpers/constants";
import { asyncState, createItem } from "@/app/_lib/helpers/utils";
import Loading from "../loading";

type InsertCart = Omit<Cart, "id">;

const Desserts = ({ params: { id } }: Params) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string>("");
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    console.log("useEffect running")
    void (async () => {
      const res = await fetch(`${ENV_ORIGIN}/api/menu/dessert?id=${id}`);

      if (!res.ok) {
        setError(res.statusText);
        return;
      }

      const menu = (await res.json()) as Menu;
      setMenu(menu);
    })();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { loading: sending, sendToDb } = useSendToDb<InsertCart>(
    "cart",
    createItem(menu as Menu),
    asyncState(menu?.name )
  );
if (loading) return <Loading/>

  if (error || !menu) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center md:h-[65vh] mb-8 mt-5 ">
      <section className="flex flex-col md:flex-row gap-5 mb-20">
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
                className={
                  sending
                    ? " w-full text-white cursor-wait"
                    : "w-full text-orange cursor-pointer"
                }
                onClick={() => {
                  !sending && setQuantity((prev) => prev + 1);
                }}
              />
              <input
                type="text"
                disabled={sending}
                className="text-black w-full text-center bg-transparent"
                value={quantity}
                onChange={(e) => {
                  !loading && setQuantity(+e.target.value);
                }}
              />
              <FaMinus
                className={
                  sending
                    ? " w-full text-white cursor-wait"
                    : "w-full text-orange cursor-pointer"
                }
                onClick={() => {
                  if (sending || quantity <= 1) return;

                  setQuantity((prev) => prev - 1);
                }}
              />
            </span>
            <button
              className="bg-orange text-white px-4 py-2 w-full rounded font-medium flex gap-3 items-center justify-center disabled:bg-gray-400 "
              onClick={(e) => {
                e.preventDefault();
                void (async () => {
                  await sendToDb();
                })();
              }}
              disabled={sending}>
              <FaCartPlus /> {loading ? "Adding to cart..." : "Add to cart"}
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Desserts;
