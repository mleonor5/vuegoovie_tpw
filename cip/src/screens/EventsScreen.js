import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Lottie from 'lottie-react-native'


const EventsEmpty = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.eventosVazio}>
            <ImageBackground source={require('../../images/background/eventosBg.png')} style={{ height: '100%', width: '100%' }}>
                <Image source={require('../../images/icons/seta1.png')} style={styles.arrow} />
                <Pressable
                    style={styles.cipLogotipoRgb2}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Image style={styles.iconLayout} resizeMode="cover" />
                </Pressable>
                <Image source={require('../../images/CIP_logo/CIP_Logotipo_RGB.png')} style={styles.cipLogooriginalCip2Icon} resizeMode="cover" />
                <Text style={styles.textEventos}>
                    Neste momento não temos nenhum evento. Esteja atento serão adicionados
                    brevemente.
                </Text>
                <Lottie source={require('../../images/animations/eventos.json')} autoPlay loop/>
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
    cipLogooriginalCip2Icon: {
        top: 25,
        left: 340,
        width: 45,
        height: 45,
        position: "absolute",
    },
    arrow: {
        top: 35,
        left: 15
    },
    textEventos: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'justify',
        width: '70%',
        top: 380,
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
        width: '85%',
        height: '50%',
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

export default EventsEmpty;
