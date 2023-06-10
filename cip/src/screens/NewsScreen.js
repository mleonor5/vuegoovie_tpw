import * as React from "react";
import { useState, useEffect } from "react";
import { Image, StyleSheet, Pressable, Text, View, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import {Shadow} from 'react-native-shadow-2'
import { Card } from '@rneui/themed'
import Upperbar from "../components/Upperbar";
import * as News from "../functions/news.functions"
import * as Users from "../functions/users.functions"
import { Picker } from "@react-native-picker/picker";
import NewsCard from "../components/NewsCard";



const NewsScreen = ({navigation}) => {
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        Users.getUser(setUser, setUserInfo);
        News.fetchNewsData(setNews)
    })

    return (
        <View>
            <ImageBackground source={require('../../images/background/eventosBg.png')} style={{ height: '100%', width: '100%' }}>
                <Upperbar userInfo={userInfo} navigation={navigation}></Upperbar>
                <ScrollView>
                    <Text style={styles.Title}>Notícias</Text>
                    <View>
                        {news.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate('EuroNews')}>
                                <NewsCard item={item}></NewsCard>
                            </TouchableOpacity>
                        ))}
                        <Image source={require('../../images/CIP_logo/CIP_LogoFormatoWeb_CIP.png')} style={styles.cipLogotipoRgb} resizeMode="cover" />
                    </View>
                </ScrollView>
            </ImageBackground >
        </View >
    );
};

const styles = StyleSheet.create({
    Title: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'black',
        marginTop: '5%',
        fontStyle: 'Source Sans Pro',
        textAlign: 'center'
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
        marginTop: 44
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

    title:{
        top: 30,
        textAlign: 'center',
        fontSize:40,
        color: 'black',
        fontWeight: 'bold',
    },

    card:{
        top: 60,
        left: 20,
    },
    
    cardImg: {
        left: 5,
        width: 250,
        height: 140,
        borderRadius: 7
    },

    cardNews:{
        top: 30,
        fontSize: 12,
        color: "black",
        textAlign: "center",
        fontWeight: "600",
    },

    cardNewsEuro:{
        top: 30,
        fontSize: 12,
        color: "#c94e23",
        textAlign: "center",
        fontWeight: "600",
    },

    cipLogotipoRgb: {
        marginTop: 160,
        marginBottom:20,
        width: 170,
        height: 41,
        alignSelf: 'center',
    },
});

export default NewsScreen;