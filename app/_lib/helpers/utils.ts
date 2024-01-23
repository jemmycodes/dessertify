export const checkIfItemExists = (id: string, array: CartType[]) => {
  return array.findIndex((item) => item._id === id);
};

export const fetchData = async (url: string): Promise<MenuTypes[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("An error occurred while fetching data");
  }

  const { data } = (await res.json()) as { data: MenuTypes[] };

  return data;
};
