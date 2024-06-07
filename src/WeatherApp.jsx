import React, { useState } from 'react'; 
import InfoBox from "./InfoBox"; 
import SearchBox from './Search';
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Greenland",
        temp: 15.75,
        feelsLike: 15.7, 
        tempMin: 14.5,
        tempMax: 17.6,
        humidity: 89,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weather-app-container">
            <h2 className="app-title">Weather App By Rajat Patel</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
