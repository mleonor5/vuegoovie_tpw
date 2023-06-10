import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Button } from '@rneui/themed';
import HamburgerMenu from './HamburguerMenu';


export default Upperbar = ({ userInfo, navigation }) => {
    return (
        <SafeAreaView style={styles.upperbar}>
            <HamburgerMenu navigation={navigation} userInfo={userInfo}></HamburgerMenu>
            <Image source={require('../../images/icons/points.png')} style={{ marginLeft: '80%', marginTop: '7%' }}></Image>
            <Text style={{ marginTop: '7%' }}>{userInfo.points}</Text>
            <Image source={require('../../images/icons/coins.png')} style={{ marginLeft: '5%', marginTop: '7%' }}></Image>
            <Text style={{ marginTop: '7%' }}>{userInfo.coins}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ImageLogo: {
        width: '12%',
        height: '80%',
        marginTop: '4%',
        marginLeft: '4%'
    },
    upperbar: {
        flexDirection: 'row',
        height: '10%'
    }
})