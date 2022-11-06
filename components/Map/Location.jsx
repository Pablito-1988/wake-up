import React, { useState, useEffect , useContext} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Map from "./Map";
import { LocationContext } from "../Context/LocationContext";

const style = StyleSheet.create({
  mapWrapper: {
    flex: 1,
    width: 400,
    height: 400,
  },
});

const Location = () => {
  
  const [showMap, setShowMap] = useState(false);
  const { ubicacion } = useContext(LocationContext);
  console.log(ubicacion)

 useEffect(()=>{
    if(ubicacion!=null){
      setShowMap(true)
    }
 },[])

  return (
    <>
      <View>
        <TouchableOpacity>
          {!showMap ? (
            <Text onPress={()=>setShowMap(true)}>Seleccionar un punto en el mapa</Text>
          ): null}
        </TouchableOpacity>
        {showMap  && (
          <Map
            style={style.mapWrapper}
            close={() => {
              setShowMap();
            }}
          ></Map>
        )}
      </View>
    </>
  );
};

export default Location;
