import MenuCard from "@/app/_components/ui/MenuCards";
import { supabaseClient } from "@/app/_lib/helpers/supabase";

const MenuItems = async ({ params: { slug } }: Params) => {
  const { data: menu, error } = await supabaseClient.from("menu").select("*");

  if (error) {
    return <p>An error occurred</p>;
  }

  return (
    <>
      <section className="flex flex-col gap-5 min-[700px]:grid min-[700px]:grid-cols-menu-cards-layout my-3">
          {slug === "desserts"
            ? menu.map((item: MenuTypes) => (
                <MenuCard {...item} key={item._id} />
              ))
            : menu
                .filter((item: MenuTypes) => item.category === slug)
                .map((item: MenuTypes) => (
                  <MenuCard {...item} key={item._id} />
                ))}
        </section>
    </>
  );
};

export default MenuItems;
