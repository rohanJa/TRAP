/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Login from  './app/components/Login';
import Dashboard from  './app/components/Dashboard';
import SignUp from  './app/components/SignUp';
import Draw from './app/components/EmergencyVechicle/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/> 
        <Stack.Screen name="Draw" component={Draw} options={{headerShown:false}}/>   
      </Stack.Navigator>
    </NavigationContainer>  
  );
}
