import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Link } from "react-router-native";
import Tempo from "../assets/temp.png";
import Location from "../assets/location.png";

const style = StyleSheet.create({
  mainContainer: {
    height:Dimensions.get("window").height,
    alignItems: "center",
    /* justifyContent: "center", */
    
    paddingVertical:25
  },
  mainTitle:{
    fontSize:25,
    textAlign:'center'
  },
  seccionContainer: {
    width: 200,
    height: 400,
    justifyContent: "space-around",
    marginTop: 50,
    
  },
  seccion: {
    alignItems: "center",
    justifyContent: "center", 
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom:10
  },
  seccionTitle:{
    fontSize:25,
    marginBottom:15
  }
});

const Home = () => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.mainTitle}>Como quieres despertarte?????</Text>
      <View style={style.seccionContainer}>
        <Link to={"/location"}>
          <View style={style.seccion}>
            <Text style={style.seccionTitle}>Localizacion</Text>
            <Image style={style.icon} source={Location}></Image>
          </View>
        </Link>

        <Link to={"/tempo"}>
          <View style={style.seccion}>
            <Text style={style.seccionTitle}>Temporizador</Text>
            <Image style={style.icon} source={Tempo}></Image>
          </View>
        </Link>
      </View>
    </View>
  );
};

export default Home;
