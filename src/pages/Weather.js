import React, { useState } from "react";
import coordinatesLatLon from "./CoordinatesLatLon";

const WEATHER_API_KEY = "02311b98e398c8f0277c8bf7985b4e09";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?"

function Weather() {

    const [weather, setWeather] = useState();

    function handleSetCoordinates(event) {
        const city = event.target.name;
        const latitude = coordinatesLatLon.filter((obj, index) => obj.city === city)[0].lat;
        const longitude = coordinatesLatLon.filter((obj, index) => obj.city === city)[0].lon;
        console.log(latitude);
        fetch(WEATHER_API_URL + "lat=" + latitude + "&lon=" + longitude + "&appid=" + WEATHER_API_KEY)
            .then(response => response.json())
            .then(response => {
                const temp = (response.main.temp - 273.15).toFixed(2);
                setWeather(temp + '\xB0' + "C")
                console.log(response);
            })
            .catch(err => console.error(err));
    }


    return (<>
        <div className="weather-container">
            {coordinatesLatLon.map((obj, index) => (
                <div key={index}>
                    <button className="button" onClick={handleSetCoordinates} name={obj.city}>{obj.city}</button>
                </div>
            ))
            }
        </div>
        <div>
            <h1 className="weather-text">{weather}</h1>
        </div>
    </>
    )
}

export default Weather;