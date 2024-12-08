import { NavLink } from "react-router-dom";

import Lobby from "./Lobby";
import ROUTES from "@/constants/routes";

export default function MainPage() {
  return (
    <>
      <Lobby />

      <NavLink to={ROUTES.ACCOUNT} className="w-max">
        <button className="mt-3 btn">Account settings</button>
      </NavLink>
    </>
  );
}
