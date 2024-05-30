import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [searchText, setSearchText] = useState("");

  const API_KEY = "fbf1d54f2383d12a9390a2902253b3ea";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setSearchText(location);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setData({ error: "Failed to fetch weather data. Please try again later." });
        });
      setLocation("");
    }
  };

  return (
    <div className="app-container">
      <div className="center-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
        />
        {Object.keys(data).length > 0 && <Weather weatherData={data} searchText={searchText} />}
      </div>
    </div>
  );
}

export default App;
