import { ReactNode, lazy } from "react";
const Login = lazy(() => import("../../views/auth/login"))
const Home = lazy(() => import("../../views/app/Home"))
const Patient = lazy(() => import("../../views/app/NewPatient"))

interface AppRoute {
  path: string;
  element: ReactNode;
  meta: {
    layout: string;
    publicRoute: boolean;
  };
}

const AppRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Login />,
    meta: {
      layout: "MainLayout",
      publicRoute: true,
    },
  },
  {
    path: "/home",
    element: <Home />,
    meta: {
      layout: "MainLayout",
      publicRoute: true,
    },
  },
  {
    path: "/Patient",
    element: <Patient />,
    meta: {
      layout: "MainLayout",
      publicRoute: true,
    },
  },
];

export default AppRoutes;
