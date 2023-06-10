import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, Image } from 'react-native';
import { Button, Divider } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuItems = ({ isOpen, setIsOpen, navigation, userInfo }) => {
    const slideAnim = React.useRef(new Animated.Value(0)).current;


    React.useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isOpen ? 1 : 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }, [isOpen]);

    const slideTranslate = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-250, 0],
    });

    function LogOut() {
        AsyncStorage.setItem('user', '')
            .then(() => console.log('User stored successfully'))
            .catch(error => console.error('Error storing data: ', error));
        AsyncStorage.setItem('token', '')
            .then(() => console.log('Token stored successfully'))
            .catch(error => console.error('Error storing data: ', error));
        AsyncStorage.setItem('course', '')
            .then(() => console.log('Course stored successfully'))
            .catch(error => console.error('Error storing data: ', error));
        navigation.navigate('Homepage')
    }

    return (
        <Animated.View style={[styles.menu, { transform: [{ translateX: slideTranslate }] }]}>
            {/* Your menu items go here */}
            <View style={{ height: 500 }}>
                <TouchableOpacity onPress={() => { setIsOpen(false) }}>
                    <Text style={[styles.close]}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../../images/icons/profile.png')} style={styles.profileImg} />
                </TouchableOpacity>
                <Text style={[styles.userName]}> {userInfo.username}</Text>
                <Divider style={{ borderColor: '#C94E23', borderWidth: 1, left: 10, bottom: 35 }} />
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text style={[styles.text]}>Sobre CIP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Rankings')}>
                    <Text style={[styles.text]}>Ranking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NotFound')}>
                    <Text style={[styles.text]}>Moodle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => LogOut()} style={{ flexDirection: 'row', height: 25, width: 170, backgroundColor: '#B8C4E9', borderRadius: 10 }}>
                    <View >
                        <Text style={{ color: 'black', fontSize: 17, left: 20 }}>Sair</Text>
                        <Image source={require('../../images/icons/logout.png')} style={{ left: 150, bottom: 20 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        left: -25,
        top: 0,
        bottom: 0,
        width: 250,
        height: 350,
        backgroundColor: '#1A3568',
        padding: 20,
        zIndex: 9999,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    text: {
        color: 'white',
        fontSize: 17,
        left: 20,
        bottom: 40,
        marginTop: 15
    },
    close: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25,
        left: 235,
        bottom: 20,
    },
    profileImg: {
        left: 20,
        bottom: 40,
        width: 75,
        height: 75,
    },
    userName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        left: 10,
        bottom: 40,
    }
});

export default MenuItems;
