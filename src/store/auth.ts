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
  accounts: string[];
  currentAccount: string | null;
  avatarAddress: string | null;
  planet: Planet | null;

  updateAccounts: (newAccounts: string[]) => void;
  updateAvatarAddress: (newAvatarAddress: string | null) => void;
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
        avatarAddress: null,

        updateAccounts: (newAccounts) => set({ accounts: newAccounts }),
        updateAvatarAddress: (newAvatarAddress) =>
          set({ avatarAddress: newAvatarAddress }),
        updateCurrentAccount: (newAccount) =>
          set({ currentAccount: newAccount }),
        updatePlanet: (planetInfo: Planet) => set({ planet: planetInfo }),
      }),
      {
        name: AuthStoreStorageKey,
      }
    )
  )
);
