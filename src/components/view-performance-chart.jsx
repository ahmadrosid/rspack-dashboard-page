import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { month: "Feb", viewCount: 1500, percentage: 85 },
  { month: "Apr", viewCount: 3400, percentage: 110 },
  { month: "May", viewCount: 2500, percentage: 125 },
  { month: "Jun", viewCount: 2800, percentage: 140 },
  { month: "Jul", viewCount: 3000, percentage: 160 },
];

const COLORS = ["#d1d5db", "#0088FE", "#d1d5db", "#d1d5db"];

const ViewPerfomanceChart = () => {
  return (
    <PieChart width={290} height={150} data={data}>
      <Pie
        dataKey="viewCount"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="80%"
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        label={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ViewPerfomanceChart;
