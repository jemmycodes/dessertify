import { create } from "zustand";
import {
  changeQuantity,
  checkIfItemExists,
  insertData,
} from "../_lib/helpers/utils";
import toast from "react-hot-toast";

interface CartStore {
  cart: CartType[];
  loading: boolean;
  addToCart: (item: CartType) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

const initialState = {
  cart: [],
  loading: false,
};

const useCartStore = create<CartStore>()((set, get) => ({
  ...initialState,
  addToCart: async (item) => {
    set(() => ({ loading: true }));
    const res = await insertData("/api/cart", { data: item, table: "cart" });

    if (!res)
      return set((state) => ({ cart: [...state.cart], loading: false }));

    const { cart } = get();
    const itemIndex = checkIfItemExists(item._id, cart);

    if (itemIndex === -1) {
      set((state) => ({ cart: [...state.cart, item], loading: false }));
      return;
    }

    const existingItem = cart[itemIndex];

    const newCart = [...cart];
    existingItem.quantity += item.quantity;

    toast.success(`Added ${item.name} to cart`);

    set(() => ({ cart: newCart, loading: false }));
  },

  removeFromCart: async (id) => {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    console.log(await res.json());

    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }));
  },

  increaseQuantity: (id) => {
    const newCart = changeQuantity(get().cart, id, "ADD");
    set(() => ({ cart: newCart }));
  },

  decreaseQuantity: (id) => {
    const newCart = changeQuantity(get().cart, id, "REDUCE");
    set(() => ({ cart: newCart }));
  },
}));

export default useCartStore;
