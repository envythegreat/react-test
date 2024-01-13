import { ReactNode, lazy } from "react";
const Login = lazy(() => import("../../views/auth/login"))

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
];

export default AppRoutes;
