import React, { useState, useEffect } from 'react';
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
import { Button } from '@rneui/themed';
import { Card } from '@rneui/themed'
import { Shadow } from 'react-native-shadow-2'


export default NewsCard = ({ navigation, item }) => {
    return (
        <Shadow style={{width: 285, height: 335, marginBottom:40, marginTop:40, marginRight: 40}} offset= {[75,75]} startColor={'#c94e23'}>
            <Card containerStyle={{ marginTop: 15, borderRadius: 10, height: 350, width: 300, alignItems: 'center', shadowColor: '#B8C4E9', marginLeft: 55 }}>
                <Card.Image style={styles.cardImg} source={{ uri: (item.img) }} resizeMode='contain'/>
                <Card.Title style={styles.cardTitle}>{item.summary}</Card.Title>
            </Card>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    cardImg: {
        width: 250,
        height: 140,
        borderRadius: 7
    },
    cardTitle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '100',
        alignSelf: 'flex-start'
    }
})