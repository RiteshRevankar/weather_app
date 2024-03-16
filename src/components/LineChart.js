import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
);

const LineChart = ({ chartData }) => {

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: "Temperature",
                data: [],
                backgroundColor: 'yellow'
            }
        ]
    });

   useEffect(() => {

    if (chartData && chartData.list) {

        const labels = chartData.list
            .filter(item => item.dt_txt.endsWith("12:00:00"))
            .map(item => item.dt_txt.split("-")[2].split(" ")[0]);
        const temperatures = chartData.list
            .filter(item => item.dt_txt.endsWith("12:00:00"))
            .map(item => item.main.temp);


        setData({
            labels: labels,
            datasets: [
                {
                    label: "Temperature vs Time",
                    data: temperatures,
                    backgroundColor: 'red'
                }
            ]
        });
    }
}, [chartData]);

    return (
        <div className='bg-white'>
            <Line data={data} />
        </div>
    );
}

export default LineChart;
