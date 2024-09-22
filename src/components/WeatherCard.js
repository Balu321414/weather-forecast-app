import React from "react";

const WeatherCard = ({ weatherData, unit }) => {
  const { name, main, weather } = weatherData;
  const temperature = main.temp;
  const weatherCondition = weather[0].main;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={weatherIcon} alt={weatherCondition} />
      <p>{weatherCondition}</p>
      <p>
        {temperature}°{unit === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};

export default WeatherCard;
