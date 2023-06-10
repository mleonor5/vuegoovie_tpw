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
import MainpageScreen from '../screens/MainpageScreen.js';
import EventsEmpty from '../screens/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CoursesScreen from '../screens/CoursesScreen';
import NewsScreen from '../screens/NewsScreen';
import NotFound from '../screens/404Screen';
import SideMenu from './SideMenu.js';

const Tab = createBottomTabNavigator();

const TabBarIcon = (props) => {
    return (
        <Image
            source={props.focused ? props.activeImage : props.inactiveImage}
            style={{ width: 26, height: 26, tintColor: props.color }}
        />
    );
}


export default BottomNavbar = () => {


    return (
        <Tab.Navigator
            screenOptions={{
                activeTintColor: '#000',
                inactiveTintColor: '#aaa',
                headerShown: false,
            }}>
            <Tab.Screen
                name="Home"
                component={MainpageScreen}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            focused={props.focused}
                            activeImage={require('../../images/icons/home_filled.jpeg')}
                            inactiveImage={require('../../images/icons/home_not_filled.jpeg')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cursos"
                component={CoursesScreen}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            focused={props.focused}
                            activeImage={require('../../images/icons/courses_filled.jpeg')}
                            inactiveImage={require('../../images/icons/courses_not_filled.jpeg')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Notícias"
                component={NewsScreen}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            focused={props.focused}
                            activeImage={require('../../images/icons/news_filled.jpeg')}
                            inactiveImage={require('../../images/icons/news_not_filled.jpeg')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Eventos"
                component={EventsEmpty}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            focused={props.focused}
                            activeImage={require('../../images/icons/events_not_filled.jpeg')}
                            inactiveImage={require('../../images/icons/events_not_filled.jpeg')}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};
