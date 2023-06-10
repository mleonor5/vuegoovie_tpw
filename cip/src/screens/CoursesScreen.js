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
    ImageBackground,
    LogBox
} from 'react-native';
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainpageScreen from './MainpageScreen.js';
import Upperbar from '../components/Upperbar.js';
import * as Courses from '../functions/courses.functions'
import * as Users from '../functions/users.functions'
import { Picker } from '@react-native-picker/picker';



export default CoursesScreen = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const [courses, setCourses] = useState([]);




    useEffect(() => {
        Users.getUser(setUser, setUserInfo);
        Courses.fetchCoursesData(setCourses)
    }, []);

    return (
        <View >
            <ImageBackground source={require('../../images/background/eventosBg.png')} style={{ height: '100%', width: '100%' }}>
                <Upperbar userInfo={userInfo} navigation={navigation}></Upperbar>
                <ScrollView>
                    <Text style={styles.Title}>Cursos</Text>
                    <View style={[styles.Input, { justifyContent: 'center' }]} >
                        <Picker selectedValue={''}
                            onValueChange={itemValue => setSelectedSchool(itemValue)}
                        >
                            <Picker.Item label="Tipo" value="null" />
                            <Picker.Item label="Regular" value="regular" />
                            <Picker.Item label="Rápidos" value="quick" />
                        </Picker>
                    </View>
                    {courses.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => Courses.toCourseDetails(item, navigation)}>
                            <CourseCard item={item}></CourseCard>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ImageBackground>
        </View>
    )
};


const styles = StyleSheet.create({
    Input: {
        borderWidth: 1,
        width: '30%',
        height: '4%',
        borderColor: '#B8C4E9',
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 25
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'black',
        marginTop: '5%',
        fontStyle: 'Source Sans Pro',
        textAlign: 'center'
    },
    Text: {
        marginTop: '10%',
        fontSize: 20,
        marginLeft: '5%'
    },
    ImagePorto: {
        width: '40%',
        height: '2%',
        marginTop: '15%',
        marginBottom: '20%',
        alignSelf: 'center'
    },
    Form: {
        backgroundColor: 'white',
        width: '85 %',
        height: '65%',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: '5%'
    },
    orText: {
        fontSize: 25,
        color: 'black',
        marginTop: '15%',
        fontStyle: 'Source Sans Pro'
    },
});