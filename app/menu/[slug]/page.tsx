import MenuCard from "@/app/_components/ui/MenuCards";
import { fetchData } from "@/app/_lib/helpers/utils";
// import { fetchTable } from "@/app/_lib/helpers/supabase";

const MenuItems = async ({ params: { slug } }: Params) => {
  const origin =
    process.env.NEXT_PUBLIC_SITE_ORIGIN! || "http://localhost:3000";

  const menu = await fetchData(`${origin}/api/menu`);

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
