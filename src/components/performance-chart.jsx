import {
  AreaChart,
  Area,
  CartesianGrid,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", viewCount: 200, completionCount: 300 },
  { month: "Feb", viewCount: 500, completionCount: 400 },
  { month: "Mar", viewCount: 400, completionCount: 500 },
  { month: "Apr", viewCount: 550, completionCount: 500 },
  { month: "May", viewCount: 500, completionCount: 700 },
  { month: "Jun", viewCount: 600, completionCount: 620 },
  { month: "Jul", viewCount: 500, completionCount: 720 },
];

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
        <XAxis dataKey="month" strokeDasharray="4 4" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" strokeDasharray="4 4" />
        <Legend />
        <Tooltip />
        <Area
          type="natural"
          dataKey="completionCount"
          stroke="#9ca3af"
          fill="#d1d5db"
        />
        <Area
          type="natural"
          dataKey="viewCount"
          stroke="#3b82f6"
          fill="#60a5fa"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
