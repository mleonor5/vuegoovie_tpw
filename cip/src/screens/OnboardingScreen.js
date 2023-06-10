import FirstOnboarding from '../components/FirstOnboarding';
import SecondOnboarding from '../components/SecondOnboarding';
import ThirdOnboarding from '../components/ThirdOnboarding';
import FourthOnboarding from '../components/FourthOnboarding';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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


AsyncStorage.setItem('phase', '0')
    .then(() => console.log('Data stored successfully'))
    .catch(error => console.error('Error storing data: ', error));

export default OnboardingScreen = ({ navigation }) => {
    //let phase = checkPhase()
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        // Wait for the value to change
        const waitForValueChange = async () => {
            // Get the initial value
            let currentPhase = await AsyncStorage.getItem('phase');

            // Set the initial value
            setPhase(currentPhase);

            // Check for changes to the value
            while (true) {
                // Get the current value
                let newPhase = await AsyncStorage.getItem('phase');

                // Check if the value has changed
                if (newPhase !== currentPhase) {
                    console.log(newPhase);
                    // Set the new value
                    setPhase(newPhase);
                    // Update the current value
                    currentPhase = newPhase;
                    console.log(phase);
                    continue;
                }
            }
        };

        // Start waiting for the value to change
        waitForValueChange();
    });
    return (
        <View style={[{ backgroundColor: 'white', height: '100%' }]}>
            {phase === '0' ? (
                <FirstOnboarding navigation={navigation}></FirstOnboarding>
            ) : phase === '1' ? (
                <SecondOnboarding navigation={navigation}></SecondOnboarding>
            ) : phase === '2' ? (
                <ThirdOnboarding navigation={navigation}></ThirdOnboarding>
            ) : (
                <FourthOnboarding navigation={navigation}></FourthOnboarding >
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    ImagePorto: {
        width: '75%',
        height: '10%',
        marginTop: '68%'
    },
});