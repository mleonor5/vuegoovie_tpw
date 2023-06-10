import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import Lottie from 'lottie-react-native';

const NotFound = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.eventosVazio}>
            <ImageBackground source={require('../../images/background/eventosBg.png')} style={{ height: '100%', width: '100%' }}>
                <Text style={styles.title}>
                    Nenhum resultado encontrado
                </Text>
                <Text style={styles.text404}>
                    Desculpe, parece que a página que procura não existe!
                </Text>
                <Lottie source={require('../../images/animations/404.json')} autoPlay loop/>
                <Button title="Voltar página inicial" color={'#B8C4E9'} buttonStyle={{ height: 40, width: 230, borderRadius: 15, alignSelf: 'center', marginTop: 530 }} titleStyle={{ fontSize: 15 }}></Button>
                <Image source={require('../../images/CIP_logo/CIP_LogoFormatoWeb_CIP.png')} style={styles.cipLogotipoRgb2} resizeMode="cover" />

            </ImageBackground >
        </View>
    );
};

const styles = StyleSheet.create({
    iconLayout: {
        height: "100%",
        width: "100%",
    },
    cipLogotipoRgb2: {
        top: 685,
        width: 170,
        height: 41,
        alignSelf: 'center',
        position: "absolute",
    },
    title: {
        color: '#002CB0',
        alignItems: 'center',
        textAlign: 'center',
        top: 380,
        fontSize: 30,
    },
    text404: {
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'justify',
        width: '70%',
        top: 480,
        left: 55,
        fontWeight: "600",
        color: 'black',
        textAlign: "center",
        width: 284,
        height: 108,
        position: "absolute",
    },
    scene121: {
        position: 'absolute',
        alignSelf: 'center',
        width: '95%',
        height: '54%',
        left: 20,
        top: -20,
    },
    frame: {
        left: 23,
        top: 24,
        width: 23,
        height: 23,
        position: "absolute",
    },
    eventosVazio: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        height: 846,
        overflow: "hidden",
        width: "100%",
    },
});

export default NotFound;
