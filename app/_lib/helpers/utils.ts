export const checkIfItemExists = (id: string, array: CartType[]) => {
  return array.findIndex((item) => item._id === id);
};

export const fetchData = async (
  url: string,
  slug: undefined | string = undefined
): Promise<MenuTypes[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("An error occurred while fetching menus");
  }

  const { data } = (await res.json()) as { data: MenuTypes[] };

  if (slug === undefined || slug === "all") return data;

  if (slug !== "all") return data.filter((item) => item.category === slug);

  return data;
};
