import PagesWrapper from "../_components/customlayouts/PagesWrapper";

const CartLayout = ({ children }: Props) => {
  return (
    <PagesWrapper>
      <main className="flex flex-col h-screen md:flex-row">{children}</main>;
    </PagesWrapper>
  );
};

export default CartLayout;
