import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../../theme/theme";

const ThemeToggle = () => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-card border border-border hover:bg-card-muted transition"
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
    </button>
  );
};

export default ThemeToggle;