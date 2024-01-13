// React Imports
import { Suspense, ReactNode } from "react";
import { Navigate, } from "react-router-dom";

// Utils
import { getUserData, getHomeRouteForLoggedInUser, User } from "../../utility";

interface PublicRouteProps {
  children: ReactNode;
  route?: any;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children, route }) => {
  if (route) {
    const user: User = getUserData();

    const restrictedRoute = route.meta && route.meta.restricted;

    if (user && restrictedRoute) {
      return <Navigate to={getHomeRouteForLoggedInUser(user.role)} />;
    }
  }

  return <Suspense fallback={null}>{children}</Suspense>;
};

export default PublicRoute;