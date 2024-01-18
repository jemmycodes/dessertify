export const checkIfItemExists = (id: string, array: CartType[]) => {
  return array.findIndex((item) => item._id === id);
};
