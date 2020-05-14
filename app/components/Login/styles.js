import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: 'center'
    },
    input:{
        width:300,
    },
    text:{
        color:'#fff',
        textAlign:'center',
    },
    parent:{
        justifyContent: 'center',
        alignItems: 'center',
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
        borderColor: '#fff',},parent:{
        flex:1,
        alignSelf:'center',
        justifyContent:"center"
    },
    productImg:{
        width:100,
        alignSelf:'center',
        height:100,
        borderRadius:55,
        marginTop: 25,
    },
})