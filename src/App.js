import Axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weathers, setWeathers] = useState([]);
  const API_KEY = "36322319baf21d82da4b8b8bdf9388b1";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

  async function getWeather() {
    let result = await Axios.get(url);
    setWeathers(result.data);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };
  return (
    <>
      <div className="Containers">
        <div className="card">
          <img
            className="weather01"
            src="./img/weather.jpg"
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <div className="container">
            <h2 className="kk">React Weather Application</h2>
            <h3 className="kk">Find Weather Of Your City</h3>

            <div className="wrap">
              <div className="search">
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Enter Your City Name"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                  <button
                    onClick={getWeather}
                    type="submit"
                    className="searchButton"
                  >
                    <i className="fa fa-search" />
                    Search
                  </button>
                </form>
                <div>{/* {JSON.stringify(weathers)} */}</div>
              </div>
            </div>
          </div>
          {weathers && (
            <>
              <h3 className="kk">Temperature: {weathers.main && weathers.main.temp}</h3>
              <h3 className="kk">Country Name: {weathers.sys && weathers.sys.country}</h3>
              <h3 className="kk">Wind Speed: {weathers.wind && weathers.wind.speed} Km/hour</h3>
            </>
          )}
        </div>
      </div>
      {/* <Weather /> */}
    </>
  );
}

export default App;
