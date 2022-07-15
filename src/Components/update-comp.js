
import React, { useState } from 'react';
import pImg from '../assets/pressure.jpeg';
import cldImg from '../assets/cloud-2.jpeg';
import windImg from '../assets/wind.jpeg';



const api = {
    key: "ced22aec0279af79fab812e8bc8f3312",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  function WeatherUpdate() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const [message, setMessage] = useState("");
  
  
    const search = evt =>{
      if(evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery("");
          setWeather(result);
          console.log(result);
        })
        .catch(error=>{
          setMessage(error)
        })
      }
    }
  
  
    const dateBuilder = (d) => {
      let days = ["Sunday","Monday",
      "Tuesday","Wednesday","Thursday","Friday", "Saturday"];
      let months = ["January","February","March","April","May","June","July",
      "August","September","October","November","December"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`;
    }
    return (
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main>
          <div className='search-box'>
            <input
            type="text"
            className="search-bar"
            placeholder='Search....'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}/>
          </div><br/><br/>
          {(typeof weather.main != "undefined") ? (
          <div>
            <h1 className="updateError" style={{fontSize:"20px", color:"red"}}>{message}</h1>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
              <br/><br/>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp - 273.15)}˚C</div>
              <div className='weather'>{weather.weather[0].main}</div>
              <div className="info-box">
                <div className="weatherDesc">
                  <h2><img src={cldImg} width="90" height="90" className='img' alt=""/>
                  <p style={{fontStyle:"italic", fontFamily:"Sofia, sans-serif"}}>Description</p>
                  {weather.weather[0].description}</h2>
                </div><br/>
                <div className='wind-speed'>
                  <h2><img src={windImg} width="90" height="90" className='img' alt=""/>
                  <p style={{fontStyle:"italic", fontFamily:"Sofia, sans-serif"}}>Wind Speed</p>
                  {weather.wind.speed} m/s</h2>
                </div><br/>
                <div className="pressure">
                  <h2 style={{}}><img src={pImg} width="90" height="90" className='img' alt=""/>
                  <p style={{fontStyle:"italic", fontFamily:"Sofia, sans-serif"}}>Pressure</p>
                  {weather.main.pressure} hPa</h2>
                </div>
              </div>
            </div>
          </div>
           ) : ("")}
        </main>
      </div>
    );
  }
  
  export default WeatherUpdate;