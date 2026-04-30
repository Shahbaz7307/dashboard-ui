import { Bell } from "lucide-react";
import Breadcrumb from "../ui/Breadcrumb";
import ThemeToggle from "../ui/ThemeToggle";

const Topbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-6 bg-surface border-b border-border">
      {/* Left: Breadcrumb */}
      <div>
        <Breadcrumb />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        {/* <button className="p-2 rounded-lg bg-card border border-border hover:bg-card-muted transition">
          <Bell className="h-5 w-5" />
        </button> */}

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
            S
          </div>
          <span className="text-sm font-medium hidden sm:block">Shahbaz</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
