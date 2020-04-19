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


export default function TrafficPolice(props){

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
            placeholder='Traffic Police ID'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => props.changingText('polcie_id', val)}
        />
      </View>
    )
}
