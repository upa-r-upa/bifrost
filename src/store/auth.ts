import { create } from "zustand";
import { Planet } from "../constants/planet";
import { devtools, persist } from "zustand/middleware";
import { AuthStoreStorageKey } from "@/constants/storage";

export enum ChronoStatus {
  NOT_INSTALLED,
  LOADING,
  NOT_CONNECTED,
  CONNECTED,
}

export interface WrappedNetwork {
  id: string;
  name: string;
  genesisHash: string;
  gqlEndpoint: string;
  isMainnet: boolean;
  explorerEndpoint: string;
}

// Type for the Status Store
interface StatusState {
  status: ChronoStatus;
  updateStatus: (newStatus: ChronoStatus) => void;
}

// Status store
export const useStatusStore = create<StatusState>()(
  devtools((set) => ({
    status: ChronoStatus.NOT_INSTALLED,
    updateStatus: (newStatus: ChronoStatus) => set({ status: newStatus }),
  }))
);

// Type for the Account Store
interface AuthState {
  accounts: string[]; // localStorage에 저장
  currentAccount: string | null; // localStorage에 저장
  planet: Planet | null;

  updateAccounts: (newAccounts: string[]) => void;
  updateCurrentAccount: (newAccount: string) => void;
  updatePlanet: (planetInfo: Planet) => void;
}

// Auth store
export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        accounts: [],
        planet: null,
        currentAccount: null,

        updateAccounts: (newAccounts) => {
          console.log(newAccounts);
          set({ accounts: newAccounts });
        },
        updateCurrentAccount: (newAccount) => {
          console.log(newAccount);
          set({ currentAccount: newAccount });
        },
        updatePlanet: (planetInfo: Planet) => {
          set({ planet: planetInfo });
        },
      }),
      {
        name: AuthStoreStorageKey,
      }
    )
  )
);
