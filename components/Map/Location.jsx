import React,{useState,useEffect} from "react";
import { View, Text, TouchableOpacity , StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Map from "./Map";


const style= StyleSheet.create({
  mapWrapper:{
    flex:1,
    width:400,
    height:400
  }
})

const Location = () => {
  const[location,setLocation] = useState('')
  const [showMap,setShowMap] = useState(false)
  return (
    <>
    <View>
      <Text>Soy Location </Text>
      <TouchableOpacity>
        <Link to={"/map"}>
          <Text>Seleccionar un punto en el mapa</Text>
        </Link>
      </TouchableOpacity>
        <Map style={style.mapWrapper}></Map>
    </View>
    </>
    
  );
};

export default Location;
