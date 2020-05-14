import React from 'react';
import { useState } from 'react';

import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Picker,
  Alert,
  TouchableOpacity
} from 'react-native'
import styles from '../styles';

export default function EmergencyVehicle(props){

  // function onChangeText (val)  {
  //  return /^[A-Z]{2}\s[0-9]{2}\s[A-Z]{2}\s[0-9]{4}$/.test(val)
  // }
 
    return(
        <View >
            <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => props.changingText('password', val)}
            />
            <TextInput 
            style={styles.input}
            placeholder="MP 09 AB 1234"
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val =>{props.changingText('registration_number', val)}}
            />
          <Picker 
          selectedValue={(props.state.vehicle_type)}
          style={{ height: 50, width:150,alignItems: 'center',flexDirection:"row",}}
          onValueChange={(itemValue) =>{
                            props.changingText('vehicle_type',itemValue)
                        }}
          >
          <Picker.Item value="1" label="Ambulance" />
          <Picker.Item value="2" label="Fire-Brigade" />
          <Picker.Item value="3" label="PCR" />
        </Picker>
      </View>
    )
}
