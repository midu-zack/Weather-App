import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Swal from "sweetalert2";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "fbf1d54f2383d12a9390a2902253b3ea";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      }).catch((error) => {
        if (error.response && error.response.status === 404) {
          Swal.fire({
            icon: 'error',
            title: '😐💔..!',
            text: 'Invalid location entered!',
          });
        }
      });
      setLocation("");
    }
  };

  const removeData = () => {
    setData({});
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
        <Weather weatherData={data} />
        {Object.keys(data).length !== 0 && (
          <button className="remove-btn" onClick={removeData}>Remove</button>
        )}
      </div>
    </div>
  );
}

export default App;
