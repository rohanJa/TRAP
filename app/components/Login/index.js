import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Icon} from 'native-base';
// import Draw from './app/components/EmergencyVechicle/Routes/Draw';
var firebase = require("firebase");

class Home extends Component{
    static navigatorStyle ={
        navigationBarHidden:false
    }

    state = {username: "", password: "",  icon: "eye",
    secureTextEntry: true}

    _changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon == 'eye' ? 'eye-off' : 'eye',
            secureTextEntry: !prevState.secureTextEntry
        }));
    }

    checkLogin() {
        const {username, password }=this.state
        if(username=="Ajay" && password == 'Ajay123'){
            //redirect to dashboard
            this.props.navigation.navigate('Draw')
        }else{
            // firebase.database().ref('/Users/' + 2).once('value').then(function(snapshot) {
            //     console.log("Snapshot is "+ (snapshot.val()));});
            Alert.alert("Wrong Message","UserName/Password Wrong",[{text:"okay"}])
        }
    }

    signUp(){
        this.props.navigation.navigate('SignUp')
    }

    render(){
        const { heading, input,parent, passContainer, productImg } = styles
        return (
            <View style={parent}>
                <Text style={heading}>Login </Text>
                
                <TextInput placeholder={"Username"} underlineColorAndroid={'grey'} style={input} onChangeText={text => this.setState({username:text})}/>
                <View style={passContainer}> 
                    <TextInput placeholder={"Password"} underlineColorAndroid={'grey'} style={input} secureTextEntry={this.state.secureTextEntry} onChangeText={text => this.setState({password:text})}/>
                    <Icon name={this.state.icon} onPress={() => this._changeIcon()} style={productImg}/>
                </View>
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

export default Home;
