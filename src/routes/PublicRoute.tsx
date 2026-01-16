import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../api/auth/store";

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Agar user logged in hai to dashboard par bhej do
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Warna login page dikhao
  return <>{children}</>;
};

export default PublicRoute;
