import TerminalContainer from "@/components/TerminalContainer";
import { useAccountStore, useStatusStore } from "@/store/chrono";

export default function Lobby() {
  const { status: chronoStatus, updateStatus } = useStatusStore();
  const {
    accounts: chronoAccounts,
    currentAccount,
    updateAccounts,
    updateCurrentAccount,
  } = useAccountStore();

  return <TerminalContainer title="Lobby"></TerminalContainer>;
}
