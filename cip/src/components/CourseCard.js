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


export default CourseCard = ({ navigation, item }) => {
    return (
        <View>
            <Shadow style={{width: 285, height: 285, marginBottom:60, marginRight: 40}} offset= {[75,25]} startColor={'#b8c4e9'}>
                <Card containerStyle={{ marginTop: 15, borderRadius: 10, height: 290, width: 300, alignItems: 'center', shadowColor: '#B8C4E9', marginLeft: 55 }}>
                    <Card.Image style={styles.cardImg} source={require('../../images/curso_moodle.png')} />
                    <Card.Title style={styles.cardTitle}>{item.courseName}</Card.Title>
                    <Text style={styles.cardFormador}>Formador: {item.trainers}</Text>
                </Card>
            </Shadow>
        </View>
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
    },
    cardFormador: {
        marginTop: 10,
    },
})