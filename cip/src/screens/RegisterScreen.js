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
import { Picker } from '@react-native-picker/picker';


export default RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [selectedSchool, setSelectedSchool] = useState('');

    const handleSubmit = () => {
        // Validate form values
        if (username.length === 0 || password.length === 0 || email.length === 0 || selectedSchool.length === 0) {
            alert('All fields are required');
            return;
        }

        // Call API to register user
        const apiUrl = 'https://cip-6fes.onrender.com/users/register';
        const payload = { username, password, email, school: selectedSchool, role: 'teacher', points: 0 };
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.status)
            .then(data => {
                if (data != 200) {
                    console.log('Error status', data);
                } else {
                    console.log('User registered successfully');
                    navigation.navigate('Login')
                }
            })
            .catch(error => {
                console.error(error);
                console.log('An error occurred while registering the user');
            });
    };


    return (
        <View style={[{ backgroundColor: '#1a3568', height: '100%' }]}>
            <ImageBackground source={require('../../images/background/authentication.jpg')} style={{ height: '100%', width: '100%' }}>
                <View style={[{ width: '100%', height: '100%', alignItems: 'center' }]}>
                    <Image source={require('../../images/CIP_logo/CIP_LogoBranco_CIP.png')} style={styles.ImagePorto} />
                    <View style={styles.Form}>

                        <Text style={styles.Title}>Registro</Text>
                        <Text style={[styles.Text, { marginRight: '25%' }]}>Nome de utilizador:</Text>
                        <TextInput style={styles.Input} onChangeText={text => setUsername(text)}
                            value={username}></TextInput>
                        <Text style={[styles.Text, { marginRight: '48%' }]}>Email:</Text>
                        <TextInput style={styles.Input} onChangeText={text => setEmail(text)}
                            value={email}></TextInput>
                        <Text style={[styles.Text, { marginRight: '40%' }]}>Password:</Text>
                        <TextInput secureTextEntry style={styles.Input} onChangeText={text => setPassword(text)}
                            value={password}></TextInput>
                        <Text style={[styles.Text, { marginRight: '10%' }]}>Estabelecimento de ensino:</Text>
                        <View style={[styles.Input, { justifyContent: 'center' }]} >
                            <Picker selectedValue={selectedSchool}
                                onValueChange={itemValue => setSelectedSchool(itemValue)}
                            >
                                <Picker.Item label="Selecione uma escola" value="null" />
                                <Picker.Item label="ISEP" value="ISEP" />
                                <Picker.Item label="ESMAD" value="ESMAD" />
                                <Picker.Item label="ESHT" value="ESHT" />
                                <Picker.Item label="ESE" value="ESE" />
                                <Picker.Item label="ISCAP" value="ISCAP" />
                                <Picker.Item label="Outra" value="Outra" />
                            </Picker>
                        </View>

                        <Text style={styles.orText}>OU</Text>
                        <Image source={require('../../images/icons/Moodle-logo.svg.png')} style={styles.ImageMoodle} />
                    </View>
                    <View style={[{ marginTop: '10%' }]}>
                        <Button title="Registar" color={'#B8C4E9'} buttonStyle={{ height: 50, width: 175, borderRadius: 20 }} titleStyle={{ fontSize: 25 }} onPress={handleSubmit}></Button>
                    </View>
                </View >
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    Input: {
        borderWidth: 1,
        width: '60%',
        height: '7%',
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
        marginTop: '4%',
        textAlign: 'right',
    },
    ImageMoodle: {
        width: '30%',
        height: '6%',
        marginTop: '2%'
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
        borderRadius: 20,
        marginTop: '5%',
        alignItems: 'center'
    },
    orText: {
        fontSize: 20,
        color: 'black',
        marginTop: '5%',
        fontStyle: 'Source Sans Pro'
    }
});
