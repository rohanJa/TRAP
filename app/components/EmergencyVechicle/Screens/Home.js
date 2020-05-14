import React, {Component} from 'react';
import {View, TouchableOpacity, Image,StyleSheet, Dimensions, DeviceEventEmitter} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Overlay, Text,  SocialIcon} from 'react-native-elements'
var Spinner = require('react-native-spinkit');

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            loading : false,
            latitude : null,
            longitude : null,
            speed : null,
            modalvisible : false
        }
    }
    loadaddress = async () => {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({loading: false})
        }, 4000)
    }   
    // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    toggleOverlay = () => {
        this.setState({modalvisible: false})
    }
    render() {
        return (
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../../Common/assests/menu.png')} />
                    </TouchableOpacity>
                    
                    <Text h4 style={{textAlign: 'center', paddingTop: 30}}> Welcome </Text>
                    <Text style={{textAlign: 'center'}}> Click on get started</Text>
                    
                    <Spinner style={styles.spinner} color="#9890e3" type="Wave" isVisible={true}/>
                    
                    <Overlay isVisible={this.state.loading} >
                        <Spinner color="black" type="Circle" style={styles.loadingoverlay}/>
                    </Overlay>

                    <View style={styles.homescreen1}>
                        <TouchableOpacity style={styles.Loaderbutton} onPress={this.loadaddress}>
                           <Text style={{fontWeight: 'bold'}}> Get started </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Overlay isVisible={this.state.modalvisible} onBackdropPress={this.toggleOverlay}>
                        <Icon name="warning" size={30} color="#900" style={{paddingLeft:Dimensions.get('window').height / 8.5}}/>
                        <Text> Please click on get started before</Text>
                    </Overlay>

                    <View style={{...styles.homescreen1, paddingTop: 0}}>
                    </View>
                    
                    <View style={styles.footer}>
                        <SocialIcon
                            type='twitter'
                        />
                        <SocialIcon
                            type='github'
                        />
                        <SocialIcon
                            type='facebook'
                        />
                        </View>
                    </View>
        );
    }
}

const styles = StyleSheet.create({
    spinner: {
        alignSelf: 'center',
        paddingBottom: 90
    }, 
    homescreen1: {
        display: 'flex',
        justifyContent:'center',
        padding: 20,
        marginTop: Dimensions.get('window').height / 6.5
    },
    homescreentext: {
        fontSize: 20, 
        textAlign: 'center'
    },
    Loaderbutton: {
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: 15,
        borderRadius:40
    },
    buttonStyle: {
        justifyContent: 'center'
    },
    loadingoverlay: {
        marginTop:300,
        alignSelf:'center',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        padding: 0
    } 
})
export default Home;