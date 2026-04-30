import StatsCard from "./StatsCard";
import {
  Folder,
  PlayCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      <StatsCard
        title="Total Projects"
        value="24"
        subtitle="All projects"
        icon={Folder}
        highlight
      />

      <StatsCard
        title="Running"
        value="10"
        subtitle="Active projects"
        icon={PlayCircle}
      />

      <StatsCard
        title="Pending"
        value="6"
        subtitle="Waiting tasks"
        icon={Clock}
      />

      <StatsCard
        title="Completed"
        value="8"
        subtitle="Finished work"
        icon={CheckCircle}
      />

    </div>
  );
};

export default StatsGrid;