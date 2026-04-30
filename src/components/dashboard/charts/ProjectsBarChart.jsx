import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProjectsBarChart = ({ data }) => {
  // Example grouping (fake months)
  const chartData = [
    { name: "Jan", projects: 4 },
    { name: "Feb", projects: 6 },
    { name: "Mar", projects: 3 },
    { name: "Apr", projects: 8 },
  ];

  return (
    <div className="bg-card p-4 rounded-xl border border-border h-[300px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
      <h3 className="text-sm font-semibold mb-4 text-text-primary">
        Projects Overview
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="projects" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectsBarChart;
