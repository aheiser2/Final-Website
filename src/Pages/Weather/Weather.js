// import React from 'react'

// export const Weather = () => {
//   return (
//     <div>Weather</div>
//   )
// }

import React, { useState } from "react";
import { Container } from "@material-ui/core";
import "./Weather.css";
import { ReturnButton } from "../../Return-Button";

const api = {
  key: "9452ff7e7b6bf98bc39e78ac3a0f2478",
  base: "https://api.openweathermap.org/data/2.5/",
  base2: "http://api.openweathermap.org/geo/1.0/"
}

function WeatherApp() {
  // const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState({})
  const [USstate, setUSState] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState({});

  // const search = evt => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         setWeather(result);
  //         setQuery('');
  //         console.log(result);
  //       });
  //   }
  // }

  const search = evt => {
    // Promise.all([
    //   fetch(`${api.base}weather?q=${city},${USstate},${country}&units=imperial&APPID=${api.key}`),
    //   fetch(`${api.base2}direct?q=${city},${USstate},${country}&APPID=${api.key}`)
    // ])
    //   .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    //   .then(([data1, data2]) => 
    //     setWeather(data1),
    //     setCity(''),
    //     setCountry(''),
    //     console.log("weather"),
    //     setLocation(data2),
    //     setUSState('')
    //   )
    
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city},${USstate},${country}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('');
          setCountry('');
          console.log(result);
          console.log("weather")
        });
    }

    if (evt.key === "Enter") {
      fetch(`${api.base2}direct?q=${city},${USstate},${country}&APPID=${api.key}`)
        .then(res => res.json())
        .then(result2 => {
          setLocation(result2)
          setUSState('');
          console.log(result2);
          console.log("state")
        });
    }
    
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    // <div className= {(typeof weather.main != "undefined") ? ((weather.main.temp < 50) ? 'app cold' : 'app') : 'app'}>
    <div className= {(typeof weather.main == "undefined") ? 'weather-app' : (weather.weather[0].main == "Rain") ? 'weather-app rain' 
          : (weather.weather[0].main == "Thunderstorm") ? 'weather-app storm' : (weather.weather[0].main == "Snow") ? 'weather-app cold' 
          : (weather.weather[0].main == "Clouds") ? 'weather-app cloudy' : (weather.main.temp < 50) ? 'weather-app cold-sunny' : 'weather-app sunny'}>
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="City"
            onChange={e => setCity(e.target.value)}
            value = {city}
            // onKeyPress={search}
            >
          </input>
          <select name="state" id="state" className="search-bar" placeholder="State"
            onChange={e => setUSState(e.target.value)} value = {USstate}>
              <option>Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
              <option value="AS">American Samoa</option>
              <option value="GU">Guam</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="PR">Puerto Rico</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="VI">Virgin Islands</option>
          </select>				
          {/* <input 
            type="input" 
            className="search-bar" 
            placeholder="State"
            onChange={e => setUSState(e.target.value)}
            value = {USstate}
            onKeyPress={search}>
          </input> */}
          <select id="country" name="country" className="search-bar" placeholder="Country"
            onChange={e => setCountry(e.target.value)} value = {country}>
            <option>Select Country</option>
            <option value="US">United States</option>
            <option value="DE">Germany</option>
            
        </select> 
          {/* <input 
            type="text" 
            className="search-bar" 
            placeholder="Country"
            onChange={e => setCountry(e.target.value)}
            value = {country}
            onKeyPress={search}>
          </input> */}
          <button 
            type="submit" 
            label="submit"
            className="submit-button" 
            placeholder="Submit"
            name="submit"
            onKeyPress={search}>
              Search
          </button>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
        <div className="location-box">
          <div className="location">{weather.name}, {location[0].state}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°F
          </div>
          <div className="weather">
            {weather.weather[0].main}
            <div id="uppercase" className="weather-description">
            {weather.weather[0].description}
            </div>
          </div>
        </div>
        </div>
        ) : ('')}
      </main>
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", justifyContent: 'space-evenly' }}>
        <ReturnButton />
      </Container>
    </div>
  );
}

export default WeatherApp;
