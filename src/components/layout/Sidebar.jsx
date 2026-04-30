import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  Hexagon,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Orders", path: "/orders", icon: ShoppingCart },
  { name: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = ({ collapsed }) => {
  return (
    <div className="h-full bg-surface border-r border-border p-4 flex flex-col">
      <div
        className={`flex items-center text-xl font-semibold mb-8 ${
          collapsed ? "gap-0 justify-center" : "gap-2"
        }`}
      >
        <Hexagon className="h-8 w-8 text-primary" />
        {!collapsed && <span className="text-xl font-semibold">Donezo</span>}
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center ${
                      collapsed ? "justify-center" : "gap-3"
                    } px-3 py-2 rounded-lg transition-all
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-text-secondary hover:bg-card hover:text-text-primary"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {!collapsed && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-4">
        <button
          className={`w-full flex items-center ${
            collapsed ? "justify-center" : "gap-3"
          } px-3 py-2 rounded-lg text-sm font-medium 
          text-text-secondary 
          hover:bg-danger/10 hover:text-danger 
          transition`}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
