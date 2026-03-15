"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

export default function PieChartTemp({ invested = 0, returns = 0 }) {

  const safeInvested = Number(invested) || 0;
  const safeReturns = Number(returns) || 0;

  const data = [
    { name: "Invested Amount", value: safeInvested },
    { name: "Returns Earned", value: safeReturns }
  ];

  const COLORS = ["#224c87", "#da3832"];

  if (safeInvested === 0 && safeReturns === 0) {
    return (
      <div className="text-gray-500 text-center p-6">
        No investment data available
      </div>
    );
  }

  return (
    <div className="w-full h-[300px]">

      <ResponsiveContainer>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
          />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}