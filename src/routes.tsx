import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import Root from "./App";

import { ErrorPage, RequireAuth } from "@/pages";
import ROUTES from "@/constants/routes";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Root />} errorElement={<ErrorPage />}>
      <Route index path={ROUTES.MAIN} element={<MainPage />} />

      <Route path={ROUTES.AUTH} element={<RequireAuth />}>
        {/* Require auth pages */}
      </Route>
    </Route>
  )
);

export default router;
