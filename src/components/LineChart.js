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
            .filter(item => item.dt_txt.endsWith("03:00:00"))
            .map(item => item.dt_txt.split("-")[2].split(" ")[0]);
        const temperatures = chartData.list
            .filter(item => item.dt_txt.endsWith("03:00:00"))
            .map(item => item.main.temp);


        setData({
            labels: labels,
            datasets: [
                {
                    label: "Temperature vs Time",
                    data: temperatures,
                    backgroundColor: 'red',

                }
            ]
        });
    }
}, [chartData]);

    return (

        <div>
        <h1 className='font-bold text-white text-base sm:text-lg lg:text-xl py-4'>TEMPERATURE FORECAST</h1>

        <div className=' flex w-full justify-center'>
            <div className='bg-white max-w-[350px] lg:w-full '>
            <Line data={data} />
            </div>
        </div></div>
    );
}

export default LineChart;
