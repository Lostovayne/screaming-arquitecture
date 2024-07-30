import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export const AuthLayout = () => {
  const { pathname } = useLocation();

  const status = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  if (status === "pending") {
    checkAuthStatus();
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return <Navigate to="/dashboard" />;
  }

  if (pathname === "/auth" || pathname === "/auth/") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
