import { useAuthStore } from "@/auth/store/auth.store";
import { Navigate, Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  // const user = useAuthStore((state) => state.user);
  const status = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  if (status === "pending") {
    checkAuthStatus();
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
