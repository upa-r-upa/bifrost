import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import Root from "./App";

import RequireAuth from "@/components/RequireAuth";
import ROUTES from "@/constants/routes";

import { AccountPage, ErrorPage, MainPage } from "@/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Root />} errorElement={<ErrorPage />}>
      <Route index path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />

      <Route path={ROUTES.AUTH} element={<RequireAuth />}>
        {/* Require auth pages */}
      </Route>
    </Route>
  )
);

export default router;
