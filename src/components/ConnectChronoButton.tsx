import { getChronoSdk } from "@planetarium/chrono-sdk";
import { useAccounts, useConnect } from "@planetarium/chrono-sdk/hooks";
import { useAccountStore } from "../store/account";

function ConnectChronoButton() {
  const {
    data: accountsData,
    isLoading: accountsLoading,
    isSuccess: accountsSuccess,
  } = useAccounts();

  const currentAccount = useAccountStore((state) => state.currentAccount);
  const globalAccounts = useAccountStore((state) => state.accounts);
  const updateAccounts = useAccountStore((state) => state.updateAccounts);
  const updateCurrentAccount = useAccountStore(
    (state) => state.updateCurrentAccount
  );

  const { connectAsync, isPending } = useConnect();

  const chronoWallet = getChronoSdk();

  if (chronoWallet === undefined) {
    return (
      <button className="flex flex-col bg-gray-900 justify-center items-center min-w-screen min-h-screen">
        Install Chrono
      </button>
    );
  }

  if (accountsLoading) {
    return <button disabled>Loading...</button>;
  }

  if (!accountsSuccess) {
    return <button disabled>Accounts are not loaded successful.</button>;
  }

  const { accounts, isConnected } = accountsData;
  updateAccounts(accounts);

  if (isConnected) {
    return (
      <select
        onChange={(e) => {
          updateCurrentAccount(accounts[Number(e.target.value)]);
          console.log(currentAccount);
          console.log(globalAccounts);
        }}
      >
        {accounts.map((address, index) => (
          <option key={address.toString()} value={index}>
            {address.toString()}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <button
        className="bg-white p-4 font-bold"
        onClick={() => connectAsync()}
        disabled={isPending}
      >
        {isPending ? "Connecting" : "Connect"}
      </button>
    );
  }
}

export default ConnectChronoButton;
