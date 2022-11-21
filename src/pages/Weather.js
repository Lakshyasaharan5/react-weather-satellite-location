import React, { useState } from "react";
import coordinatesLatLon from "./CoordinatesLatLon";

const WEATHER_API_KEY = "";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?"

function Weather() {

    const [latlon, setlatlon] = useState();
    const [emoji, setEmoji] = useState();
    const [weather, setWeather] = useState();
    function handleSetCoordinates(event) {
        const city = event.target.name;
        const latitude = coordinatesLatLon.filter((obj, index) => obj.city === city)[0].lat;
        const longitude = coordinatesLatLon.filter((obj, index) => obj.city === city)[0].lon;
        console.log(latitude);
        setlatlon({
            lat: latitude,
            lon: longitude
        });
        fetch(WEATHER_API_URL + "lat=" + latlon.lat + "&lon=" + latlon.lon + "&appid=" + WEATHER_API_KEY)
            .then(response => response.json())
            .then(response => {
                const temp = (response.main.temp - 273.15).toFixed(2);
                setWeather(temp)
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
    <h1 className="weather-text">{weather} {'\xB0'} C</h1>
</div>
</>
)
}

export default Weather;