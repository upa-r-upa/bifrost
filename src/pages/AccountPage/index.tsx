import TerminalContainer from "@/components/TerminalContainer";

import PreviousPageButton from "@/components/PreviousPageButton";

import ConnectChrono from "./ConnectChrono";
import SelectAvatar from "./SelectAvatar";

export default function AccountPage() {
  return (
    <>
      <TerminalContainer
        title="Connect Chrono"
        type="highlight"
        className="flex flex-col gap-2"
      >
        <ConnectChrono />
        <SelectAvatar />
      </TerminalContainer>

      <PreviousPageButton className="mt-3" />
    </>
  );
}
