
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
import {firebaseAuth} from '../../../src/config';
import styles from './styles';

var firebase = require("firebase");

export default class SignUp extends React.Component {

  constructor(){
    super();
    this.state = {
      username: '', password: '', email: '', phone_number: '',pk:0,pickerValue:1,
    }
    this.signUp=this.signUp.bind(this)
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp(){
    this.state.pk+=1;
    
    const {username, password, email, phone_number,} = this.state
    
    console.log(username+" "+password+" "+email+" "+phone_number)
    
    firebase.database().ref('Users/'+this.state.pk).set({
      pk:this.state.pk ,
      username: username,
      password:password,
      email: email,
      phone_number: phone_number,
    }).then((data)=>{
      console.log('data ' , data)
      this.props.navigation.navigate('Login')

    }).catch((error)=>{
      //error callback
      Alert.alert("Wrong Message","UserName/Password Wrong",[{text:"okay"}])
    })

  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.heading}>User Type</Text>
      <Picker 
        selectedValue={(this.state.pickerValue)}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) =>{
                          this.setState({pickerValue:itemValue});
                      }}
      >
        <Picker.Item value="1" label="Emergency Vehicles" />
        <Picker.Item value="2" label="PoliceOfficers" />
        <Picker.Item value="3" label="Commuters" />
      </Picker>

      <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
      />
      <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
      />
      <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
      />
      <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
      />
      <Button
          title='Sign Up'
          onPress={this.signUp}
      />
      </View>
    )
  }
}
