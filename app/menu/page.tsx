import PagesWrapper from "../_components/customlayouts/PagesWrapper";
import MenuNavigation from "../_components/customlayouts/MenuNavigation";

const getDesserts = async () => {
  const res = await fetch(
    "https://freerandomapi.cyclic.app/api/v1/desserts?limit=50"
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
const Menu =async () => {
  const data = await getDesserts();

  console.log(data);
  return (
    <PagesWrapper>
      <MenuNavigation/>
    </PagesWrapper>
  );
};

export default Menu;
