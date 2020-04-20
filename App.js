/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component} from 'react';
import Login from  './app/components/Login';
import Dashboard from  './app/components/Dashboard';
import SignUp from  './app/components/SignUp';
import Draw from './app/components/EmergencyVechicle/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/components/Common/SplashScreen'
import {PERMISSIONS, request} from 'react-native-permissions';

const Stack = createStackNavigator();
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true
    }
  }

  async requestlocation() {
    const location = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    return location;
  }
  async requestSENDSMS() {
    const SENDSMS = await request(PERMISSIONS.ANDROID.SEND_SMS);
    return SENDSMS;
  }
  async RECEIVE_SMS() {
    const RECEIVE_SMS =  await request(PERMISSIONS.ANDROID.RECEIVE_SMS);
    return RECEIVE_SMS;
  }
  async componentDidMount() {
    Promise.all([
    await this.requestlocation(),
    await this.requestSENDSMS(),
    await this.RECEIVE_SMS(),
    ]).then(() => {
      setTimeout(() => {this.setState({isLoading: false})}, 3000)
    })
    }
  render(){
    if (this.state.isLoading==true) {
      return (<SplashScreen/>)
    }  
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/> 
          <Stack.Screen name="Draw" component={Draw} options={{headerShown:false}}/>   
        </Stack.Navigator>
      </NavigationContainer>  
    )
  }
}
export default App;
