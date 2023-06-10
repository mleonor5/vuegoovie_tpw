import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground
} from 'react-native';
import { Button } from '@rneui/themed';


export default HomePageScreen = ({ navigation }) => {
    return (
        <View style={[{ backgroundColor: '#1a3568', height: '100%' }]}>
            <ImageBackground source={require('../../images/background/homepage.jpg')} style={{ height: '100%', width: '100%' }}>
                <View style={[{ width: '100%', height: '100%', alignItems: 'center' }]}>
                    <Image source={require('../../images/CIP_logo/CIP_LogoPreto_CIP.png')} style={styles.ImagePorto} />

                    <Button
                        title="Registar"
                        color={'#B8C4E9'}
                        buttonStyle={{ height: 55, width: 350, borderRadius: 20, marginTop: '30%' }}
                        titleStyle={{ fontSize: 25, color: 'black' }}
                        onPress={() => navigation.navigate('Onboarding')}
                    ></Button>
                    <Button
                        title="Login"
                        color={'white'}
                        buttonStyle={{ height: 55, width: 350, borderRadius: 20, borderWidth: 2, borderColor: '#002CB0', marginTop: '10%' }}
                        titleStyle={{ fontSize: 25, color: '#002CB0' }}
                        onPress={() => navigation.navigate('Login')}
                    ></Button>

                </View >
            </ImageBackground>
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