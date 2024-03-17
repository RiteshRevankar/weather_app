import React from 'react';

const Forecast = ({ chartData }) => {

  const extractUniqueDays = () => {
    if (!chartData || !chartData.list) return [];

    const uniqueDays = [...new Set(chartData.list.map(item => {
      const date = new Date(item.dt_txt);
      return date.toLocaleDateString(undefined, { weekday: 'long' });
    }))];

    return uniqueDays;
  };

  const uniqueDays = extractUniqueDays();

  return (
    <div className='w-full lg:pl-4'>
      <h1 className='font-bold text-white text-base sm:text-lg lg:text-xl p-2'>WEEKLY FORECAST</h1>
      {uniqueDays.map(day => {
        let forecastDataForDay = chartData.list.find(item => {
          const date = new Date(item.dt_txt);
          return date.toLocaleDateString(undefined, { weekday: 'long' }) === day && date.getHours() === 3;
        });

        if (forecastDataForDay) {
          return (
            <div key={day} className="mb-2 w-full rounded-xl p-2 bg-opacity-10 bg-[#a4a4da]">

              <ul>
                      <li key={forecastDataForDay.dt} className="">

                          <div className="flex  justify-between px-3">
                              <div className="w-1/3 flex flex-col items-start justify-start">
                                  <h3 className="text-base lg:text-lg font-semibold">{day}</h3>
                                   <p className='text-xs sm:text-sm lg:text-base'>{forecastDataForDay.weather[0].description}</p>
                              </div>

                              <div className="w-1/2 flex justify-between text-xs sm:text-sm lg:text-base">
                                  <div className="flex flex-col items-start justify-start">

                                      <div class='flex items-center justify-center pb-1'>
                                        <div class='w-5'>
                                         <img src="../assets/temp_icon.png" alt="temperature-icon" />
                                        </div>
                                        <p className='pl-1'>{forecastDataForDay.main.temp.toFixed()}°C</p>
                                      </div>

                                      <div class='flex items-center justify-center'>
                                        <div class='w-5'>
                                         <img src="../assets/cloud_icon.png" alt="cloud-icon" />
                                        </div>
                                        <p className='pl-2'>{forecastDataForDay.clouds.all}%</p>
                                      </div>


                              </div>

                                  <div className="flex flex-col items-start justify-start">

                                      <div class='flex items-center justify-center pb-1'>
                                        <div class='w-5'>
                                         <img src="../assets/wind_icon.png" alt="wind-icon" />
                                        </div>
                                        <p className='pl-1'>{forecastDataForDay.wind.speed} m/s</p>
                                      </div>

                                      <div class='flex items-center justify-center'>
                                        <div class='w-5'>
                                         <img src="../assets/humidity_icon.png" alt="humidity-icon" />
                                        </div>
                                        <p className='pl-2'>{forecastDataForDay.main.humidity}%</p>
                                      </div>
                              </div></div>

                          </div>
                </li>
              </ul>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Forecast;
