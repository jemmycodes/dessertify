import { create } from "zustand";
import { checkIfItemExists } from "../_lib/helpers/utils";

interface CartStore {
  cart: CartType[];
  addToCart: (item: CartType) => Promise<void>;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],
  addToCart: async (item) => {
    console.log("adding to cart", item);

    console.dir(res);

    const { cart } = get();
    const itemIndex = checkIfItemExists(item._id, cart);

    if (itemIndex === -1) {
      set((state) => ({ cart: [...state.cart, item] }));
      return;
    }

    const existingItem = cart[itemIndex];

    const newCart = [...cart];
    existingItem.quantity += item.quantity;

    set(() => ({ cart: newCart }));
  },

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item._id !== id) })),

  increaseQuantity: (id) => {
    const { cart } = get();
    const itemIndex = checkIfItemExists(id, cart);

    const item = cart[itemIndex];

    const newCart = [...cart];

    item.quantity++;

    set(() => ({ cart: newCart }));
  },

  decreaseQuantity: (id) => {
    const { cart } = get();
    const itemIndex = checkIfItemExists(id, cart);

    const item = cart[itemIndex];

    if (item.quantity === 1) return;

    const newCart = [...cart];

    item.quantity--;

    set(() => ({ cart: newCart }));
  },
}));

export default useCartStore;
