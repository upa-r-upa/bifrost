import TerminalContainer from "@/components/TerminalContainer";
import ROUTES from "@/constants/routes";
import { NavLink, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <TerminalContainer title="404 Not found" type="sub">
      <p>Something went wrong.</p>

      <button className="btn mt-3" onClick={() => navigate(0)}>
        Reload page
      </button>

      <NavLink to={ROUTES.MAIN}>
        <button className="btn mt-3">Go to Home</button>
      </NavLink>
    </TerminalContainer>
  );
}
