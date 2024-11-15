import React, { useEffect, useState } from "react";
import { Search } from "../Search/Index";

export const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(params) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=6abfa40fec9c134363e0f8bbccaa3525`
      );
      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  const getCurrentdate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchWeatherData("bengaluru");
  }, []);
  console.log(weatherData);
  return (
    <>
     <h1>Weather App</h1>
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="Loading">Loading.......</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentdate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData &&
              weatherData.weather &&
              weatherData.weather[0].description}
          </p>
          <div className="weather-info">
            <div className="columns">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>wind speed</p>
              </div>
            </div>

            <div>
              <div className="columns">
                <p className="humidity">{weatherData?.main?.humidity}% --</p> 
                <p> Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
