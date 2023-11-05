import React, { useState, useEffect } from 'react';

const Weather = ({ lat, lon, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [API_URL]);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather at Latitude: {lat}, Longitude: {lon}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
