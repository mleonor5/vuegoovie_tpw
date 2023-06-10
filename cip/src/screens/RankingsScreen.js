import * as React from "react";
import { Image, StyleSheet, FlatList, Pressable, Text, View, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

const RankingsScreen = () => {
    const navigation = useNavigation();
    const Data = [
        {
            id: 1,
            place: 1,
            name: 'Maria Joao',
            points: '25pts'
        },
        {
            id: 2,
            place: 2,
            name: 'Lucas Correia',
            points: '20pts'
        },
        {
            id: 3,
            place: 3,
            name: 'Lucia Ferr.',
            points: '18pts'
        },
        {
            id: 4,
            place: 4,
            name: 'Elena Carvalho',
            points: '15pts'
        },
        {
            id: 5,
            place: 5,
            name: 'Vitor Santos',
            points: '13pts'
        },
        {
            id: 6,
            place: 6,
            name: 'Julia Castro',
            points: '10pts'
        },
        {
            id: 7,
            place: 7,
            name: 'Charlotte Padilla',
            points: '8pts'
        },
    ];
    const ItemRender = ({ place, name, points }) => (
        <View style={styles.item}>
            <Text style={{ fontSize: 24, color: 'black' }}>{place}</Text>
            <Text style={[styles.names]}>{name}</Text>
            <Text style={styles.namesPoints}>{points}</Text>
        </View >
    );

    const ItemDivider = () => {
        return (
            <View
                style={{
                    alignSelf: 'center',
                    height: 1,
                    width: "93%",
                    backgroundColor: "#B8C4E9",
                }}
            />
        );
    }
    return (
        <View>
            <ImageBackground source={require('../../images/background/Rankings.png')} style={{ height: '105%', width: '100%' }}>

                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../images/CIP_logo/CIP_Logotipo_white_CIP_LogoIcon_Branco.png')} style={styles.cipLogooriginalCip2Icon} resizeMode="cover" />
                    <Image style={styles.ponto} source={require('../../images/icons/points.png')} />
                    <Text style={styles.textPontos}>0</Text>
                    <Image style={styles.coins} source={require('../../images/icons/coins.png')} />
                    <Text style={styles.textPontos}>0</Text>
                </View>
                <View>
                    <Text style={styles.title}>Leaderboard</Text>
                    <Image source={require('../../images/medalha/Group57.png')} style={styles.medals} />
                </View>
                <ScrollView>
                    <View style={[styles.Input, { justifyContent: 'center' }]}>
                        <Picker>
                            <Picker.Item label="Tipo" value="null" />
                            <Picker.Item label="Frequentador" value="Frquentador" />
                        </Picker>
                    </View>
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.medal1} source={require('../../images/medalha/medal1.png')} />
                        <Text style={styles.names}>Maria Joao</Text>
                        <Text style={styles.namesPoints}> 25pts</Text>
                    </View> */}
                    <View style={{ marginBottom: 160, marginTop: 20 }}>
                        <FlatList
                            data={Data}
                            renderItem={({ item }) => <ItemRender place={item.place} name={item.name} points={item.points} />}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={ItemDivider}
                        />
                    </View>

                </ScrollView>
            </ImageBackground >
        </View >
    );
};

const styles = StyleSheet.create({
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
        color: 'white'
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

    title: {
        top: 30,
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    medals: {
        marginTop: 50,
        width: 220,
        height: 105,
        alignSelf: 'center',
        marginBottom: 20
    },
    Input: {
        alignSelf: 'flex-end',
        marginTop: 40,
        marginRight: 20,
        borderWidth: 1,
        width: '40%',
        // height: '%',
        borderColor: '#B8C4E9',
        borderRadius: 10,
    },
    // medal1: {
    //     width: 80,
    //     height: 80,
    //     alignSelf: 'center'
    // },
    names: {
        fontSize: 18,
        marginLeft: 2,
    },
    namesPoints: {
        fontSize: 15,
        marginRight: 15
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 8

    },
});

export default RankingsScreen;