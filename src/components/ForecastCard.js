import React from "react";

const ForecastCard = ({ day, tempHigh, tempLow, icon, unit, }) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="forecast-card">
      <h3>{day}</h3>
      <img src={weatherIcon} alt="Weather icon" />
      <p>
        High: {tempHigh}°{unit === "metric" ? "C" : "F"}
      </p>
      <p>
        Low: {tempLow}°{unit === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};

export default ForecastCard;
