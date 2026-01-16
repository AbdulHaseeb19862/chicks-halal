import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Customer from "../pages/dashboard/Customer";
import Overviews from "../pages/dashboard/Overviews";
import Categories from "../pages/dashboard/Categories";
import Products from "../pages/dashboard/Products";
import Orders from "../pages/dashboard/Orders";
import Reviews from "../pages/dashboard/Reviews";
import OrderCatering from "../pages/dashboard/OrderCatering";
import Contacts from "../pages/dashboard/Contacts";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* Dashboard (Protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customer />} />
        <Route path="overviews" element={<Overviews />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="order-catering" element={<OrderCatering />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
