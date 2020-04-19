import React from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Picker,
  Alert
} from 'react-native'
import styles from '../styles';


export default function NormalUser(props){

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
            placeholder='MP 09 AB 1234'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val =>{props.changingText('registration_number', val)}}
        />
      </View>
    )
}
