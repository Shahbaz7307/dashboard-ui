import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      <div
        className={`hidden lg:block transition-all duration-300 ${
          collapsed ? "lg:w-20" : "lg:w-64"
        }`}
      >
        <Sidebar collapsed={collapsed} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-16 flex-shrink-0">
          <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6 pb-20 lg:pb-6">
          <Outlet />
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
