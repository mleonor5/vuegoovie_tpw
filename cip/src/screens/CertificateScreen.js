import * as React from "react";
import { Image, StyleSheet, FlatList, Pressable, Text, View, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import { Button, Divider } from '@rneui/themed';

const CertificateScreen = () => {
    return (
        <View>
            <ImageBackground source={require('../../images/background/authentication.jpg')} style={{ height: '105%', width: '100%' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Plataforma Moodle</Text>
                    <Text style={styles.text}>Formador: Ricardo Queirós</Text>
                    <Text style={styles.item}>Certificado</Text>
                    <Image source={require('../../images/certificado.png')} />
                    <Button title='Descarregar' buttonStyle={{ marginTop: '10%', width: '50%', height: '25%', borderRadius: 20 }} color={'#C94E23'} titleStyle={{ marginRight: 25, fontSize: 20 }}></Button>
                </View>
            </ImageBackground >
        </View >
    );
};

const styles = StyleSheet.create({
    cipLogooriginalCip2Icon: {
        top: 25,
        left: '4%',
        width: 45,
        height: '100%',
        position: "absolute",
    },
    title: {
        top: 30,
        textAlign: 'center',
        marginTop: '10%',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: '10%',
        color: '#B8C4E9',
        marginBottom: '10%'
    },
    item: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#B8C4E9',
        marginTop: 10,
        marginBottom: '10%'

    },
    image: {
        widht: '50%',
        height: '70%',
    }
});

export default CertificateScreen;