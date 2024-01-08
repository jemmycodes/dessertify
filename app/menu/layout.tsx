"use client";

import { MdSearch } from "react-icons/md";
import Input from "@/app/_components/ui/Input";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";
import MenuNavigation from "../_components/customlayouts/MenuNavigation";

interface Props {
  children: React.ReactNode;
}

const Menu = ({children}: Props) => {
  return (
    <PagesWrapper>
      <MenuNavigation />
      <Input
        type="text"
        icon={<MdSearch className="auth-icons right-4" />}
        placeholder="Search your favorite desserts"
        containerClass="w-full max-w-[490px]"
        className="border-gray-400 text-sm  border p-4 py-3 rounded-md focus:outline-none focus:border focus:border-orange "
      />
      {children}
    </PagesWrapper>
  );
};

export default Menu;
