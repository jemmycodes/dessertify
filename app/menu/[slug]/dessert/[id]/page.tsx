"use client"

import {useMenuStore} from "@/app/_store/useMenu"

const Desserts = ({ params: { id } }: Params) => {
 const menu = useMenuStore((state) => state.menu)

  if (!menu || !menu.name) {
  return <p>An error occured</p>
  }
  
  console.log(menu)

  return <div className="flex flex-col gap-5">
      <img
        src={menu.photoUrl}
        loading="lazy"
        alt={`Image of  a ${name}`}
        height={300}
        className="object-cover  w-screen "
      />
    <section className="flex flex-col gap-2">
      <p className="font-semibold text-orange tracking-widest text-sm uppercase">{menu.category}</p>
      <h2 className="font-semibold text-2xl capitalize ">{menu.name}</h2>
      <p className="text-sm leading-5">{menu.description}</p>
        </section>
  </div>;
};

export default Desserts;
