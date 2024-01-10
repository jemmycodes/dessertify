import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MenuState {
  menu: Record<string, string> | null;
  setMenu: (menu: Record<string, string>) => void;
}


export const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      menu: null,
      setMenu: (menu) => set(() => ({ menu })),
    }),
    {
      name: "current-menu",
    }
  )
);
