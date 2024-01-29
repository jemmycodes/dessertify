import type { ReactNode } from "react";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";

const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PagesWrapper>
      <main className="flex flex-col min-h-screen md:min-h-0 md:h-[85vh]  md:overflow-y-hidden md:flex-row ">
        {children}
      </main>
    </PagesWrapper>
  );
};

export default CartLayout;
