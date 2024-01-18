import { create } from "zustand";
import { checkIfItemExists } from "../_lib/helpers/utils";

interface CartStore {
  cart: CartType[];
  addToCart: (item: CartType) => void;
  removeFromCart: (id: string) => void;
}

const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],
  addToCart: (item) => {
const {cart} = get()
    const itemIndex = checkIfItemExists(item._id, cart);

    console.log(itemIndex);

    if (!itemIndex === -1) {
      set((state) => ({ cart: [...state.cart, item] }));
      return;
    }

      const existingItem = cart[itemIndex]

      existingItem.quantity = existingItem.quantity + item.quantity

        set((state) => ({ cart: [...state.cart, item] }));
      
  },

  removeFromCart: (id) => {
    set((state) => ({ cart: state.cart.filter((item) => item._id !== id) }));
  },
}));

export default useCartStore;
