import React from 'react'
import Aboutus from '../../Common/Aboutus'
import ViewCurrenScenario from '../Screens/ViewCurrentScenario'
import EmergencyAlert from '../Screens/EmergencyAlert'
import Home from '../Screens/Home'
import Sucessfull from '../../Common/Sucessfull';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator();
export default function Draw(){
  return(
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="About" >
            <Drawer.Screen name='About' component={Aboutus} options={{headerTitleAlign: "center"}}/>
            <Drawer.Screen name='Emergency Alert' component={EmergencyAlert} options={{headerTitleAlign: "center"}}/>
            <Drawer.Screen name='Home' component={Home} options={{headerShown:false}} />
            <Drawer.Screen name='ViewCurrentScenario' component={ViewCurrenScenario} options={{headerTitleAlign: "center"}}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}