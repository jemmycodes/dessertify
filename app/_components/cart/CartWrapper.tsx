import type { ReactNode } from "react";
import CartSummary from "./CartSummary";

interface Wrapper {
    cartLength: number;
  totalAmount: number;
  children: ReactNode;
}
const CartWrapper = ({ children, totalAmount, cartLength }: Wrapper) => {
  return (
    <div className="flex flex-col md:flex-row w-full ">
      {children}

      <CartSummary totalAmount={totalAmount} cartLength={cartLength} />
    </div>
  );
};

export default CartWrapper;
