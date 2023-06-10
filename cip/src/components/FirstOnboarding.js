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
//import { phase } from '../screens/homepageScreen'
import NextPhase from './NextPhase';
import Lottie from 'lottie-react-native'


export default FirstOnboarding = ({ navigation }) => {
    /* const [number, setPhase] = useState(1);
    function nextPhase() {
        setPhase(number + 1);
        phase = number
    } */
    return (
        <View style={[{ backgroundColor: 'white', height: '100%' }]}>

            <View style={[{ width: '100%', height: '100%', alignItems: 'center' }]}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.jumpText}>Saltar</Text>
                </TouchableOpacity>
                <Lottie source={require('../../images/animations/Onboarding1.json')} autoPlay loop />

                <Text style={styles.title}>Bem-vindo ao CIP</Text>
                <Text style={styles.text}>A nossa missão é estimular, disseminar e reforçar práticas de ensino e aprendizagem inovadoras, capacitando-o para as transições ecológica e
                    digital que o mundo de hoje nos exige.</Text>
                <TouchableOpacity onPress={NextPhase} >
                    <Image
                        source={require('../../images/icons/button.png')}
                        style={{ width: 50, height: 50, marginTop: '10%' }}
                    />
                </TouchableOpacity>

            </View >
        </View>
    );
};

const styles = StyleSheet.create({
    ImagePorto: {
        width: '70%',
        height: '40%',
    },
    title: {
        fontSize: 34,
        marginTop: 350
    },
    text: {
        fontSize: 18,
        marginTop: '10%',
        alignItems: 'center',
        textAlign: 'justify',
        width: '70%'
    },
    jumpText: {
        marginLeft: '80%',
        marginTop: '3%'
    }
});