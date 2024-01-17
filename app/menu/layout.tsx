"use client"

import { useState } from "react";
import Search from "../_components/ui/Search";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";
import MenuNavigation from "../_components/customlayouts/MenuNavigation";

const MenuLayout = ({ children }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <PagesWrapper>
      <MenuNavigation />
      <Search
        smHidden={false}
        search={search}
        onSearch={(input: string) => {
          setSearch(input);
        }}
      />
      <section>{children} </section>
    </PagesWrapper>
  );
};

export default MenuLayout;
