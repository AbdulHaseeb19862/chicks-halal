import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Customer from "../pages/dashboard/Customer";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard (Protected) */}
      <Route
        path="/dashboard"
        element={
          // <ProtectedRoute>
          <DashboardLayout />
          // </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customer />} />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
