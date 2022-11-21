import React, { useState } from "react";
import '../style.css';

const GEO_API_KEY = "";
const REV_GEO_API = "https://api.geoapify.com/v1/geocode/reverse?";
const ISS_POS_API = "http://api.open-notify.org/iss-now.json";

function Satellite() {

    const [coordinates, setcoordinates] = useState({});
    const [location, setlocation] = useState();

    function locateSatellite() {

        fetch(ISS_POS_API)
            .then(response => response.json())
            .then(result => {
                const obj = {
                    lat: result.iss_position.latitude,
                    lon: result.iss_position.longitude
                }
                setcoordinates(obj);
            });

        fetch(REV_GEO_API + "lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&apiKey=" + GEO_API_KEY)
            .then(response => response.json())
            .then(result => {
                if (result.features.length) {
                    console.log(result.features[0].properties.formatted);
                    setlocation(result.features[0].properties.formatted);
                } else {
                    console.log("No address found");
                }
            });
    }
    return <>
        <div className="satellite-container">
            <button onClick={locateSatellite} className="button">LOCATE</button>
            <h1 className="location-text">{location}</h1>
        </div>
    </>
}

export default Satellite;