import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, PieController } from "chart.js";
import "./style.css";

Chart.register(ArcElement, PieController);

export default function PieChart({ data }) {
  if (!data || typeof data !== "object") {
    return null; 
  }


  const formatData = (data) => {
    return {
      labels: ["Entrada", "Saída"],
      datasets: [
        {
          data: [data["Entrada"] || 0, data["Saída"] || 0],
          backgroundColor: ["#FD377E", "#36A2EB"],
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    };
  };


  const chartData = formatData(data);

  const chartOptions = {
    maintainAspectRatio: false, 
    responsive: false, 
    width: 300, 
    height: 200, 
   
  };
  const pieOptions = {
    legend: {
      display: true,
      position: "bottom", 
      labels: {
        fontColor: "#333", 
        fontSize: 14, 
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <Pie data={chartData} options={{ ...chartOptions, ...pieOptions }} />
      <ul className="chart-legend">
        <li className="entrada">Entrada</li>
        <li className="saida">Saída</li>
      </ul>
    </div>
  );
}
