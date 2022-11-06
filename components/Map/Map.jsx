import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Alert, Pressable } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import Calc from "./Math";
import { LocationContext } from "../Context/LocationContext";

const style = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Map = (props) => {
  const { ubicacion, mapDestiny, mylocation , distance , destinyErrace } = useContext(LocationContext);


 
  function selectDestiny(e) {
    mapDestiny(e.nativeEvent.coordinate);
  }

  useEffect(() => {
    const distanceInMtr = Math.floor(distance * 1000);
    distanceInMtr < 200
      ? console.log('estas cerca')
      : console.log("segui durmiendo");
  }, [distance]);

  return (
    <>
      <View style={style.container}>
        {ubicacion && <Pressable onPress={()=>destinyErrace()}><Text>Eliminar ubicación</Text></Pressable>}
        {distance && <Text>Faltan: {Math.floor(distance * 1000)}mts</Text>}
        {mylocation ? (
          <MapView
            style={style.map}
            initialRegion={{
              latitude: mylocation.latitude,
              longitude: mylocation.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            onPress={selectDestiny}
            userLocationUpdateInterval={5000}
            showsMyLocationButton /* ={true} */
            zoomEnabled
            
          >
            <Marker coordinate={mylocation}></Marker>
            {ubicacion ? (
              <>
                <Marker focusable coordinate={ubicacion}></Marker>
              </>
            ) : (
              <>
                <Marker coordinate={mylocation}></Marker>
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
