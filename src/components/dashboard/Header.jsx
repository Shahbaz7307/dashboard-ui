import { Download, Plus } from "lucide-react";
import Button from "../ui/Button";

const Header = ({ onAddClick }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">
          Welcome back, Mark 👋
        </h1>
        <p className="text-sm text-text-secondary">
          Plan, prioritize and accomplish your tasks
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button icon={Plus} onClick={onAddClick}>
          Add Project
        </Button>

        <Button icon={Download} variant="outline">
          Import Data
        </Button>
      </div>
    </div>
  );
};

export default Header;
