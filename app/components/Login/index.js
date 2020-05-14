import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './styles';

var firebase = require("firebase");

class Login extends Component{
    static navigatorStyle ={
        navigationBarHidden:false
    }
    constructor(props){
        super(props)
    this.state = {phone_number: "", password: ""}
    this.checkLogin =this.checkLogin.bind(this)
    
    
    }
    checkLogin() {
        const navigation = this.props.navigation
        const {phone_number, password }=this.state
        firebase.database().ref("Credentials/"+phone_number).once('value', function (snapshot) {
            try{
                if(password == snapshot.val().password){
                    //redirect to dashboard
                    navigation.navigate('Draw')
                }
            }
        catch(err){
            Alert.alert("Wrong Message","Wrong Phone Number Or Password",[{text:"okay"}])

        }
           
        }).catch((error)=>
            Alert.alert("Wrong Message","Wrong Credentials",[{text:"okay"}])
        );
    }

    signUp(){
        const navigation = this.props.navigation
        navigation.navigate('SignUp')
    }

    render(){
        const { heading, input,parent } = styles
        return (
            <View style={parent}>
                <Text style={heading}>Login </Text>
                
                <Image style={styles.productImg} source={require('../Common/assests/logo.png')}/>
               
                <TextInput placeholder={"Phone Number"} underlineColorAndroid={'grey'} style={input} onChangeText={text => this.setState({phone_number:text})} maxLength={10}
            keyboardType="numeric"/>
                <TextInput placeholder={"Password"} underlineColorAndroid={'grey'} style={input} secureTextEntry={true} onChangeText={text => this.setState({password:text})}/>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={_ => this.checkLogin()}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={_ => this.signUp()}
                >
                    <Text style={styles.text}>Create Account</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

export default Login;
