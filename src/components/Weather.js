import React from 'react'
import LineChart from './LineChart'
import Forecast from './Forecast'


const Weather = ({ weatherData, chartData }) => {

    const today = new Date();

      const formattedDate = `Today ${today.getDate()} ${today.toLocaleString('default', { month: 'short' })}`;


  return (
      <div>
          {weatherData.weather ? (
              <div className=' w-full  flex flex-col lg:flex-row relative text-gray-300'>
                  <div className=" w-full lg:w-1/2  flex justify-between">
                      <div className='w-full ' >
                          <div className='pb-2 '>
                                <h1 className='font-bold text-white text-base sm:text-lg lg:text-xl py-4 lg:py-2'>
                                     CURRENT WEATHER
                                  </h1>
                              <div className='w-full flex flex-row items-center justify-around h-full'>

                                   <div className='flex flex-col'>
                                   <h1 className='text-base sm:text-lg lg:text-xl font-semibold '>
                                    {weatherData.name}, {weatherData.sys.country}
                                      </h1>
                                        <p className='text-sm sm:text-base lg:text-lg'>
                                         {formattedDate}
                                      </p>
                                  </div>

                                  <div className='flex flex-col'>
                                   <h1 className='text-base sm:text-lg lg:text-xl font-semibold'>
                                      {weatherData.main.temp.toFixed()} °C
                                  </h1>
                                   <p className='text-sm sm:text-base lg:text-lg'>
                                  {weatherData.weather[0].description}
                                      </p></div>

                                 <div> <div className='flex  '>
                                   <h1 className='text-base lg:text-lg pr-2'>
                                     High
                                  </h1>
                                   <p className='text-base lg:text-lg'>
                                  {weatherData.main.temp_max.toFixed()} °C
                                      </p></div>

                                    <div className='flex  '>
                                   <h1 className='text-base lg:text-lg pr-2'>
                                     Low
                                  </h1>
                                   <p className='text-base lg:text-lg'>
                                  {weatherData.main.temp_min.toFixed()} °C
                                  </p></div></div>
                              </div>


                          </div>


                          <div className='w-full'>
                               <h1 className='font-bold text-white text-base sm:text-lg lg:text-xl py-4 lg:py-2'>
                                     AIR CONDITIONS
                                  </h1>
                              <div className='flex flex-col lg:flex-row lg:justify-center'>
                                  <div className='flex w-full justify-between'>
                                        <div className='w-1/2 p-2'>
                                     <div class='flex items-center justify-center'>
                                        <div class='w-7'>
                                            <img src="../assets/temp_icon.png" alt="temperature-icon" />
                                        </div>
                                        <p class='text-base lg:text-lg pl-1'>Real Feel</p>
                                    </div>

                                       <h1 className='text-lg lg:text-xl font-semibold'>
                                      {weatherData.main.feels_like.toFixed()} °C
                                  </h1>
                                  </div>

                                   <div className='w-1/2 p-2'>
                                      <div className='flex justify-center'>
                                       <div className='w-6'> <img src="../assets/wind_icon.png" alt="wind-icon" /></div>
                                        <p className='text-base lg:text-lg pl-2'>Wind</p>
                                      </div>

                                       <h1 className='text-lg lg:text-xl font-semibold'>
                                      {weatherData.wind.speed} m/s
                                  </h1>
                                  </div>
                                  </div>

                                  <div className='flex justify-between'>
                                    <div className='w-1/2 p-2'>
                                      <div className='flex justify-center'>
                                     <div class='w-7'>
                                         <img src="../assets/cloud_icon.png" alt="cloud-icon" />
                                     </div>
                                        <p className='text-base lg:text-lg pl-2'>Clouds</p>
                                      </div>

                                       <h1 className='text-lg lg:text-xl font-semibold'>
                                      {weatherData.clouds.all} %
                                  </h1>
                                  </div>

                                   <div className='w-1/2 p-2'>
                                      <div className='flex justify-center'>
                                       <div class='w-6'>
                                            <img src="../assets/humidity_icon.png" alt="humidity-icon" />
                                        </div>
                                        <p className='text-base lg:text-lg pl-2'>Humidity</p>
                                      </div>

                                       <h1 className='text-lg lg:text-xl font-semibold'>
                                      {weatherData.main.humidity} %
                                  </h1>
                                  </div>

                                  </div>

                              </div>
                          </div>

                          <section className=' w-full h-full px-2 py-4 lg:py-2 '>
                        <LineChart chartData={chartData}/>
                          </section>
                      </div>
                  </div>

                  <section className="w-full lg:w-1/2 h-full flex justify-center items-center py-4 lg:py-0">
                        <Forecast chartData={chartData}/>
                  </section>
              </div>
      ): null}
      </div>
  )
}

export default Weather