import { AuthLayout } from "@/auth/layout/AuthLayout";
import { Login } from "@/auth/pages/Login";
import { Register } from "@/auth/pages/Register";
import { CoreLayout } from "@/core/layout/CoreLayout";
import { Home } from "@/core/page/Home";
import { DashboardLayout } from "@/dashboard/layout/DashboardLayout";
import { Dashboard } from "@/dashboard/pages/Dashboard";
import { Profile } from "@/dashboard/pages/Profile";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  //? Rutas Publicas
  {
    path: "/",
    element: <CoreLayout />,
    errorElement: <div>Error 404</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  //? Rutas de Autenticación

  {
    path: "auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        index: true,
        element: <Login />,
      },
    ],
  },

  //? Rutas Privadas
  {
    path: "dashboard/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
