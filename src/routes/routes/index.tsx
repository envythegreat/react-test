// React Imports
import { Fragment } from "react";

// Routes Imports
import appRoutes from "./appRoutes";

// Layouts
import MainLayout from "../../layouts/MainLayout";

// Route Components
import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";

// Default Route
const DefaultRoute: string = "/";

// Document title
const TemplateTitle: string = "App Name";

// Define the Layout interface
interface Layouts {
  MainLayout: React.ReactElement;
}

// Merge Routes
const Routes = [...appRoutes];

// Define getLayout
const getLayout: Layouts = {
  MainLayout: <MainLayout />,
};

// Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout: keyof Layouts, defaultLayout: string) => {
  const LayoutRoutes: any[] = [];

  if (Routes) {
    Routes.forEach((route) => {
      // Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        let RouteTag = PrivateRoute;

        // Check for public or private route
        if (route.meta) {
          RouteTag = route.meta.publicRoute ? PublicRoute : PrivateRoute;
        }

        if (route.element) {
          route.element = (
            <Fragment>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Fragment>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
    });
  }
  return LayoutRoutes;
};

const GetRoutes = () => {
  const AllRoutes: any[] = [];
  const layouts: (keyof Layouts)[] = ["MainLayout"];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, "MainLayout");

    AllRoutes.push({
      path: "/",
      children: LayoutRoutes,
      element: getLayout[layoutItem],
    });
  });

  return AllRoutes;
};

export { Routes, GetRoutes, DefaultRoute, TemplateTitle };
