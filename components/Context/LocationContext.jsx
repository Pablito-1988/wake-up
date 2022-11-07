import { createContext, useEffect } from "react";
import { useState } from "react";
import * as Location from "expo-location";
import Calc from "../Map/Math";

export const LocationContext = createContext();

const { Provider } = LocationContext;

const CustomComponent = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [mylocation, setMyLocation] = useState(null);
  const [temp, setTemp] = useState(0);
  const [distance, setDistance] = useState(null);
    console.log(temp)

  useEffect(()=>{
    setTimeout(()=> setTemp(temp + 1 ), 30000)
  },[temp])


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setMyLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, [temp]);

  const mapDestiny = (e) => {
    setLocation(e);
  };
  const destinyErrace= ()=>{
    setLocation(null)
  }

  useEffect(() => {
    if (mylocation && location) {
      setDistance(
        Calc(
          mylocation.latitude,
          mylocation.longitude,
          location.latitude,
          location.longitude
        )
      );
    }
  }, [mylocation, location]);

  const locationContext = {
    ubicacion: location,
    mylocation: mylocation,
    distance: distance,
    mapDestiny,
    destinyErrace,
  };

  return <Provider value={locationContext}>{children}</Provider>;
};
export default CustomComponent;
