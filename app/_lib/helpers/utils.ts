import { origin } from "@/app/menu/[slug]/page";
import toast from "react-hot-toast";

interface ICategory {
  category: string;
}

export const checkIfItemExists = (id: string, array: CartType[]) => {
  return array.findIndex((item) => item._id === id);
};

export const fetchData = async <T extends ICategory>(
  url: string,
  slug: undefined | string = undefined
): Promise<T[]> => {
  const res = await fetch(`${origin}${url}`);


  console.log(res, res.ok);

  if (!res.ok) {
    throw new Error("An error occurred while fetching data");
  }

  const data = (await res.json()) as T[];

  console.log(data);

  if (slug === undefined || slug === "all") return data;

  if (slug !== "all") return data.filter((item) => item.category === slug);

  return data;
};

export const insertData = async (url: string, data: CartRoute) => {
  const toastID = toast.loading("Adding to cart...");

  const res = await fetch(`${origin}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    toast.error("Could not update cart", { id: toastID });
    return;
  }

  if (res.status === 200) {
    toast.dismiss(toastID);
    return "ok";
  }
};

export const changeQuantity = (
  cart: CartType[],
  id: string,
  action: "REDUCE" | "ADD"
) => {
  const itemIndex = checkIfItemExists(id, cart);

  const item = cart[itemIndex];

  if (item.quantity === 1) return;

  const newCart = [...cart];

  item.quantity = action === "REDUCE" ? item.quantity - 1 : item.quantity + 1;

  return newCart;
};
