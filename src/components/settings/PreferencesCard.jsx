import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const PreferencesCard = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="bg-card border border-border rounded-xl p-5 space-y-4 p-6">
      <h2 className="text-lg font-semibold text-text-primary">Preferences</h2>

      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">Dark Mode</span>
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">Email Notifications</span>

        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default PreferencesCard;
