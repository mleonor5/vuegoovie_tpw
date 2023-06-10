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

export default LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const data = { username, password };
        const apiUrl = 'https://cip-6fes.onrender.com/users/login'
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log('Login successful', username);
                    // login was successful
                    AsyncStorage.setItem('token', data);
                    AsyncStorage.setItem('user', username);
                    navigation.navigate('Mainpage')
                } else {
                    // login failed
                    // you can show an error message, etc.
                    console.log(data);
                }
            })
            .catch(error => {
                // an error occurred
                // you can show an error message, etc.
                console.log(error);
            });
    };
    return (
        <View style={[{ backgroundColor: '#1a3568', height: '100%' }]}>
            <ImageBackground source={require('../../images/background/authentication.jpg')} style={{ height: '100%', width: '100%' }}>
                <View style={[{ width: '100%', height: '100%', alignItems: 'center' }]}>
                    <Image source={require('../../images/CIP_logo/CIP_LogoBranco_CIP.png')} style={styles.ImagePorto} />
                    <View style={styles.Form}>
                        <Text style={styles.Title}>Login</Text>
                        <Text style={[styles.Text, { marginRight: '35%' }]}>Nome de utilizador:</Text>
                        <TextInput style={styles.Input} onChangeText={setUsername} value={username}></TextInput>
                        <Text style={[styles.Text, { marginRight: '51%' }]}>Password:</Text>
                        <TextInput secureTextEntry style={styles.Input} onChangeText={setPassword} value={password}></TextInput>
                        <Text style={styles.orText}>OU</Text>
                        <Image source={require('../../images/icons/Moodle-logo.svg.png')} style={styles.ImageMoodle} />
                    </View>
                    <View style={[{ marginTop: '10%' }]}>
                        <Button title="Login" color={'#B8C4E9'} buttonStyle={{ height: 50, width: 175, borderRadius: 20 }} titleStyle={{ fontSize: 25 }} onPress={handleSubmit}></Button>
                    </View>
                </View >
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    Input: {
        borderWidth: 1,
        width: '70%',
        height: '10%',
        borderColor: '#B8C4E9',
        borderRadius: 10,
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black',
        marginTop: '5%',
        fontStyle: 'Source Sans Pro'
    },
    Text: {
        marginTop: '10%',
        textAlign: 'right',
        alignItems: 'flex-start',
    },
    ImageMoodle: {
        width: '30%',
        height: '6%',
        marginTop: '6%'
    },
    ImagePorto: {
        width: '75%',
        height: '10%',
        marginTop: '5%'
    },
    Form: {
        backgroundColor: 'white',
        width: '85 %',
        height: '65%',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: '5%'
    },
    orText: {
        fontSize: 25,
        color: 'black',
        marginTop: '15%',
        fontStyle: 'Source Sans Pro'
    }
});