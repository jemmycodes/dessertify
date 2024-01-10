import { Suspense } from "react";
import { MdSearch } from "react-icons/md";
import Input from "@/app/_components/ui/Input";
import MenuCard from "@/app/_components/ui/MenuCards";
import { supabaseClient } from "@/app/_lib/helpers/supabase";

const MenuItems = async ({ params: { slug } }: Params) => {
  const { data: menu, error } = await supabaseClient
    .from("menu")
    .select("*")
    .eq("category", slug);
  console.log(menu);

  if (error) {
    return <p>An error occurred</p>;
  }

  return (
    <>
      <section className="grid grid-cols-menu-cards-layout gap-3 my-5">
        <Suspense fallback={<p>Loading Data...</p>}>
          {menu.map((item: MenuTypes) => (
            <MenuCard {...item} key={item._id} slug={slug} />
          ))}
        </Suspense>
      </section>
    </>
  );
};

export default MenuItems;
