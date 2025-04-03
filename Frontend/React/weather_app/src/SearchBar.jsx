import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./searchBar.css";

const API_KEY = "a32ddbe080447813dad915e52f2556c8";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";


export default function SearchBar({handleUpdateWeatherInfoProps}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  // handle on change
  function handleNewCity(event) {
    // console.log(event.target.value);
    setCity(event.target.value);
  };

  // Function to send req on API and get res
  async function getWeatherInfo(city) {
    try {

      let respone = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await respone.json();
      // console.log(jsonResponse);
      let weatherInfo = {
          name: jsonResponse.name,
          feels_like: jsonResponse.main.feels_like,
          grnd_level: jsonResponse.main.grnd_level,
          pressure: jsonResponse.main.pressure,
          sea_level: jsonResponse.main.sea_level,
          temp: jsonResponse.main.temp,
          temp_max: jsonResponse.main.temp_max,
          temp_min: jsonResponse.main.temp_min,
          surise: jsonResponse.sys.sunrise,
          sunset: jsonResponse.sys.sunset,
          description: jsonResponse.weather[0].description,
  
      };
      console.log(weatherInfo);
      handleUpdateWeatherInfoProps(weatherInfo);
      setError(false);
      
    } catch (error) {
      console.error(error);
      setError(true);
      setCity("");
      
    }
   ;
  };


  // This function is for handle form submission
  function handleFormSubmit(event) {
    try {
      event.preventDefault();
      // console.log(city);
      setCity("");
      getWeatherInfo(city);
      setError(false);
    } catch (error) {
      setError(true);
      setCity("");
    }
   
  };



  return (
    <form onSubmit={handleFormSubmit} className="searchBox">
      <TextField
        id="outlined-required"
        label="City"
        placeholder="e.g. Pune"
        onChange={handleNewCity}
        value={city}
        className="searchBar"
      />
      {error && <p className="warningMsg">Sorry! We dont have this place data in our app</p>}
      <Button type="submit" variant="outlined" className="searchButton">
        Search
      </Button>
    </form>
  );
}
