import React from 'react'
import Aboutus from '../../Common/Aboutus'
import ViewCurrenScenario from '../Screens/ViewCurrentScenario'
import EmergencyAlert from '../Screens/EmergencyAlert'
import Home from '../Screens/Home'
import Sucessfull from '../../Common/Sucessfull';
import Logout from '../../Logout'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator();
export default function Draw(){
  const imagePath='../../Common/assests/'
  return(
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="About" >
          <Drawer.Screen name='Home' component={Home} options={{headerShown:false,
                                                                  drawerIcon :({ tintColor }) =>( 
                                                                      <Image 
                                                                        source={require(imagePath+'home.png')}
                                                                      />
                                                                  )
                                                                 }}
          />
          <Drawer.Screen name='About' component={Aboutus} options={{headerTitleAlign: "center",
                                                                  drawerIcon :({ tintColor }) =>( 
                                                                      <Image 
                                                                        source={require(imagePath+'about.png')}
                                                                      />
                                                                  )
                                                                 }}
          />        
          <Drawer.Screen name='Scenario' component={ViewCurrenScenario} options={{headerTitleAlign: "center",
                                                                drawerIcon :({ tintColor }) =>( 
                                                                    <Image 
                                                                      source={require(imagePath+'view.png')}
                                                                      
                                                                    />
                                                                )
                                                                }}
          />      
          <Drawer.Screen name='Alert' component={EmergencyAlert} options={{headerTitleAlign: "center",
                                                                  drawerIcon :({ tintColor }) =>( 
                                                                      <Image 
                                                                        source={require(imagePath+'alert.png')}
                                                                      />
                                                                  )
                                                                 }}
          />                  
          <Drawer.Screen name='Logout' component={Logout} options={{headerTitleAlign: "center",
                                                                    drawerIcon :({ tintColor }) =>( 
                                                                        <Image 
                                                                          source={require(imagePath+'logout.png')}
                                                                        />
                                                                    )
                                                                  }}
          />        
        </Drawer.Navigator>
    </NavigationContainer>
  )
}