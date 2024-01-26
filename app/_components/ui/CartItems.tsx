import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import useCartStore from "@/app/_store/useCart";

const CartItems = ({ photoUrl, name, category, id, quantity }: CartType) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore(
    ({ removeFromCart, increaseQuantity, decreaseQuantity }) => ({
      removeFromCart,
      decreaseQuantity,
      increaseQuantity,
    })
  );

  return (
    <li className="grid grid-cols-7 gap-3 border-b pb-4">
      <img
        src={photoUrl}
        width={70}
        height={70}
        loading="lazy"
        alt={name}
        className=" w-full h-full  col-span-2 object-cover"
      />
      <div className="flex gap-2 flex-col col-span-2 justify-between">
        <p className="text-sm font-bold ">{name}</p>
        <p className="text-xs text-orange font-semibold">
          {category === "Ice_Cream" ? "Ice Cream" : category}
        </p>
        <button
          className=" text-left text-xs"
          onClick={() => {
            removeFromCart(id);
          }}>
          Remove
        </button>
      </div>
      <div className=" justify-between items-center gap-2 flex flex-col">
        <span
          className="p-1 cursor-pointer bg-orange text-white rounded "
          onClick={() => increaseQuantity(_id)}>
          <TiPlus />
        </span>
        <p>{quantity}</p>
        <span
          className="p-1 cursor-pointer bg-orange text-white rounded cursor"
          onClick={() => decreaseQuantity(_id)}>
          <TiMinus />
        </span>
      </div>
      <p className="font-bold">{200.0}</p>
      <p className="font-bold">{300}</p>
    </li>
  );
};

export default CartItems;
