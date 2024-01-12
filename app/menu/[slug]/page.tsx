import { Suspense } from "react";
import MenuCard from "@/app/_components/ui/MenuCards";
import { supabaseClient } from "@/app/_lib/helpers/supabase";

const MenuItems = async ({ params: { slug } }: Params) => {
  let { data: menu, error } = await supabaseClient
    .from("menu")
    .select("*")

  if (error || !menu) {
    return <p>An error occurred</p>;
  }

  return (
    <>
      <section className="grid grid-cols-menu-cards-layout gap-3 my-5">
        <Suspense fallback={<p>Loading Data...</p>}>
          {slug === "desserts"
            ? menu.map((item) => <MenuCard {...item} key={item._id} />)
            : menu
                .filter((item) => item.category === slug)
                .map((item) => <MenuCard {...item} key={item._id} />)}
        </Suspense>
      </section>
    </>
  );
};

export default MenuItems;