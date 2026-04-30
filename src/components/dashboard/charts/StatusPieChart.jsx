import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = {
  running: "#22c55e",
  pending: "#f59e0b",
  completed: "#3b82f6",
};

const StatusPieChart = ({ data }) => {
  const chartData = ["running", "pending", "completed"].map((status) => ({
    name: status,
    value: data.filter((p) => p.status === status).length,
  }));

  return (
    <div className="bg-card p-4 rounded-xl border border-border h-[300px]">
      <h3 className="text-sm font-semibold mb-4 text-text-primary">
        Projects by Status
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={chartData} dataKey="value" outerRadius={80} label>
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusPieChart;
