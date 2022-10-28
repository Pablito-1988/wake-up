import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import Temporizador from "./Temporizador";

const style = StyleSheet.create({
  tempoContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-evenly",
    marginTop: 50,
    alignContent: "center",
  },

  inputContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  button: {
    width: 120,
    height: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
  },
});

const Tempo = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  console.log("hs " + hour + ":" + minute);

  function hourTimer(e) {
    if (Number(e) <= 24) {
      setHour(e /* * 3600000 */);
    } else {
      setHour(0);
      alert("no hay tantas horas en un dia");
    }
  }
  function minuteTimer(e) {
    if (Number(e) <= 59) {
      setMinute(e /* * 60000 */);
    } else {
      setMinute(0);
      alert("una hora tiene 60 min..... elegi la de al lado...");
    }
  }
  function setTimerOn() {
    setShowTimer(true);
    setShowSettings(false)
  }
  function setTimerOff() {
    if (showTimer === true) {
      setShowTimer(false);
      setShowSettings(true);
      setHour(0)
      setMinute(0)

    }
  }

  return (
    <>
      <View style={style.tempoContainer}>
        {showSettings && (
          <>
            <Text>CUANTO TIEMPO QUERES DORMIR?</Text>
            <View style={style.inputWrapper}>
              <View style={style.inputContainer}>
                <Text>HORAS</Text>
                <TextInput
                  style={style.input}
                  onChangeText={hourTimer}
                  value={hour}
                ></TextInput>
              </View>
              <View style={style.inputContainer}>
                <Text>MINUTOS</Text>
                <TextInput
                  style={style.input}
                  onChangeText={minuteTimer}
                  value={minute}
                ></TextInput>
              </View>
            </View>
            <Pressable onPress={setTimerOn} style={style.button}>
              <Text>Empezar</Text>
            </Pressable>
          </>
        )}
        {showTimer && (
          <Temporizador
            horas={hour}
            minutos={minute} turnOff={()=>{setTimerOff()}}
          ></Temporizador>
        )}
      </View>
    </>
  );
};

export default Tempo;
