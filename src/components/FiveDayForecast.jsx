import React from "react";

const FiveDayForecast = ({ forecastData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  return (
    <div className="bg-gray-700 text-white rounded-md w-[300px] px-4 mt-3 py-3">
      {forecastData.list.slice(0, 5).map((item, index) => (
        <div key={index} className="mb-6 flex justify-between items-center">
          <div>
            <div className="text-sm font-bold">
              {Math.round(item.main.temp)}°c
            </div>
          </div>
          <div>
            <div className="text-sm font-bold">{formatDate(item.dt_txt)}</div>
          </div>
          <div>
            <div className="text-sm">{item.weather[0].description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
