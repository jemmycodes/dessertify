import MenuCard from "@/app/_components/ui/MenuCards";
import { fetchTable } from "@/app/_lib/helpers/supabase";

const MenuItems = async ({ params: { slug } }: Params) => {

  const { data: menu, error } = await fetchTable("menu", "*")
  
  if (!menu || error) {
    return <p>An error occurred!</p>
  }

  return (
    <>
      <section className="flex flex-col gap-5 min-[700px]:grid min-[700px]:grid-cols-menu-cards-layout my-3">
        {slug === "all" 
          ? menu.map((item: MenuTypes) => (
              <MenuCard {...item} key={item._id} slug={slug} />
            ))
          : menu
              .filter((item: MenuTypes) => item.category === slug)
              .map((item: MenuTypes) => (
                <MenuCard {...item} key={item._id} slug={slug} />
              ))}
      </section>
    </>
  );
};

export default MenuItems;
