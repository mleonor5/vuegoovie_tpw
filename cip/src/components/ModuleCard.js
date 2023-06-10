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


export default ModuleCard = ({ navigation, item }) => {
    return (
        <View>
            <Card containerStyle={{ borderRadius: 10, height: 85, width: '80%', shadowColor: '#B8C4E9', alignSelf: 'center' }}>
                <Text style={styles.cardText}>{item.topic}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    <Text style={styles.cardHour}>{item.hours}h</Text>
                    <Image style={styles.cardImage} source={require('../../images/icons/playModule.png')}></Image>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardText: {
        bottom: 10,
        fontSize: 15
    },
    cardHour: {
        fontSize: 15,
    },
    cardImage: {
        width: 25,
        height: 25,
        alignSelf: 'flex-end'
    }
})