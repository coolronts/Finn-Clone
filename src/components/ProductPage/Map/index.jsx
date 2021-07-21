import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";

const Map = ({address}) => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setRegion("no");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  
  const [location, setLocation] = useState(null)
  useEffect(() => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation({"lat":lat,"lng":lng});
      },(error) => {
        console.error(error);
      }
    );
  },[address])
  
  const containerStyle = {height: '400px'};

  return (
    <div data-cy="Maps">
      <p className="text-gray-700 my-6 text-lg font-medium"> {address} </p>
      <LoadScript data-cy="MapLoad" googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={16}
          mapTypeId= "roadmap"
        >
          <Marker position={location}/>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map