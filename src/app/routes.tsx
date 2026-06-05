import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/users/Users";
import Customers from "../pages/customers/Customers";
import Policies from "../pages/policies/Policies";
import Payments from "../pages/payments/Payments";
import Claims from "../pages/claims/Claims";
import Reports from "../pages/reports/Reports";
import Notificatios from "../pages/notifications/Notifications"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "customers",
        element: < Customers />,
      },
      {
        path: "policies",
        element: < Policies />,
      },
      {
        path: "payments",
        element: < Payments />,
      },
      {
        path: "claims",
        element: < Claims />,
      },
      {
        path: "reports",
        element: < Reports />,
      },
      {
        path: "notificatios",
        element: < Notificatios />,
      },
    ],
  },
]);