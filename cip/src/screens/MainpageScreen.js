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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Upperbar from '../components/Upperbar'
import CourseCard from '../components/CourseCard';
import NewsCard from '../components/NewsCard';
import * as News from '../functions/news.functions';
import * as Courses from '../functions/courses.functions'
import * as Users from '../functions/users.functions'

export default MainpageScreen = ({ route, navigation }) => {
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const [news, setNews] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        Users.getUser(setUser, setUserInfo);
        News.fetchNewsData(setNews)
        Courses.fetchCoursesData(setCourses)
    }, []);

    return (
        <View >

            <ImageBackground source={require('../../images/background/first.jpg')} style={{ height: '100%', width: '100%' }}>
                <Upperbar userInfo={userInfo} navigation={navigation}></Upperbar>
                <ScrollView>
                    <Text style={styles.Title}>Olá {user}!</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.Text}>Recomendado:</Text>

                    </View>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {courses.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate('CourseDetails', item)}>
                                <CourseCard item={item}></CourseCard>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <Text style={styles.Text}>Notícias:</Text>

                    {<ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {news.slice(0, 5).map((item, index) => (
                            <NewsCard item={item} key={index}></NewsCard>
                        ))}
                    </ScrollView>}
                    <Text style={styles.Text}>Cursos:</Text>

                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {courses.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate('CourseDetails', item)}>
                                <CourseCard item={item}></CourseCard>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Image source={require('../../images/CIP_logo/CIP_LogoOriginal_CIP.png')} style={styles.ImagePorto}></Image>

                </ScrollView>
            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({
    Input: {
        borderWidth: 1,
        width: '70%',
        height: '10%',
        borderColor: '#B8C4E9',
        borderRadius: 10,
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
        width: 170,
        height: 41,
        alignSelf: 'center',
        marginTop: '25%',
        marginBottom: '20%',
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