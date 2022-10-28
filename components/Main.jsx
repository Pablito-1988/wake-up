import React from 'react'
import { StatusBar } from "expo-status-bar";
import { View, Text } from 'react-native'
import Header from './Header'
import Home from './Home';
import Tempo from './Tempo/Tempo';
import Location from './Location';
import { Switch , Route } from 'react-router-native';

const Main = () => {
  return (
    <View>
        <StatusBar></StatusBar>
        <Header></Header>
        <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={'/tempo'} component={Tempo}></Route>
            <Route exact path={'/location'} component={Location}></Route>
        </Switch>
        
    </View>
  )
}

export default Main