import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
  }
};

const labels = ["26.07.2022", "27.07.2022", "28.07.2022", "29.07.2022", "30.07.2022", "31.07.2022", "01.08.2022", "02.08.2022"];
// const dataChart = [];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Заработано за неделю",
      data: labels.map((_, i) => i),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};

const LineChart = () => {
  return <Line options={options} data={data} />;
}

export default LineChart;
