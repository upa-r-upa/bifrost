import TerminalContainer from "@/components/TerminalContainer";

import ConnectChrono from "./ConnectChrono";
import Lobby from "./Lobby";
import SelectAvatar from "./SelectAvatar";

export default function MainPage() {
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
      <Lobby />
    </>
  );
}
