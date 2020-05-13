import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
  } from 'react-native';

function EmergencyAlert(props){
  return (
    <View>                          
      <View>              
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Image source={require('../../Common/assests/menu.png')} />
          </TouchableOpacity>
      </View> 

      <Text style={styles.text}> Emergency Alert </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    borderColor: "red",
    marginTop: 250,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold"
  }
})

export default EmergencyAlert;