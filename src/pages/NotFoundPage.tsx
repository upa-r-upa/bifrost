import TerminalContainer from "@/components/TerminalContainer";
import ROUTES from "@/constants/routes";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <TerminalContainer title="404 Not found" type="sub">
      <p>Page not found.</p>
      <p>Or the page may not be ready yet.</p>

      <NavLink to={ROUTES.MAIN}>
        <button className="btn mt-3">Go to Home</button>
      </NavLink>
    </TerminalContainer>
  );
}
