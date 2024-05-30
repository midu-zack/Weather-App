import React from "react";
import "./Weather.css";

const Weather = ({ weatherData, searchText }) => {
  if (!weatherData.main && !weatherData.error) {
    return null;
  }

  return (
    <div className="weather-container">
      {/* Display the search text */}
      {/* <div className="search-text">{searchText && `Weather for ${searchText}`}</div> */}
      {weatherData.weather ? (
        <div className="weather-card">
          {/* Display weather data */}
          <div className="weather-content">
            <div className="weather-info">
              <p className="text-xl">
                {weatherData.name}, {weatherData.sys.country}
              </p>
              <p className="text-sm">{weatherData.weather[0].description}</p>
              <h1 className="text-6xl font-semibold">{weatherData.main.temp.toFixed()}°C</h1>
              <div className="weather-details-info">
                <div className="weather-detail">
                  <p>Feels Like</p>
                  <p className="font-bold">{weatherData.main.feels_like.toFixed()}°C</p>
                </div>
                <div className="weather-detail">
                  <p>Humidity</p>
                  <p className="font-bold">{weatherData.main.humidity}%</p>
                </div>
                <div className="weather-detail">
                  <p>Wind Speed</p>
                  <p className="font-bold">{weatherData.wind.speed.toFixed()} KPH</p>
                </div>
                <div className="weather-detail">
                  <p>Pressure</p>
                  <p className="font-bold">{weatherData.main.pressure} hPa</p>
                </div>
              </div>
            </div>
            <div className="weather-image">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt=""
                className="weather-icon"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
