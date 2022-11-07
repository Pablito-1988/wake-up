import React from 'react'
import { StatusBar } from "expo-status-bar";
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Header from './Header'
import Home from './Home';
import Tempo from './Tempo/Tempo';
import Location from './Map/Location';
import  Map  from './Map/Map';
import { Switch , Route } from 'react-router-native';


const style = StyleSheet.create({
  main:{
    flex:1,
    height: Dimensions.get('screen').height
  }
})

const Main = () => {
  return (
    <View>
        <StatusBar></StatusBar>
        <Header></Header>
        <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={'/tempo'} component={Tempo}></Route>
            <Route exact path={'/location'} component={Location}></Route>
            <Route exact path={'/map'} component={Map}></Route>
        </Switch>
        
    </View>
  )
}

export default Main