import React, { useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainpageScreen from './MainpageScreen.js';
import HamburgerMenu from '../components/HamburguerMenu.js';

const Tab = createBottomTabNavigator();


const FirstScreen = () => {
    return <Text>First Screen</Text>;
};

const SettingsScreen = () => {
    return <Text>Settings Screen</Text>;
};

const TabBarIcon = (props) => {
    return (
        <HamburgerMenu></HamburgerMenu>

    );
}


export default BlankScreen = ({ navigation }) => {


    return (
        <View>
            <Text>Let's experiment</Text>
            <HamburgerMenu></HamburgerMenu>
        </View>
    )
};
