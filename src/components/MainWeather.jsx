import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";

const MainWeather = ({ weatherData }) => {
  const temperatureCelsius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "City not available";
  const countryName = weatherData?.sys?.country || "Country not available";
  const timestamp = weatherData?.dt || null;

  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const renderTemperatureIcon = () => {
    if (temperatureCelsius > 23) {
      return <WbSunnyIcon className="ml-2 text-orange-500 text-5xl" />;
    } else if (temperatureCelsius < 10) {
      return <AcUnitIcon className="ml-2 text-blue-500 text-5xl" />;
    } else {
      return <CloudIcon className="ml-2 text-gray-500 text-5xl" />;
    }
  };

  return (
    <div className="bg-gray-700 text-white rounded-lg p-6 w-full max-w-xs mx-auto text-center">
      <div className="text-lg font-medium">Now</div>
      <div className="flex justify-center items-center text-4xl font-bold">
        {temperatureCelsius}°c
        {renderTemperatureIcon()}
      </div>
      <div className="text-sm mt-2 font-light">{weatherDescription}</div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-center gap-1 text-sm">
          <CalendarMonthIcon />
          {currentDate}
        </div>
        <div className="flex items-center justify-center gap-1 text-sm">
          <LocationOnIcon />
          {cityName}, {countryName}
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
