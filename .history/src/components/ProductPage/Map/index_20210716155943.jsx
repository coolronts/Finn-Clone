import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";

const Map = () => {
  Geocode.setApiKey("AIzaSyC6doKmnshrEDCjGAuyURuIMDQpBWTRzn8");
  Geocode.setLanguage("en");
  Geocode.setRegion("no");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const [location, setLocation] = useState(null)
  useEffect(() => {
    Geocode.fromAddress("Vardeveien 3C, 1182 Oslo").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation({"lat":lat,"lng":lng});
      },(error) => {
        console.error(error);
      }
    );
  },[])
  
  const containerStyle = {height: '400px'};

  return (
    <LoadScript googleMapsApiKey="AIzaSyC6doKmnshrEDCjGAuyURuIMDQpBWTRzn8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
        mapTypeId= "roadmap"
      >
        <Marker position={location}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map