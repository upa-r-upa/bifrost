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

interface StatusState {
  status: ChronoStatus;
  updateStatus: (newStatus: ChronoStatus) => void;
}

export const useStatusStore = create<StatusState>()(
  devtools((set) => ({
    status: ChronoStatus.NOT_INSTALLED,
    updateStatus: (newStatus: ChronoStatus) => set({ status: newStatus }),
  }))
);

export interface AvatarInfo {
  address: string;
  name: string;
  level: number;
}

interface AuthState {
  accounts: string[];
  currentAccount: string | null;
  avatarAddress: string | null;
  avatarInfo: AvatarInfo | null;
  planet: Planet | null;

  updateAccounts: (newAccounts: string[]) => void;
  updatePlanet: (planetInfo: Planet) => void;
  updateCurrentAccount: (newAccount: string) => void;
  updateAvatarInfo: (newAvatarInfo: AvatarInfo) => void;
  updateAvatarAddress: (newAvatarAddress: string | null) => void;
  updateAvatarAddressWithInfo: (
    newAddress: string | null,
    newAvatarInfo: AvatarInfo
  ) => void;
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
        avatarInfo: null,

        updateAvatarInfo: (newAvatarInfo) => set({ avatarInfo: newAvatarInfo }),
        updateAccounts: (newAccounts) => set({ accounts: newAccounts }),
        updateAvatarAddress: (newAvatarAddress) =>
          set({ avatarAddress: newAvatarAddress }),
        updateCurrentAccount: (newAccount) =>
          set({ currentAccount: newAccount }),
        updatePlanet: (planetInfo: Planet) => set({ planet: planetInfo }),
        updateAvatarAddressWithInfo: (
          newAddress: string | null,
          newAvatarInfo: AvatarInfo
        ) => set({ avatarAddress: newAddress, avatarInfo: newAvatarInfo }),
      }),
      {
        name: AuthStoreStorageKey,
      }
    )
  )
);
