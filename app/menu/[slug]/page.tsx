import MenuCard from "@/app/_components/ui/MenuCards";
import { fetchData } from "@/app/_lib/helpers/utils";
// import { fetchTable } from "@/app/_lib/helpers/supabase";
export const origin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN! || "http://localhost:3000";

const MenuItems = async ({ params: { slug } }: Params) => {
  const menu = await fetchData(`${origin}/api/menu`, slug);

  return (
    <>
      <section className="flex flex-col gap-5 min-[700px]:grid min-[700px]:grid-cols-menu-cards-layout my-3">
        {menu.map((item: MenuTypes) => (
          <MenuCard {...item} key={item._id} slug={slug} />
        ))}
      </section>
    </>
  );
};

export default MenuItems;
