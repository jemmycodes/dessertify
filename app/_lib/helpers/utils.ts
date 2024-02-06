import { ENV_ORIGIN } from "./constants";
import { createSupabaseBrowserClient } from "../supabase/client";
import toast from "react-hot-toast";
import type { Cart } from "@/app/global";
import type { PostgrestError } from "@supabase/supabase-js";

interface Data {
  data: Cart | null;
  error: PostgrestError | null;
}

const supabase = createSupabaseBrowserClient();

export const fetchDataFromRoute = async <T>(url: string) => {
  const response = await fetch(`${ENV_ORIGIN}${url}`);

  if (!response.ok) {
    throw new Error(
      response.statusText || "An error occurred while fetching data"
    );
  }
  const data = (await response.json()) as T[];

  return data;
};

interface Item {
  name: string;
  price: number;
  photoUrl: string;
  category: string;
  quantity: number;
  description: string;
  id: string;
}

export const createItem = <T extends Item>(item: T) => ({
  name: item?.name,
  category: item?.category,
  price: item?.price,
  photoUrl: item?.photoUrl,
  quantity: item?.quantity,
  product_id: item?.id,
});

export const asyncState = (name: string | undefined) => ({
  loading: `Adding ${name} to cart...`,
  success: `Added ${name} to cart!`,
  error: `Error adding ${name} to cart`,
});

export const generatePriceWithDiscount = () => {
  const minPrice = 10;
  const maxPrice = 50;
  const minDiscount = 5;
  const maxDiscount = 25;

  const price = Math.random() * (maxPrice - minPrice) + minPrice;

  const discount = Math.floor(
    Math.random() * (maxDiscount - minDiscount + 1) + minDiscount
  );

  const discountedPrice = price * (1 - discount / 100);

  return {
    price: Number(price.toFixed(2)),
    discount: discount + "%",
    discountedPrice: Number(discountedPrice.toFixed(2)),
  };
};

export const itemInDb = async (
  message: string,
  table: string,
  filter: Record<string, string>
) => {
  const { data, error }: Data = await supabase
    .from(table)
    .select("*")
    .eq(filter.name, filter.value)
    .maybeSingle();

  if (error) {
    toast.error(message);
    return { error, data: null };
  }

  return { error: null, data };
};
