import MenuCard from "@/app/_components/ui/MenuCards";
import { Suspense } from "react";

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.MENU_SITE_BASE_URL}/${slug}`);

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return await res.json();
};

const MenuItems = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const query =
    slug === "desserts"
      ? "desserts?limit=120"
      : `desserts?category=${slug}&limit=120`;

  const { data: menuItems } = await getData(query);

  return (
    <ul className="grid grid-cols-menu-cards-layout gap-3 my-5">
      <Suspense fallback={<p>Loading Data...</p>}>
        {menuItems.map((item: MenuTypes) => (
          <MenuCard {...item} key={item._id} />
        ))}
      </Suspense>
    </ul>
  );
};

export default MenuItems;
