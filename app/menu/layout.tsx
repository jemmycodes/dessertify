"use client";

import PagesWrapper from "../_components/customlayouts/PagesWrapper";

const MenuLayout = ({ children }: Props) => {
  return (
    <PagesWrapper>
      <div>

     
      <div className="p-5">{children}</div>
      </div>
    </PagesWrapper>
  );
};

export default MenuLayout;
