import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Loader from "../components/ui/Loader";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Users = lazy(() => import("../pages/Users"));
const Orders = lazy(() => import("../pages/Orders"));
const Settings = lazy(() => import("../pages/Settings"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
