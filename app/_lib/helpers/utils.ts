// import type { Cart } from "@/app/global";
// import { origin } from "@/app/menu/[slug]/page";
// import toast from "react-hot-toast";

import { ENV_ORIGIN } from "./constants";

// export const checkIfItemExists = (id: string, array: Cart[]) => {
//   return array.findIndex((item) => item.id === id);
// };

// export const fetchData = async <T>(
//   url: string,
//   slug: undefined | string = undefined
// ): Promise<T[]> => {
//   const res = await fetch(`${origin}${url}`);

//   console.log(res, "res");

//   if (!res.ok) {
//     throw new Error("An error occurred while fetching data");
//   }

//   const data = (await res.json()) as T[];

//   if (slug === undefined || slug === "all") return data;

//   if (slug !== "all") return data.filter((item) => item.category === slug);

//   return data;
// };

// export const insertData = async (url: string, data: CartRoute) => {
//   const toastID = toast.loading("Adding to cart...");

//   const res = await fetch(`${origin}${url}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) {
//     toast.error("Could not update cart", { id: toastID });
//     return;
//   }

//   if (res.status === 200) {
//     toast.dismiss(toastID);
//     return "ok";
//   }
// };

// export const changeQuantity = (
//   cart: Cart[],
//   id: string,
//   action: "REDUCE" | "ADD"
// ) => {
//   const itemIndex = checkIfItemExists(id, cart);

//   const item = cart[itemIndex];

//   if (item.quantity === 1) return;

//   const newCart = [...cart];

//   item.quantity = action === "REDUCE" ? item.quantity - 1 : item.quantity + 1;

//   return newCart;
// };

// export const fetchData = async <T >(url: string) => {

//     const response = await fetch(`${ENV_ORIGIN}${url}`);
//     if (!response.ok) {
//       throw new Error(response.statusText || "An error occurred while fetching data");
//     }
//     const data = (await response.json()) as T[];

//     return data;

// };

export const fetchData = async <T>(url: string) => {
  const response = await fetch(`${ENV_ORIGIN}${url}`);


  if (!response.ok) {
    throw new Error(
      response.statusText || "An error occurred while fetching data"
    );
  }
  const data = (await response.json()) as T[];

  return data;
};
