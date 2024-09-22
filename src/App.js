import React, { useState, useEffect, useCallback } from 'react';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import SearchBox from './components/SearchBox';
import './App.css';

const API_KEY = "5c88de32cc8cea4da78e4be1627d9196";

const App = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric');


  const fetchWeatherData = useCallback(async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Failed to fetch weather data. Please try again.');
    }
  }, [unit]); 

  const fetchForecastData = useCallback(async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setForecastData(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Failed to fetch forecast data. Please try again.');
    }
  }, [unit]); 

  useEffect(() => {
    fetchWeatherData(city);
    fetchForecastData(city);
  }, [city, unit, fetchWeatherData, fetchForecastData]);  

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <SearchBox setCity={setCity} />
      {weatherData && <WeatherCard weatherData={weatherData} unit={unit} />}
      <button onClick={toggleUnit}>
        Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
      <div className="forecast-container">
        {forecastData && forecastData.list
          .filter((_, index) => index % 8 === 0) 
          .slice(0, 5) 
          .map((item, index) => (
            <ForecastCard
              key={index}
              day={new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
              tempHigh={item.main.temp_max}
              tempLow={item.main.temp_min}
              icon={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              unit={unit}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
