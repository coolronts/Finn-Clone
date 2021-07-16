import React from 'react';
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
        console.log(location);
      },
      (error) => {
        console.error(error);
      }
    );

  },[location])
  
  const containerStyle = {
    height: '400px'
  };

  return (
    
  )
}

export default Map