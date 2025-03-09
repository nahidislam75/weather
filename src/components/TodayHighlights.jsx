import React from "react";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import HighlightBox from "./HighlightBox";

const TodayHighlights = ({ weatherData, airQualityData }) => {
  const { main, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi;
  const { co, no, no2, o3 } = airQualityData?.components || {};

  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const highlights = [
    { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon },
    { title: "Pressure", value: `${main.pressure} hPa`, Icon: CompressIcon },
    {
      title: "Visibility",
      value: `${visibility / 1000} km`,
      Icon: VisibilityIcon,
    },
    {
      title: "Feels Like",
      value: `${main.feels_like}°C`,
      Icon: DeviceThermostatIcon,
    },
  ];

  return (
    <div className="bg-gray-700 text-white w-full rounded-xl p-10">
      <div className="text-3xl font-bold mb-6 text-center">
        Today's Highlights
      </div>

      {/* Top Section: Air Quality & Sunrise/Sunset */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Air Quality Index */}
        <div className="bg-gray-600 p-6 rounded-xl w-full">
          <div className="flex justify-between items-center text-2xl font-semibold">
            <p>Air Quality Index</p>
            <div className="mt-4 text-lg font-bold px-4 py-1 rounded-md bg-green-500">
              {renderAirQualityDescription(airQualityIndex)}
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <AirIcon className="text-6xl" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 text-lg">
              <div className="text-center">
                <p className="font-bold">CO</p>
                <p>{co} µg/m³</p>
              </div>
              <div className="text-center">
                <p className="font-bold">NO</p>
                <p>{no} µg/m³</p>
              </div>
              <div className="text-center">
                <p className="font-bold">NO₂</p>
                <p>{no2} µg/m³</p>
              </div>
              <div className="text-center">
                <p className="font-bold">O₃</p>
                <p>{o3} µg/m³</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sunrise and Sunset */}
        <div className="bg-gray-600 p-6 rounded-xl w-full">
          <div className="text-2xl font-semibold text-center">
            Sunrise & Sunset
          </div>
          <div className="flex justify-around items-center mt-6">
            <div className="text-center">
              <WbSunnyIcon className="text-6xl" />
              <p className="text-2xl mt-2">
                {new Date(sys.sunrise * 1000).toLocaleTimeString()}
              </p>
            </div>
            <div className="text-center">
              <NightsStayIcon className="text-6xl" />
              <p className="text-2xl mt-2">
                {new Date(sys.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Weather Highlights */}
      <div className="flex flex-wrap sm:flex-nowrap mt-5 justify-center">
        {highlights.map((highlight, index) => (
          <HighlightBox
            key={index}
            title={highlight.title}
            value={highlight.value}
            Icon1={highlight.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TodayHighlights;
