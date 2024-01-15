import Search from "../_components/ui/Search";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";
import MenuNavigation from "../_components/customlayouts/MenuNavigation";

const MenuLayout = ({ children }: Props) => {
  return (
    <PagesWrapper>
      <MenuNavigation />
      <Search smHidden={false} />
      <section>{children} </section>
    </PagesWrapper>
  );
};

export default MenuLayout;
