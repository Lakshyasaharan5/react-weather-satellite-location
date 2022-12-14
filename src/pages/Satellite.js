import React, { useEffect, useState } from "react";
import '../style.css';

const GEO_API_KEY = "5366f42bd3cb4c128eb2633680c3de8d";
const REV_GEO_API = "https://api.geoapify.com/v1/geocode/reverse?";
const ISS_POS_API = "http://api.open-notify.org/iss-now.json";

function Satellite() {

    const [location, setlocation] = useState();

    // useEffect(()=>{
    //     locateSatellite();
    // });

    async function locateSatellite() {
        const locationObject = await fetch(ISS_POS_API)
            .then(response => response.json())
            .then(result => {
                const obj = {
                    lat: result.iss_position.latitude,
                    lon: result.iss_position.longitude
                }
                return obj
            });

        fetch(REV_GEO_API + "lat=" + locationObject.lat + "&lon=" + locationObject.lon + "&apiKey=" + GEO_API_KEY)
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