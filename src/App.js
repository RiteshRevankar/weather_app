import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [forecastdata, setForecastData] = useState({});
  const [errorDialog, setErrorDialog] = useState(false);

  const API_KEY = "689878e8d4dc2a5ec98a9261dffb38dd";
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`${WEATHER_URL}/weather?q=${location}&units=metric&appid=${API_KEY}`)
        .then((response) => {
          setData(response.data);

          axios
            .get(
              `${WEATHER_URL}/forecast?q=${location}&units=metric&appid=${API_KEY}`
            )
            .then((response2) => {
              setForecastData(response2.data);
            })
            .catch((error2) => {
              console.log(error2);
              setErrorDialog(true); // Show error dialog if forecast data fetch fails
            });
        })
        .catch((error) => {
          console.log(error);
          setErrorDialog(true); // Show error dialog if current weather data fetch fails
        });
    }
  };

  const closeErrorDialog = () => {
    setErrorDialog(false);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br p-8 from-[#000b31] to-[#004a8c] ">
      <div className="text-center p-4 border max-w-6xl mx-auto rounded-xl border-gray-600">
        <div className="pb-4">
          <input
            type="text"
            className="py-2 px-4 w-[700px] text-lg capitalize rounded-lg border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none"
            placeholder="Enter location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDownCapture={searchLocation}
          />
        </div>

        <Weather weatherData={data} chartData={forecastdata} />

        {errorDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-lg font-semibold mb-2">
                Error: City Not Found
              </p>
              <button
                className="py-2 px-4 bg-blue-500 text-white rounded-lg focus:outline-none"
                onClick={closeErrorDialog}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
