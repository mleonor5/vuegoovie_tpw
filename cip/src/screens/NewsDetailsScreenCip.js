import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from '@rneui/themed'
import { color } from "@rneui/base";



const NewsCip = () => {
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground source={require('../../images/background/noticia4.png')}>
                <ScrollView>
                    <ImageBackground source={require('../../images/background/noticia2.png')}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../images/icons/seta1.png')} style={styles.arrow} onPress={() => navigation.navigate('News')}/>
                            <Image style={styles.ponto} source={require('../../images/icons/points.png')} />
                            <Text style={styles.textPontos}>0</Text>
                            <Image style={styles.coins} source={require('../../images/icons/coins.png')} />
                            <Text style={styles.textPontos}>0</Text>
                        </View>
                        <View>
                            <Image style={styles.cipPhoto} source={require('../../images/noticia_cip_tecnhology.png')}/>
                            <Text style={styles.cipText}>O Centro de Inovação Pedagógica passa a integrar a rede "Techonology- assisted Learning, Innovation in Education, and Lifelong Learner Autonomy International Research Group"</Text>
                            <Text style={styles.cipName}>CIP</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text style={styles.cipTextNews}>No passado dia 21 de setembro de 2022, o Centro de Inovação Pedagógica participou numa reunião, organizada pela Universidade Hassan II de Casablanca e com participantes de todo o mundo, em que se criou a rede internacional “Technology-assisted Learning, Innovation in Education, and Lifelong Learner Autonomy International Research Group”.</Text>
                    </View>
                    <Image source={require('../../images/CIP_logo/CIP_LogoFormatoWeb_CIP.png')} style={styles.cipLogotipoRgb} resizeMode="cover" />
                </ScrollView>
            </ImageBackground >
        </View >
    );
};

const styles = StyleSheet.create({
    arrow: {
        top: 35,
        left: 15,
    },

    cipLogooriginalCip2Icon: {
        top: 25,
        left: '4%',
        width: 45,
        height: 45,
        position: "absolute",
    },

    textPontos: {
        fontSize: 18,
        marginLeft: 1,
        marginTop: 44,
        color: '#F7F7F7',
    },
    ponto: {
        width: 20,
        height: 20,
        marginTop: 44,
        marginLeft: 305
    },
    coins: {
        marginLeft: 5,
        marginTop: 44
    },

    cipPhoto:{
        top: 50,
        left: 25,
        marginBottom: 60
    },

    cipText:{
        top: 10,
        marginBottom: 70,
        textAlign: 'center',
        color: '#F7F7F7',
        marginLeft: 30,
        marginRight: 30,
        fontSize: 15,
        fontWeight: '600',
    },

    cipName: {
        color: '#F7F7F7',
        left: 30,
        bottom: 30,
    },

    cipTextNews: {
        marginLeft:30,
        marginRight: 30,
        textAlign: 'justify',
        fontSize: 18,
        color: 'black',
        top: 60,
    },

    cipLogotipoRgb: {
        marginTop: 100,
        marginBottom:20,
        width: 170,
        height: 41,
        alignSelf: 'center',
    },
});

export default NewsCip;