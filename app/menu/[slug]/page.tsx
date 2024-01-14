import MenuCard from "@/app/_components/ui/MenuCards";
import { supabaseClient } from "@/app/_lib/helpers/supabase";
import MenuNavigation from "@/app/_components/customlayouts/MenuNavigation";
import { Suspense } from "react";
import Loading from "../loading";

const MenuItems = async ({ params: { slug } }: Params) => {
  let { data: menu, error } = await supabaseClient.from("menu").select("*");

  if (error || !menu) {
    return <p>An error occurred</p>;
  }


const suspenseKey = Math.random()
console.log(suspenseKey)

  return (
    <>

      <Suspense fallback={<p>Loading...</p>} key={suspenseKey} >
        <section className="flex flex-col gap-5 min-[700px]:grid min-[700px]:grid-cols-menu-cards-layout my-3">
          {slug === "desserts"
            ? menu.map((item) => <MenuCard {...item} key={item._id} />)
            : menu
                .filter((item) => item.category === slug)
                .map((item) => <MenuCard {...item} key={item._id} />)}
        </section>
      </Suspense>
    </>
  );
};

export default MenuItems;
