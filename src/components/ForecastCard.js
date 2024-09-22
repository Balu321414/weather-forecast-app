import React from 'react';
import './ForecastCard.css'; // Import any necessary CSS

const ForecastCard = ({ day, tempHigh, tempLow, icon, unit }) => {
  return (
    <div className="forecast-card">
      <h3>{day}</h3>
      <img src={icon} alt="weather icon" />
      <div className="temperature">
        <span className="high">High: {Math.round(tempHigh)}°{unit === 'metric' ? 'C' : 'F'}</span>
        <span className="low">Low: {Math.round(tempLow)}°{unit === 'metric' ? 'C' : 'F'}</span>
      </div>
    </div>
  );
};

export default ForecastCard;
