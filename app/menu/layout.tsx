"use client";


import Input from "@/app/_components/ui/Input";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";
import MenuNavigation from "../_components/customlayouts/MenuNavigation";

const MenuLayout = ({ children }: Props) => {
  return (
    <PagesWrapper>
      <div>

      <MenuNavigation />
     
      <div className="p-5">{children}</div>
      </div>
    </PagesWrapper>
  );
};

export default MenuLayout;
