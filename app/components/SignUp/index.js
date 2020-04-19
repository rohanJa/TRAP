
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
import EmergencyVehicle from './EmergencyVehicle';
import NormalUser from './NormalUser';
import TrafficPolice from './TrafficPolice';
var firebase = require("firebase");

export default class SignUp extends React.Component {

  constructor(){
    super();

    this.state = {
      name: '',
      password: '', 
      email: '',
      phone_number: '',
      vehicle_type:1,
      registration_number:'',
      user_type:1,
      police_id:''
    }

    this.signUp=this.signUp.bind(this)
    this.classDecider=this.classDecider.bind(this)
    this.onChangeText=this.onChangeText.bind(this);
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp(){
    var DataStored={}
 
    var valuePicked=this.state.user_type
    
    if(valuePicked==1){
      const vehicleType= {1 :"Ambulance",2:"Fire-Brigade",3:"PCR" }
      const {name, password, email, phone_number,registration_number,vehicle_type} = this.state
       DataStored = {name:name, password:password, email:email, phone_number:phone_number,registration_number:registration_number,vehicle_type:vehicleType[vehicle_type]}
    }
    else if(valuePicked==2){
      const {name, password, email, phone_number,police_id} = this.state
      DataStored = {name:name, password:password, email:email, phone_number:phone_number,police_id:police_id}
    }
    else{
      const {name, password, email, phone_number,registration_number} = this.state
      DataStored = {name:name, password:password, email:email, phone_number:phone_number,registration_number:registration_number}
    }
    
    const UserType={1:"Emergency Vehicles",2:"Police Officers",3:"Commuters"}
    
    if(this.state.phone_number!=''){
      firebase.database().ref(UserType[valuePicked]+"/"+this.state.phone_number).set(DataStored).then((data)=>{
        this.props.navigation.navigate('RegistrationSuccess',{name:this.state.name,
                                                              phone_number:this.state.phone_number      
                                                              })
      }).catch((error)=>{
        //error callback
        Alert.alert("Wrong Message","UserName/Password Wrong",[{text:"okay"}])
      })
    }  

    if(valuePicked!=2){
      firebase.database().ref("Registered Vehicle/"+this.state.registration_number).set({
          [this.state.registration_number]:this.state.phone_number
      }).catch((error)=>{
        //error callback
        Alert.alert("Wrong Message","Vehicle already Registered",[{text:"okay"}])
      })
      firebase.database().ref("Credentials/"+this.state.phone_number).set({
        password:this.state.password
      }).catch((error)=>{
      //error callback
      Alert.alert("Wrong Message","Vehicle already Registered",[{text:"okay"}])
    })

    }
  }

  classDecider(){
  
    var valuePicked=this.state.user_type
  
    if(valuePicked==1){
      return (<EmergencyVehicle state={this.state} changingText={this.onChangeText} />);
    }
    else if(valuePicked==2){
      return (<TrafficPolice state={this.state} changingText={this.onChangeText} />);
    }
    else{
      return (<NormalUser state={this.state} changingText={this.onChangeText} />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>User Type</Text>
        <Picker 
          selectedValue={(this.state.user_type)}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) =>{
                            this.setState({user_type:itemValue});
                            console.log(this.state.user_type)
                        }}
        >
          <Picker.Item value="1" label="Emergency Vehicles" />
          <Picker.Item value="2" label="Police Officers" />
          <Picker.Item value="3" label="Commuters" />
        </Picker>
        <TextInput
            style={styles.input}
            placeholder='Name'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('name', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
            keyboardType="email-address"          
          />
          <TextInput
            style={styles.input}
            placeholder='Phone Number'
            autoCapitalize="none"
            maxLength={10}
            keyboardType="numeric"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('phone_number', val)}
          />
          
          {/* classDecider invokes the corresponding JSX selected using above Picker*/}
          {this.classDecider()}             
          
          <Button
            title='Sign Up'
            onPress={this.signUp}
        />
      </View>
    )
  }
}
