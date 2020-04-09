import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';

  function Home({navigation}){
      const presshandler = () => {
        // navigation.push('Sucessfull');
      }
      return (
          <View style={styles.wrapper}>
              <Text style={styles.text}> Click below to join the ad-hoc network </Text>
              <Button title="click" onPress={presshandler} color="#1AB4BE"/>
          </View>
      );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: 'column',
    paddingTop: 10,
    marginLeft: 25
  },
  text: {
    justifyContent: "center",
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20
  }
  
})

export default Home;