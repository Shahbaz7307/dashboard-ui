import StatusPieChart from "./charts/StatusPieChart";
import ProjectsBarChart from "./charts/ProjectsBarChart";

const ChartsSection = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <StatusPieChart data={projects} />
      <ProjectsBarChart data={projects} />
    </div>
  );
};

export default ChartsSection;