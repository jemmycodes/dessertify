import MenuCard from "@/app/_components/ui/MenuCards";
import { type Menu, type Params } from "@/app/global";
import { fetchData } from "@/app/_lib/helpers/utils";

const MenuItems = async ({ params: { slug } }: Params) => {
  const menu = await fetchData<Menu>("/api/menu");

  console.log(menu);

  return (
    <>
      <section className="flex flex-col gap-5 min-[700px]:grid min-[700px]:grid-cols-menu-cards-layout my-3">
        {slug === "all"
          ? menu.map((item) => <MenuCard {...item} key={item.id} />)
          : menu
              .filter((item) => item.category === slug)
              .map((item) => <MenuCard {...item} key={item.id} />)}
      </section>
    </>
  );
};

export default MenuItems;
