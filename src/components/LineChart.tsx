import { setsEqual } from "chart.js/helpers";
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
  { name: "September", revenue: 0 },
  { name: "October", revenue: 20000 },
  { name: "November", revenue: 103000 },
  { name: "December", revenue: 14000 },
  { name: "January", revenue: 2300 },
  { name: "February", revenue: 18000 },
  { name: "March", revenue: 37000 },
  { name: "April", revenue: 9400 },
  { name: "May" },
  { name: "June", revenue: 5000 },
  { name: "July" },
  { name: "August" },
];

const MyLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid  stroke="#aaa" strokeWidth={0.5}/>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" tickFormatter={(value) => `$${value.toLocaleString()}`} tickCount={7}/>
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Legend wrapperStyle={{ color: "#f0ad4e" }} />
          <Line type="linear" dataKey="revenue" stroke="#f0ad4e" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
