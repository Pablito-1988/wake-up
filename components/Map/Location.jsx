import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Link } from "react-router-native";
import Map from "./Map";
import { LocationContext } from "../Context/LocationContext";

const style = StyleSheet.create({
  mapWrapper: {
    flex: 1,
    width: 400,
    height: 400,
  },
  locationSelectButtonContainer: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  locationSelectButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 40,
    backgroundColor: "green",
    borderRadius: 10,
  },
  locationSelectButtonText: {
    color: "white",
  },
});

const Location = () => {
  const [showMap, setShowMap] = useState(false);
  const { ubicacion } = useContext(LocationContext);
  console.log(ubicacion);

  useEffect(() => {
    if (ubicacion != null) {
      setShowMap(true);
    }
  }, []);

  return (
    <>
      <View>
        {!showMap ? (
          <View style={style.locationSelectButtonContainer}>
            <TouchableOpacity style={style.locationSelectButton}>
              <Text
                style={style.locationSelectButtonText}
                onPress={() => setShowMap(true)}
              >
                Seleccionar un punto en el mapa
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {showMap && (
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
