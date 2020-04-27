import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
function SplashScreen() {
    return (
      <View style={styles.viewStyles}>
        <Image style={styles.image} source={require('./assests/MainCover.png')}/>
      </View>
    );
}
const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    resizeMode: 'contain'
  },
  image: {
    width: 300,
    resizeMode: 'contain',
    marginLeft: 50
  },
})

export default SplashScreen;