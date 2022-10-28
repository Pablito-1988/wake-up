import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const style = StyleSheet.create({
  headerContainer: {
    height: 90,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Header = () => {
  return (
    <View style={style.headerContainer}>
      <Link to={"/"}>
        <Text>Soy header </Text>
      </Link>
    </View>
  );
};

export default Header;
