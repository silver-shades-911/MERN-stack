import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfoCard from "./WeatherInfoCard";
import "./weatherApp.css";
import app_logo from "./assets/app_logo.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({});

  // function which pass as prop to invoke setWeatherInfo & update weatherinfo
  function handleUpdateWeatherInfoProps(updatedWeatherInfo) {
    setWeatherInfo(updatedWeatherInfo);
  }

  return (
    <div id="weatherApp">
      <nav className="navbar">
        <img src={app_logo} alt="Logo" className="logo" />
        <p className="brandName">Weather Boy</p>
      </nav>
      <div className="mainContainer">
        <SearchBar
          handleUpdateWeatherInfoProps={handleUpdateWeatherInfoProps}
        />
        <WeatherInfoCard weatherInfo={weatherInfo} />
      </div>
    </div>
  );
}
