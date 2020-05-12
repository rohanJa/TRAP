import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
 const HeaderComponent = ({navigation}) => {
    return (
        <View  style={styles.header}>
            <Icon
                name = "menu"
                size = {24}
                color = "skyblue"
                onPress={() => navigation.openDrawer()}
            />
            <Text style={styles.headerText}> Mapploting</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    header: {
        justifyContent: "space-evenly",
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
});

export default HeaderComponent;