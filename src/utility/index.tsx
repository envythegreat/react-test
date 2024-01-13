import { DefaultRoute } from "../routes/routes";

// Check user role for redirect to exact Routes
export const getHomeRouteForLoggedInUser = (userRole: string): string => {
  if (userRole === "admin") return DefaultRoute;
  if (userRole === "client") return "/access-control";
  return "/";
};

export const getUserData = (): User => {
  // Replace the following line with your logic to retrieve user data
  const userData: string | null = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

export interface User {
  username: string;
  password: string;
  role: string;
}