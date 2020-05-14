import React, { Component } from 'react';
import {Dimensions, Text,Image,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Card, Title, Content, Icon, Thumbnail } from 'native-base';
import {
    StyleSheet,
  } from 'react-native';

  function Aboutus(props){
      return (
        <Container>
            
          <Header style={{backgroundColor: '#FFFFFF'}}>
            <Left>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Image source={require('../assests/menu.png')} />
              </TouchableOpacity>
            </Left>
            <Body>
              <Title>About Us</Title>
            </Body>
            <Right></Right>
          </Header>

          <Content>
            <Container>
              <Thumbnail style={{width: Dimensions.get('window').width/3, height: Dimensions.get('window').height/4, marginLeft:  Dimensions.get('window').width/3 }} source={require('../assests/Onlylogo.png')}/>
              <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20}}> TRAP - Traffic Resolution And Prevention </Text>
              <Text style={{textAlign: 'center', fontSize: 16, marginLeft: 4, marginTop: 10}}> TRAP is a mobile app which allows you to connect offline in a mesh network with other mobiles in road traffic including traffic police to get critical information regarding traffic thus helping in resolving traffic. It also provides an emergency alert system for emergency vehicles thus helping in resolving and preventing traffic. We are continously working on providing different use cases of developing a mesh network at Congestion point as well as in general</Text>
            </Container>
          </Content>
        
        </Container>
    );
}

export default Aboutus;