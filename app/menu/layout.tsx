"use client";

import { MdSearch } from "react-icons/md";
import Input from "@/app/_components/ui/Input";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";
import MenuNavigation from "../_components/customlayouts/MenuNavigation";

const Menu = ({ children }: Props) => {
  return (
    <PagesWrapper>
      <div className="p-5">
        <MenuNavigation />


      
        {children}
      </div>
    </PagesWrapper>
  );
};

export default Menu;
