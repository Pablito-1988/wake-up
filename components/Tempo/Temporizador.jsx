import React, {useState, useEffect} from 'react'
import { View, Text, Pressable } from 'react-native'

const Temporizador = (props) => {
    const {horas , minutos, turnOff} = props
    const total = (Number(horas)*60) + Number(minutos)
    const [totalSleep, setTotalSleep] = useState(total)

    useEffect(()=>{
        totalSleep> 0 && setTimeout(()=> setTotalSleep(totalSleep - 1 ), 60000)
    },[totalSleep])
  return (
    <View>
        <Text> Soy un temporizador</Text>
        <Text>Te quedan : {totalSleep} minutos para dormir</Text>


        <Pressable onPress={()=>{turnOff()}}><Text>Apagar</Text></Pressable>


    </View>
  )
}

export default Temporizador