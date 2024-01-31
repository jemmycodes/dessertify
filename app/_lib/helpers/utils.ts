import { ENV_ORIGIN } from "./constants";

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
  id?: string;
  name: string;
  price: number;
  photoUrl: string;
  category: string;
  quantity?: number;
  description?: string;
}

export const createItem = <T extends Item>(item: T) => ({
  name: item.name,
  category: item.category,
  price: item.price,
  photoUrl: item.photoUrl,
});
