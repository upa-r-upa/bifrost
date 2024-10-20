import { Address } from "@planetarium/account";
import { create } from "zustand";
import { Planet } from "../constants/planet";
import { devtools } from "zustand/middleware";

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
interface AccountState {
  accounts: Address[];
  currentAccount: Address | null;
  updateAccounts: (newAccounts: Address[]) => void;
  updateCurrentAccount: (newAccount: Address) => void;
}

// Account store
export const useAccountStore = create<AccountState>()(
  devtools((set) => ({
    accounts: [],
    currentAccount: null,
    updateAccounts: (newAccounts: Address[]) => set({ accounts: newAccounts }),
    updateCurrentAccount: (newAccount: Address) =>
      set({ currentAccount: newAccount }),
  }))
);

// Type for the Network Store
interface NetworkState {
  networkInformation: WrappedNetwork | null;
  planet: Planet | null;
  updateNetwork: (networkInfo: WrappedNetwork) => void;
  updatePlanet: (planetInfo: Planet) => void;
}

// Network store
export const useNetworkStore = create<NetworkState>()(
  devtools((set) => ({
    networkInformation: null,
    planet: null,
    updateNetwork: (networkInfo: WrappedNetwork) =>
      set({ networkInformation: networkInfo }),
    updatePlanet: (planetInfo: Planet) => set({ planet: planetInfo }),
  }))
);
