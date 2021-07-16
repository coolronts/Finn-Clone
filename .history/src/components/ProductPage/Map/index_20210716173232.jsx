import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import dotenv from "dotenv";

const Map = () => {
  Geocode.setApiKey(process.env.GOOGLE_API);
  Geocode.setLanguage("en");
  Geocode.setRegion("no");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  
  console.log(process.env.DB_HOST)
  console.log(process.env.GOOGLE_API)
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
    <>
      <p className="text-gray-700 my-6 text-lg font-medium">Vardeveien 3C, 1182 Oslo</p>
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
    </>
  )
}

export default Map