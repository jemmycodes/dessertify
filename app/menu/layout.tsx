import MenuNavigation from "../_components/customLayouts/MenuNavigation";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";

const MenuLayout = ({ children }: Props) => {
  return (
    <PagesWrapper>
      <MenuNavigation />

      <section>{children} </section>
    </PagesWrapper>
  );
};

export default MenuLayout;
