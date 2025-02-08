import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  layouts,
} from "chart.js";
import { Card, CardContent, Typography } from "@mui/material";
import { toPadding } from "chart.js/helpers";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the Pie Chart
  const data = {
    labels: ["Marketing", "Revenue Share", "Team", "Development", "Treasury"],
    datasets: [
      {
        label: "Percentages",
        data: [30, 20, 20, 15, 15],
        backgroundColor: [
          "rgb(255, 0, 0, 0.3)",
          "rgb(76, 175, 80, 0.3)",
          "rgb(153, 18, 153, 0.3)",
          "rgb(54, 162, 235,0.3)",
          "rgb(255, 181, 45,0.3)",
        ],
        borderColor: [
          "rgb(255, 0, 0, 0.7)",
          "rgb(76, 175, 80, 0.7)",
          "rgb(153, 18, 153, 0.7)",
          "rgb(54, 162, 235,0.7)",
          "rgb(255, 181, 45,0.7)",
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          "rgb(255, 0, 0, 0.4)",
          "rgb(76, 175, 80, 0.4)",
          "rgb(153, 18, 153, 0.4)",
          "rgb(54, 162, 235,0.4)",
          "rgb(255, 181, 45,0.4)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true, // This makes the legend item shapes into circles
          padding: 20,
        },
        layout: {
          padding: {
            top: 50, // Adds space at the top between chart and legend
            left: 10, // Adds space on the left of the chart
            right: 10, // Adds space on the right of the chart
            bottom: 20, // Adds space at the bottom of the chart
          },
        },
      },
    },
    cutout: "50%", // This creates the inner radius (doughnut effect)
  };
  return (
    <Pie
      data={data}
      options={options}
      style={{ width: "450px", height: "450px", marginLeft: 120 }}
    />
  );
};

export default PieChart;
