import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Nevber";
import MainWeather from "./components/MainWeather";
import axios from "axios";
import TodayHighlights from "./components/TodayHighlights";
import FiveDayForecast from "./components/FiveDayForecast";
import backgroundImage from "./assets/bg.jpg";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Dhaka");
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    try {
      const API_KEY = "d9f644aa4836ea5aae4ba05b1ad85b2b";
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      setWeatherData(weatherResponse.data);
      const { lat, lon } = weatherResponse.data.coord;

      fetchAirQualityData(lat, lon);
      fetchFiveDayForecast(city);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  const fetchFiveDayForecast = async (city) => {
    try {
      const API_KEY = "d9f644aa4836ea5aae4ba05b1ad85b2b";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setFiveDayForecast(response.data);
    } catch (error) {
      console.error("Error fetching the 5-day forecast:", error);
    }
  };

  const fetchAirQualityData = async (lat, lon) => {
    try {
      const API_KEY = "d9f644aa4836ea5aae4ba05b1ad85b2b";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setAirQualityData(response.data.list[0]);
    } catch (error) {
      console.error("Error fetching air quality data:", error);
    }
  };

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar onSearch={handleSearch} />
      {weatherData && airQualityData && (
        <div className="flex flex-col lg:flex-row p-8 gap-5 items-center justify-center lg:mt-20">
          <div className="md:mr-2">
            <MainWeather weatherData={weatherData} />
            <p className="font-bold text-lg mt-5">5 Days Forecast</p>
            {fiveDayForecast && (
              <FiveDayForecast forecastData={fiveDayForecast} />
            )}
          </div>
          <div className="flex flex-col flex-[0.5] gap-5">
            <TodayHighlights
              weatherData={weatherData}
              airQualityData={airQualityData}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
