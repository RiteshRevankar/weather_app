import React from 'react'
import LineChart from './LineChart'


const Weather = ({ weatherData, chartData }) => {

  return (
      <div>
          {weatherData.weather ? (
              <div className=' w-full  flex relative text-gray-400'>
                  <div className=" w-1/2  flex justify-between">
                      <div className='w-full ' >
                          <div className='pb-2 '>
                                <h1 className='font-bold text-gray-300 text-xl py-2'>
                                     CURRENT WEATHER
                                  </h1>
                              <div className='w-full flex flex-row items-center justify-around h-full'>

                                   <div className=''>
                                   <h1 className='text-2xl font-semibold '>
                                    {weatherData.name}, {weatherData.sys.country}
                                  </h1>
                                  </div>

                                  <div className='flex flex-col'>
                                   <h1 className='text-2xl font-semibold'>
                                      {weatherData.main.temp.toFixed()} °C
                                  </h1>
                                   <p className='text-xl'>
                                  {weatherData.weather[0].description}
                                      </p></div>

                                 <div> <div className='flex  '>
                                   <h1 className='text-lg pr-2'>
                                     High
                                  </h1>
                                   <p className='text-lg'>
                                  {weatherData.main.temp_max.toFixed()} °C
                                      </p></div>

                                    <div className='flex  '>
                                   <h1 className='text-lg pr-2'>
                                     Low
                                  </h1>
                                   <p className='text-lg'>
                                  {weatherData.main.temp_min.toFixed()} °C
                                  </p></div></div>
                              </div>


                          </div>


                          <div className='w-full'>
                               <h1 className='font-bold text-gray-300 text-xl py-2'>
                                     AIR CONDITIONS
                                  </h1>
                              <div className='flex justify-between'>
                                  <div className='w-1/4 p-2'>
                                     <div class='flex justify-center'>
    <div class='w-7 h-7'>
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ThermostatIcon">

            <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path>
        </svg>
    </div>
    <p class='text-lg pl-2'>Real Feel</p>
</div>

                                       <h1 className='text-xl font-semibold'>
                                      {weatherData.main.feels_like.toFixed()} °C
                                  </h1>

                                  </div>
                                   <div className='w-1/4 p-2'>
                                      <div className='flex justify-center'>
                                       <div className='w-7 h-7'>  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AirIcon"><path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path></svg></div>
                                        <p className='text-lg pl-2'>Wind</p>
                                      </div>

                                       <h1 className='text-xl font-semibold'>
                                      {weatherData.wind.speed} m/s
                                  </h1>

                                  </div>
                                   <div className='w-1/4 p-2'>
                                      <div className='flex justify-center'>
                                       <div className='w-7 h-7'><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterDramaIcon"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path></svg></div>
                                        <p className='text-lg pl-2'>Clouds</p>
                                      </div>

                                       <h1 className='text-xl font-semibold'>
                                      {weatherData.clouds.all.toFixed()} %
                                  </h1>

                                  </div>
                                   <div className='w-1/4 p-2'>
                                      <div className='flex justify-center'>
                                       <div className='w-7 h-7 text-gray-400'> <svg id="_x32_3_Humidity_2_" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="_x32_3_Humidity"><g id="_x32_3_Humidity_1_"><g><path d="m330.9 4.5c-2-2.8-5.2-4.5-8.7-4.5s-6.7 1.7-8.7 4.5c-5.4 7.7-107.7 152.5-149.8 258.9-6.8-.6-13.4-2.6-19.5-6.3-21.1-12.8-47.3-12.9-68.4 0-14.3 8.7-32 8.7-46.2 0-5-3.1-11.6-1.5-14.7 3.6-3.1 5-1.5 11.6 3.6 14.7 21.1 12.9 47.3 12.9 68.4 0 14.3-8.7 32-8.7 46.3 0 7.2 4.4 15.1 7.2 23.1 8.6-3.7 11.1-6.5 21.5-8.2 31.1-1.3-.6-2.5-1.2-3.7-1.9-21-12.8-47.1-12.8-68.2-.1-4.6 2.6-6.6 8.2-4.6 13.2 2.2 5.5 8.4 8.1 13.9 5.9.5-.2 1.1-.5 1.6-.8 14.3-8.7 32-8.7 46.3 0 4.1 2.5 8.4 4.3 12.7 5.8.1 11.9 1.4 23.5 3.7 34.7-1.8-.8-3.6-1.7-5.4-2.8-21.1-12.8-47.3-12.8-68.4 0-14.3 8.7-32 8.7-46.2 0-5-3.1-11.6-1.5-14.7 3.6-3.1 5-1.5 11.6 3.6 14.7 21.1 12.9 47.3 12.9 68.4 0 14.3-8.7 32-8.7 46.3 0 7.3 4.4 15.2 7.2 23.3 8.6 24.4 67.5 89.4 116 165.5 116 97.3 0 176.4-79.1 176.4-176.3 0-93.9-160.8-321.6-167.7-331.2zm-8.7 486.2c-64.2 0-119.4-39.2-142.9-95 7.7-1.4 15.3-4.1 22.3-8.4 14.3-8.7 32-8.7 46.3 0 10.5 6.4 22.3 9.6 34.2 9.6s23.7-3.2 34.3-9.7c14.2-8.6 31.7-8.7 45.9-.2 4.4 2.6 10.3 2.1 13.7-1.8 4.6-5.1 3.2-12.9-2.4-16.3-21.1-12.8-47.3-12.8-68.5.1-14.2 8.7-32 8.7-46.3 0-21.1-12.8-47.3-12.8-68.4 0-5.7 3.4-11.9 5.5-18.2 6.2-2.9-11-4.6-22.5-5-34.3 11.8 0 23.7-3.2 34.3-9.6 14.3-8.7 32-8.7 46.3 0 10.5 6.4 22.3 9.6 34.2 9.6 8.1 0 16.3-1.5 24-4.6 5.6-2.2 8-8.9 4.8-14l-1.2-1.9c-2.5-4-7.5-5.4-11.9-3.8-12.7 4.8-27 3.6-38.9-3.7-21.1-12.8-47.3-12.8-68.4 0-6.7 4.1-14.2 6.2-21.8 6.4 1.8-10.7 5.2-22.7 9.8-35.6 8-1.4 15.9-4.2 23.1-8.6 14.3-8.7 32-8.7 46.3 0 10.5 6.4 22.3 9.6 34.2 9.6s23.7-3.2 34.3-9.7c14.2-8.6 31.7-8.7 45.9-.2 4.4 2.6 10.3 2.1 13.7-1.8 4.6-5.1 3.2-12.9-2.4-16.3-21.1-12.8-47.3-12.8-68.5.1-14.2 8.7-32 8.7-46.3 0-21.6-13.2-48.6-12.8-70 1-.1-.1 0 0-.1-.1 36.4-84.5 108.5-192.3 133.4-228.6 33.9 49.3 155.1 231 155.1 306.3.2 85.7-69.4 155.3-154.9 155.3z"/></g></g></g></svg></div>
                                        <p className='text-lg pl-2'>Humidity</p>
                                      </div>

                                       <h1 className='text-xl font-semibold'>
                                      {weatherData.main.humidity.toFixed()} %
                                  </h1>

                                  </div>



                              </div>
                          </div>

                          <div className=' w-full h-full p-2'>
<LineChart chartData={chartData}/>
                          </div>
                      </div>
                  </div>

                  <div className="w-1/2 h-full flex justify-between">
                    <div className=' w-full  mx-auto flex justify-between items-center'>
                          <div className='w-full flex flex-col items-start justify-between h-full'>
                              <div className='w-full flex justify-center items-center'>
                                  <h1 className='font-bold text-gray-300 text-xl p-2'>
                                     WEEKLY FORECAST
                                  </h1>

                              </div>

                              <div className='w-full rounded-xl p-7 opacity-10 bg-gray-200'>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      ): null}
      </div>
  )
}

export default Weather