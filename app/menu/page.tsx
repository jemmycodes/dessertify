import { Suspense } from "react";
import { MdSearch } from "react-icons/md";
import Input from "../_components/ui/Input";
import MenuCard from "../_components/ui/MenuCards";
import { supabaseClient } from "../_lib/helpers/supabase";

const Menu = async () => {
  const { data: menu, error } = await supabaseClient.from("menu").select("*");
  console.log(menu);

  if (error) {
    return <p>An error occurred</p>;
  }

  return (
    <>
      {/* <Input
        type="text"
        icon={<MdSearch className="auth-icons right-4" />}
        placeholder="Search your favorite desserts"
        containerClass="w-full max-w-[510px]"
        className="border-gray-400 text-sm  border p-4 py-3 rounded-md focus:outline-none focus:border focus:border-orange "
      /> */}
      <section className="grid grid-cols-menu-cards-layout gap-3 my-5">
        <Suspense fallback={<p>Loading Data...</p>}>
          {menu.map((item: MenuTypes) => (
            <MenuCard {...item} key={item._id} />
          ))}
        </Suspense>
      </section>
    </>
  );
};

export default Menu;
