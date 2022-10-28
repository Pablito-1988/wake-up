import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
import Tempo from "../assets/temp.png";
import Location from "../assets/location.png";

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  seccionContainer: {
    width: 400,
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
  },
});

const Home = () => {
  return (
    <View style={style.mainContainer}>
      <Text>Como queres despertarte?????</Text>
      <View style={style.seccionContainer}>
        <Link to={"/location"}>
          <View style={style.seccion}>
            <Text>Localizacion</Text>
            <Image style={style.icon} source={Location}></Image>
          </View>
        </Link>

        <Link to={"/tempo"}>
          <View style={style.seccion}>
            <Text>Temporizador</Text>
            <Image style={style.icon} source={Tempo}></Image>
          </View>
        </Link>
      </View>
    </View>
  );
};

export default Home;
