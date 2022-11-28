import React from "react";
import clsx from "clsx";
import { Line } from "react-chartjs-2";
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
import styles from "./CommonChart.module.scss";

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

const labels = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
    plugins: {
        legend: {
            position: "top"
        },
    }
};

const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Заработано за неделю",
            data: [39, 29, 41, 20, 8, 6, 0],
            borderColor: "rgba(0,0,0,0.1)",
            backgroundColor: "rgba(255,99,132, 0.3)",
            backdropColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1,
        }
    ]
};

const CommonChart = ({classes}) => {
    return (
        <div className={clsx(classes, styles.chart)}>
            <Line options={options} data={data} />
        </div>
    );
};

export default CommonChart;