// ** Router imports
import { Navigate, useRoutes } from "react-router-dom";
import React from "react";

// ** Utils
import { getUserData } from "../utility";

// ** GetRoutes
import { GetRoutes, DefaultRoute } from "./routes";

const Router: React.FC = () => {
  const allRoutes = GetRoutes();

  const getHomeRoute = () => {
    const token = getUserData();
    if (token) {
      return DefaultRoute;
    } else {
      return "/";
    }
  };

  const routes = useRoutes(allRoutes);

  return (
    <React.Suspense fallback={null}>
      {routes || <Navigate to={getHomeRoute()} />}
    </React.Suspense>
  );
};

export default Router;