import React from 'react';
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
import NextPhase from './NextPhase';
import { useNavigation } from "@react-navigation/native";
import Lottie from 'lottie-react-native'


export default FirstOnboarding = ({navigation}) => {
    return (
        <View style={[{ backgroundColor: 'white', height: '100%' }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.jumpText}>Saltar</Text>
            </TouchableOpacity>
            <View style={[{ width: '100%', height: '100%', alignItems: 'center' }]}>
                <Lottie source={require('../../images/animations/Onboarding3.json')} autoPlay loop />

                <Text style={styles.title}> Notícias e eventos</Text>
                <Text style={styles.text}>Fácil acesso às diferentes notícias e eventos realizados pelo CIP </Text>
                <TouchableOpacity onPress={NextPhase}>
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
        marginTop: 430
    },
    text: {
        fontSize: 18,
        marginTop: '10%',
        alignItems: 'center',
        textAlign: 'justify',
        width: '70%'
    },
    jumpText: {
        marginLeft: '86%',
        marginTop: '3%'
    }
});