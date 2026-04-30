import { Hexagon } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <Hexagon className="h-10 w-10 text-primary animate-spin-slow drop-shadow-[0_0_8px_var(--color-primary)]" />
        </div>

        <p className="text-sm text-text-secondary animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
