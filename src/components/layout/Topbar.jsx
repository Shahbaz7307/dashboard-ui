import { Bell, Menu } from "lucide-react";
import Breadcrumb from "../ui/Breadcrumb";
import ThemeToggle from "../ui/ThemeToggle";

const Topbar = ({ collapsed, setCollapsed }) => {
  return (
    <div className="h-full flex items-center justify-between px-6 bg-surface border-b border-border">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:block p-2 rounded-lg hover:bg-card transition"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Breadcrumb />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
            M
          </div>
          <span className="text-sm font-medium hidden sm:block">Mark</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
