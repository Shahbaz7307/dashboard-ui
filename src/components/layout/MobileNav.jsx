import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Orders", path: "/orders", icon: ShoppingCart },
  { name: "Settings", path: "/settings", icon: Settings },
];

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-border flex justify-around items-center py-2 z-50 lg:hidden">

      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive
                  ? "text-primary"
                  : "text-text-secondary"
              }`
            }
          >
            <Icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        );
      })}

    </div>
  );
};

export default MobileNav;