import { Address } from "@planetarium/account";
import { create } from "zustand";

interface AccountState {
  accounts: Address[];
  currentAccount: Address | null;

  updateAccounts: (newAccounts: Address[]) => void;
  updateCurrentAccount: (newAccount: Address) => void;
}

export const useAccountStore = create<AccountState>()((set) => ({
  accounts: [],
  currentAccount: null,

  updateAccounts: (newAccounts: Address[]) => set({ accounts: newAccounts }),
  updateCurrentAccount: (newAccount: Address) =>
    set({ currentAccount: newAccount }),
}));
