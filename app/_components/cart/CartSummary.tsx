import { useMemo } from "react";

const CartSummary = ({ totalAmount , cartLength}: { totalAmount: number, cartLength: number }) => {
  const summary = useMemo(
    () => [
      {
        value: cartLength,
        heading: cartLength > 1 ? "Items" : "Item",
      },
      {
        value: "$" + totalAmount,
        heading: "Total",
      },
      {
        value: "5%",
        heading: "Discount",
      },
      {
        value: "$" + (totalAmount * 0.05).toFixed(2),
        heading: "Sub Total",
      },
    ],
    [totalAmount, cartLength]
  );

  return (
    <section className="bg-white px-5 py-4 h-fit md:absolute left-[65%] w-full md:max-w-[250px]  top-1/3  shadow-lg flex flex-col gap-4">
      <h3 className="text-base underline uppercase font-bold">Order Summary</h3>

      {summary.map((item, index) => (
        <div key={item.heading}>
          <p
            className={`${
              index === summary.length - 1
                ? "border-b border-dashed border-orange pb-3"
                : ""
            } flex justify-between text-sm font-medium `}>
            <span>{item.heading}:</span>
            <span className="font-semibold">{item.value}</span>
          </p>
        </div>
      ))}

      <button className="text-white bg-orange px-4 py-2 text-sm">
        Checkout
      </button>
    </section>
  );
};

export default CartSummary;
