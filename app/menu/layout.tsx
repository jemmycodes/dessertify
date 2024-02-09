"use client";

import { useState, type ReactNode } from "react";
import Search from "../_components/Search/Search";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";
import MenuNavigation from "../_components/customlayouts/MenuNavigation";

const MenuLayout = ({ children }: { children: ReactNode }) => {
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
