import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    heading: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input:{
        marginLeft: 20,
        marginRight :15,
        marginTop: 0,
        width: 300
    },
    text:{
        color:'#fff',
        textAlign:'center',
    },
    button:{
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#00BCD4', 
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
     parent:{
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImg:{
        marginTop: 14,
        width:25,
        height:40,
    },
    passContainer: {
        alignContent: 'space-between',
        flexDirection: 'row',
        resizeMode: 'contain',
        position: 'relative'
    }
})