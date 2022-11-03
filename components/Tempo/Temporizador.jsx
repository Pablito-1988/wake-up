import React, {useState, useEffect} from 'react'
import { View, Text, Pressable, Vibration } from 'react-native'

const Temporizador = (props) => {
    const {horas , minutos, turnOff} = props
    const total = (Number(horas)*60) + Number(minutos)
    const [totalSleep, setTotalSleep] = useState(total)
    const [vibrateAlarm, setVibrateAlarm] = useState(false)

    useEffect(()=>{
        totalSleep> 0 ? setTimeout(()=> setTotalSleep(totalSleep - 1 ), 6000) : setVibrateAlarm(true)
        console.log(vibrateAlarm + 'estoy en el efecto')
    },[totalSleep])

    useEffect(()=>{
        if(vibrateAlarm === true ){
            console.log('estoy en el efecto de la alarma' + vibrateAlarm)
        alert('despertate')
        setInterval(()=>   Vibration.vibrate(2000),5000 )
    }
    console.log('estoy afuera del if del efecto de alartma' + vibrateAlarm)
    },[vibrateAlarm])
    
    function alarmOff (){
        console.log(vibrateAlarm + 'entre en alarmOff')
        setVibrateAlarm(false)
        console.log(vibrateAlarm + 'entre en alarmOff before')
    }
  return (
    <View>
        <Text> Soy un temporizador</Text>
        <Text>Te quedan : {totalSleep} minutos para dormir</Text>
        <Pressable onPress={()=>{/* alarmOff()  */;turnOff()}}><Text>Volver</Text></Pressable>
    </View>
  )
}

export default Temporizador