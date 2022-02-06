import React from "react";
import "./App.css";
import Weather from "./Component/Weather";

function App() {
  const API_KEY = "36322319baf21d82da4b8b8bdf9388b1";

  const url = `https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid=${API_KEY}`;
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
          <h4>
            <b>React Weather Application</b>
          </h4>
          <h3>Find Weather of your city</h3>

          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Enter Your City Name"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
        <Weather/>
        </>
  );
}

export default App;
