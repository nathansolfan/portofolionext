"use client"
import React, { useState } from 'react';

export default function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8922d9269e385fb82a90f182de433573`
        );
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          console.log(responseData);
        } else {
          // Handle error here
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
        </div>

        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like}</p> : null}
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed} MPH</p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
