import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const HighlightCard = () => {
  return (
    <div className="bg-primary text-white rounded-xl p-6 shadow-[var(--shadow-card-lg)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold">Running Projects</h2>

        <p className="text-sm text-white/80 mt-1">
          10 projects are currently active
        </p>

        <h1 className="text-3xl font-bold mt-3">10 Projects</h1>
      </div>

      <div>
        <Button
          variant="outline"
          size="md"
          icon={ArrowRight}
          iconPosition="right"
          className="border-white/30 text-white hover:bg-white/10"
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default HighlightCard;
