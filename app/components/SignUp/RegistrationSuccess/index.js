import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Login from "../../Login";
import styles from './styles';
// import console = require("console");

function RegistrationSuccess(props) {
  const [modalVisible, setModalVisible] = useState(true);
  console.log(props)
  function change(val){
    setModalVisible(val);
    props.navigation.navigate("Login")
  }
  return (
    <View style={styles.centeredView}>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert(props.username+"Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}><Text style={{color:"green"}}>{props.route.params.name} </Text>Registered succesfully {"\n"}
                                           Username<Text style={{color:"green"}}> {props.route.params.phone_number}</Text></Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
              change(!modalVisible)  
            }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

 export default RegistrationSuccess;