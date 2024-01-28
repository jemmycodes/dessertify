// import Link from "next/link";
// import CartItems from "../ui/CartItems";
// import { BiArrowBack } from "react-icons/bi";

// export const CartTable = ({ cart }: { cart: CartType[] }) => {
//   console.log(cart);
//   return (
//     <section className="w-full h-[50vh] overflow-scroll scrollbar-hide md:h-[80vh]">
//       <div className="flex flex-col w-full max-w-2xl gap-4 p-4 mx-auto md:py-16 md:px-10">
//         <header className="flex items-center justify-between w-full pb-4 border-b ">
//           <h1 className="text-xl font-bold md:text-2xl">Shopping Cart</h1>
//           <Link
//             href="/menu"
//             className="flex items-center gap-2 px-3 py-2 text-sm border whitespace-nowrap">
//             <BiArrowBack />
//             Back to Menu
//           </Link>
//         </header>
//         <ul className="flex flex-col gap-8">
//           {cart.map((item) => (
//             <CartItems key={item.id} {...item} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };
