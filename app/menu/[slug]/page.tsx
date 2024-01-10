import { Suspense } from "react";
import {MdSearch} from "react-icons/md";
import Input from "@/app/_components/ui/Input";
import MenuCard from "@/app/_components/ui/MenuCards";
const getData = async (slug: string) => {
  const res = await fetch(`${process.env.MENU_SITE_BASE_URL}/${slug}`);

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return await res.json();
};

const MenuItems = async ({
  params: { slug },
}: Params) => {
  const query =
    slug === "desserts"
      ? "desserts?limit=120"
      : `desserts?category=${slug}&limit=120`;

  const { data: menuItems } = await getData(query);

  return (
    <>
      <Input
        type="text"
        icon={<MdSearch className="auth-icons right-4" />}
        placeholder="Search your favorite desserts"
        containerClass="w-full max-w-[510px]"
        className="border-gray-400 text-sm  border p-4 py-3 rounded-md focus:outline-none focus:border focus:border-orange "
      />
      <section className="grid grid-cols-menu-cards-layout gap-3 my-5">
        <Suspense fallback={<p>Loading Data...</p>}>
          {menuItems.map((item: MenuTypes) => (
            <MenuCard {...item} key={item._id} slug={slug} />
          ))}
        </Suspense>
      </section>
    </>
  );
};

export default MenuItems;
