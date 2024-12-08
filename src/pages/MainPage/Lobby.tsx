import TerminalContainer from "@/components/TerminalContainer";
import ROUTES from "@/constants/routes";
import { formatAddress } from "@/utils/format";
import { NavLink } from "react-router-dom";

interface Navigation {
  name: string;
  path: ROUTES;
}

const NavigationList: Array<Navigation> = [
  { name: "Market", path: ROUTES.MARKET },
  { name: "Workshop", path: ROUTES.WORKSHOP },
  { name: "World boss", path: ROUTES.WORLD_BOSS },
  { name: "Arena", path: ROUTES.ARENA },
  { name: "Monster collection", path: ROUTES.MONSTER_COLLECTION },
  { name: "Patrol reward", path: ROUTES.PATROL_REWARD },
  { name: "Adventure", path: ROUTES.ADVENTURE },
  { name: "Collection", path: ROUTES.COLLECTION },
];

const MenuList: Array<Navigation> = [
  {
    name: "Ranking",
    path: ROUTES.RANKING,
  },
  {
    name: "Inventory",
    path: ROUTES.INVENTORY,
  },
  {
    name: "Production status",
    path: ROUTES.PRODUCTION_STATUS,
  },
  {
    name: "Mail",
    path: ROUTES.MAIL,
  },
  {
    name: "Settings",
    path: ROUTES.SETTINGS,
  },
];

export default function Lobby() {
  return (
    <>
      <TerminalContainer title="Avatar info" type="sub" className="">
        <div className="flex items-center gap-3">
          <p>Name</p>
          <p>Uparupa</p>
        </div>

        <div className="flex items-center gap-3">
          <p>Address</p>
          <p>{formatAddress("0x2F2468F90B9CC5E4992Edfb87d9B8A018959c352")}</p>
        </div>

        <div className="flex items-center gap-3">
          <p>Level</p>
          <p>59</p>
        </div>

        <div className="flex items-center gap-3">
          <p>Exp</p>
          <p>374/600</p>
        </div>
      </TerminalContainer>

      <TerminalContainer
        title="Menu"
        type="sub"
        className="flex gap-3 flex-wrap"
      >
        {MenuList.map(({ name, path }) => {
          return (
            <NavLink to={path} key={name}>
              <button className="btn">{name}</button>
            </NavLink>
          );
        })}
      </TerminalContainer>

      <TerminalContainer
        title="Main service"
        type="sub"
        className="flex gap-3 flex-wrap"
      >
        {NavigationList.map(({ name, path }) => {
          return (
            <NavLink to={path} key={path}>
              <button className="btn">{name}</button>
            </NavLink>
          );
        })}
      </TerminalContainer>
    </>
  );
}
