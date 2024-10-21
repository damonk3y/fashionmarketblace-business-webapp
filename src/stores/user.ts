import { create } from "zustand";
import { UserContext } from "@/api/user";

interface UserStore {
  currentUser?: UserContext;
  selectedStoreId?: string;
  setUser: (user: UserContext) => void;
  setSelectedStoreId: (storeId: string) => void;
}

export const useUserStore = create<UserStore>(set => ({
  currentUser: undefined,
  selectedStoreId: undefined,
  setUser: (user: UserContext) => set({ currentUser: user }),
  setSelectedStoreId: (storeId: string) =>
    set({ selectedStoreId: storeId })
}));
