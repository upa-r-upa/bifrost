import { getChronoSdk } from "@planetarium/chrono-sdk";
import {
  ChronoStatus,
  useStatusStore,
  useAccountStore,
  useNetworkStore,
  WrappedNetwork,
} from "@/store/chrono";
import {
  useAccounts,
  useConnect,
  useNetwork,
} from "@planetarium/chrono-sdk/hooks";
import { useEffect, useMemo } from "react";
import { ChronoDownloadLink } from "@/constants/chrono";
import { Planet } from "@/constants/planet";
import { HEIMDALL_GENESIS_HASH, ODIN_GENESIS_HASH } from "@planetarium/lib9c";
import { Buffer } from "buffer";

function ConnectChrono() {
  const { status: chronoStatus, updateStatus } = useStatusStore();
  const { updateNetwork, updatePlanet } = useNetworkStore();
  const {
    accounts: chronoAccounts,
    currentAccount,
    updateAccounts,
    updateCurrentAccount,
  } = useAccountStore();

  const { connectAsync, isPending } = useConnect();
  const {
    data: accountsData,
    isLoading: accountsLoading,
    isSuccess: accountsSuccess,
  } = useAccounts();
  const {
    data: networksData,
    isLoading: networksLoading,
    isSuccess: networksSuccess,
  } = useNetwork();

  const chronoWallet = useMemo(() => getChronoSdk(), []);

  useEffect(() => {
    if (!chronoWallet) {
      updateStatus(ChronoStatus.NOT_INSTALLED);
      return;
    }

    if (accountsLoading || networksLoading) {
      updateStatus(ChronoStatus.LOADING);
      return;
    }

    if (!accountsSuccess || !networksSuccess) {
      updateStatus(ChronoStatus.NOT_CONNECTED);
      updateAccounts([]);
      return;
    }

    const { accounts, isConnected: accountIsConnected } = accountsData;
    if (accountIsConnected) {
      updateStatus(ChronoStatus.CONNECTED);
      updateAccounts(accounts);
      updateCurrentAccount(accounts[0]);
    } else {
      updateStatus(ChronoStatus.NOT_CONNECTED);
    }

    const { network, isConnected: networkIsConnected } = networksData;
    if (networkIsConnected && network) {
      updateNetwork(network as WrappedNetwork);

      const genesisHash = Buffer.from(network.genesisHash).toString("hex");
      switch (genesisHash) {
        case Buffer.from(ODIN_GENESIS_HASH).toString("hex"):
          updatePlanet(Planet.ODIN);
          break;
        case Buffer.from(HEIMDALL_GENESIS_HASH).toString("hex"):
          updatePlanet(Planet.HEIMDALL);
          break;
        default:
          updatePlanet(Planet.NOT_SUPPORTED);
      }
    }
  }, [
    chronoWallet,
    accountsLoading,
    networksLoading,
    accountsSuccess,
    accountsData,
    networksSuccess,
    networksData,
    updateStatus,
    updateAccounts,
    updateCurrentAccount,
    updateNetwork,
    updatePlanet,
  ]);

  const renderContent = () => {
    switch (chronoStatus) {
      case ChronoStatus.NOT_INSTALLED:
        return (
          <a
            href={ChronoDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Install Chrono
          </a>
        );

      case ChronoStatus.LOADING:
        return (
          <button className="text-white" disabled>
            Loading... (If you are installing Chrono for the first time, please
            create an account.)
          </button>
        );

      case ChronoStatus.NOT_CONNECTED:
        return (
          <button
            className="bg-white p-4 font-bold"
            onClick={() => connectAsync()}
            disabled={isPending}
          >
            {isPending ? "Connecting..." : "Connect Chrono"}
          </button>
        );

      case ChronoStatus.CONNECTED:
        return (
          <select
            value={currentAccount ? currentAccount.toString() : ""}
            onChange={(e) => {
              updateCurrentAccount(chronoAccounts[Number(e.target.value)]);
            }}
          >
            {chronoAccounts.map((address, index) => (
              <option key={address.toString()} value={index}>
                {address.toString()}
              </option>
            ))}
          </select>
        );

      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

export default ConnectChrono;
