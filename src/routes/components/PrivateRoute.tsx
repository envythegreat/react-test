// React Imports
import { Suspense, ReactNode } from "react";
import { Navigate, } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  route?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, route }) => {
  // Hooks & Vars
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  console.log(user);

  if (route) {
    let restrictedRoute = false;

    if (route.meta) {
      restrictedRoute = route.meta.restricted;
    }

    if (!user) {
      return <Navigate to="/" />;
    }

    if (user && restrictedRoute) {
      return <Navigate to="/" />;
    }

    if (user && restrictedRoute && user.role === "client") {
      return <Navigate to="/access-control" />;
    }
  }

  return <Suspense fallback={null}>{children}</Suspense>;
};

export default PrivateRoute;
