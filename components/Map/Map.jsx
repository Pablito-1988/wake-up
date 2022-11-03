import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import Calc from "./Math";

const style = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Map = () => {
  const [location, setLocation] = useState(null);
  const [destiny, setDestiny] = useState(null);
  const [distance, setDistance] = useState(null);

  console.log(location);
  console.log(destiny);
  console.log(Math.floor(distance*1000))

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  function selectDestiny(e) {
    setDestiny(e.nativeEvent.coordinate);
  }

  useEffect(() => {
    if (location && destiny) {
      setDistance(
        Calc(
          location.latitude,
          location.longitude,
          destiny.latitude,
          destiny.longitude
        )
      );
    }
  }, [ location,destiny]);


  useEffect(()=>{
    const distanceInMtr = distance*1000
    distanceInMtr<200 ? console.log('estas cerca'): console.log('segui durmiendo')
  },[distance])

  return (
    <>
      <View style={style.container}>
        {location ? (
          <MapView
            style={style.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
            onPress={selectDestiny}
            userLocationUpdateInterval={5000}
            showsMyLocationButton /* ={true} */
            zoomEnabled
          >
            <Marker coordinate={location}></Marker>
            {destiny ? (
              <>
                <Circle center={destiny} radius={200}></Circle>
                <Marker coordinate={destiny}></Marker>
              </>
            ) : (
              <>
                <Marker coordinate={location}></Marker>
              </>
            )}
          </MapView>
        ) : (
          <Text>Cargando</Text>
        )}
      </View>
    </>
  );
};
export default Map;
