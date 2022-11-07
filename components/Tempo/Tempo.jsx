import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable
} from "react-native";
import { Link } from "react-router-native";
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
    marginTop: 40,
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
    backgroundColor: "grey",
    borderRadius: 10,
    textAlign: "center",
    marginTop:10,
    color:'white'
  },
  buttonStart: {
    width: 120,
    height: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
  },
  buttonBack: {
    width: 120,
    height: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText:{
    color:'white'
  },
  tempTitle:{
    fontSize:24
  }
});

const Tempo = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [showTimer, setShowTimer] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  

  function hourTimer(e) {
    if (Number(e) <= 24) {
      setHour(e /* * 3600000 */);
    } else {
      setHour('');
      alert("no hay tantas horas en un dia");
    }
  }
  function minuteTimer(e) {
    if (Number(e) <= 59) {
      setMinute(e /* * 60000 */);
    } else {
      setMinute('');
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
      setHour('')
      setMinute('')

    }
  }

  return (
    <>
      <View style={style.tempoContainer}>
        {showSettings && (
          <>
            <Text style={style.tempTitle}>CUANTO TIEMPO QUERES DORMIR?</Text>
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
            <Pressable onPress={setTimerOn} style={style.buttonStart}>
              <Text style={style.buttonText}>Empezar</Text>
            </Pressable>
            <Pressable style={style.buttonBack}>
                <Link to={'/'}><Text style={style.buttonText}>Volver</Text></Link>
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
