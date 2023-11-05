"use client"
// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import { useClient } from 'next/data-client';

const Weather = ({ lat, lon, apiKey }) => {
  // Use useClient hook to enable client-side rendering
  const { useClient: client } = useClient();
  
  // State and API URL remain the same
  const [weatherData, setWeatherData] = useState(null);
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  // Wrap useEffect in client() to ensure it's only executed on the client side
  client(() => {
    useEffect(() => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    }, [API_URL]);
  });

  // Render weather information
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
