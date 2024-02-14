import type { ReactNode } from "react";
import PagesWrapper from "../_components/customlayouts/PagesWrapper";

const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PagesWrapper>
      <main className="flex flex-col md:flex-row mb-24 md:mb-0">
        {children}
      </main>
    </PagesWrapper>
  );
};

export default CartLayout;
