import ROUTES from "@/constants/routes";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const location = useLocation();
  const authLoading = true;
  const isAuthorized = false;

  if (authLoading) {
    return (
      <div className="fixed top-0 left-0 w-full flex items-center h-full z-30">
        <div className="w-full h-full bg-black bg-opacity-20 absolute"></div>
        <div className="text-center w-full ">
          <span className="loading loading-dots loading-lg"></span>

          <p>Retrieving authentication information.</p>
          <p>Please wait a moment.</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return <Navigate to={ROUTES.MAIN} state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
