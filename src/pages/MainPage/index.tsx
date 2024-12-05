import { NavLink } from "react-router-dom";

import Lobby from "./Lobby";
import ROUTES from "@/constants/routes";

export default function MainPage() {
  return (
    <>
      <Lobby />

      <button className="mt-3 btn">
        <NavLink to={ROUTES.ACCOUNT}>Account settings</NavLink>
      </button>
    </>
  );
}
