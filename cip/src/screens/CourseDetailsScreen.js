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
} from 'react-native';
import { Button, Divider } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainpageScreen from './MainpageScreen.js';
import Upperbar from '../components/Upperbar.js';
import * as Courses from '../functions/courses.functions'
import * as Users from '../functions/users.functions'
import * as Modules from '../functions/modules.functions'
import CourseModulesDetails from '../components/CourseModulesDetails.js';
import BottomNavbar from '../components/BottomNavbar.js';
import { Picker } from '@react-native-picker/picker';
import Lottie from 'lottie-react-native'



export default CourseDetailsScreen = ({ navigation, route }) => {
    const [showText, setShowText] = useState(false);
    const [showModules, setShowModules] = useState(false)
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const [modules, setModules] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);
    /*  function checkModules() {
         return modules
     } */

    useEffect(() => {

        Modules.fetchModulesData(setModules)
        Users.getUser(setUser, setUserInfo);
        setHasFetched(true);

    }, [modules]);
    /* useEffect(() => {
        console.log(modules);
        //checkModules()
    }, [modules]) */
    return (<View>
        {/* checkModules() */modules ? (showModules ? (
            <CourseModulesDetails item={route.params} navigation={navigation} courseModules={modules.module}></CourseModulesDetails>
        ) : (
            <View >
                <ImageBackground source={require('../../images/background/eventosBg.png')} style={{ height: '100%', width: '100%' }}>
                    <Upperbar userInfo={userInfo} navigation={navigation}></Upperbar>
                    <View style={{ alignItems: 'center' }}>
                        <ScrollView>
                            <Image style={styles.image} source={require('../../images/curso_moodle.png')} />
                            <Text style={styles.Title}>{route.params.courseName}</Text>
                            <Text style={styles.Text}>Formador</Text>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>{route.params.trainers}</Text>
                            <View style={{ flexDirection: 'row', marginTop: '10%', alignSelf: 'center', justifyContent: 'space-between' }}>
                                <View style={[styles.orangeBox, { flexDirection: 'column' }]}>
                                    <Text style={styles.textBox}>30h</Text>
                                    <Divider style={{ flex: 1, justifyContent: 'center' }} />
                                    <Text style={styles.textBox}>Teoria e Prático</Text >
                                </View>
                                <View style={[styles.blueBox, { flexDirection: 'column' }]}>
                                    <Text style={[styles.textBox, { marginTop: '10%' }]}>{modules.module.length}</Text>
                                    <Divider style={{ marginTop: '6.5%' }} />
                                    <Text style={[styles.textBox]}>Tópicos</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: '15%' }}>
                                {showText ? (
                                    <View>
                                        <Text style={styles.seeMoreTitle}>Metodologias</Text>
                                        <Text style={styles.seeMoreText}>O curso foi concebido e organizado para se desenvolver na modalidade b-learning, através de sessões
                                            presenciais e de sessões online.Como tal, encontra-se dividido por módulos e está de acordo com as especificações e os standards de
                                            e-learning. Os módulos do curso são disponibilizados, na sua totalidade, na plataforma e-learning do Centro de Inovação Pedagógica.
                                            {'\n'}{'\n'}
                                            Através de sessões plenárias, comunicação e oficinas práticas com um claro enfoque numa problematização sobre teorias subjacentes à
                                            aprendizagem através de ambientes virtuais de aprendizagem, e sobre metodologias e abordagens multimodais, que incluem a
                                            experimentação/simulação de estratégias pedagógicodidáticas e debate, serão analisadas práticas de ensino favorecedoras de uma efetiva
                                            aprendizagem através de ambientes virtuais de aprendizagem, nomeadamente do Moodle e sua constelação de recursos.
                                            {'\n'}{'\n'}
                                            Tendo em conta que se pretende que os formandos, professores do Ensino Superior, sejam capazes de refletir sobre a sua
                                            profissionalidade docente, apostar-se-á:
                                            {'\n'}
                                            a) no autodiagnóstico de práticas pedagógicas multimodais mobilizadas pelos mesmos, quer no que diz respeito às estratégias utilizadas,
                                            quer aos recursos mobilizados, incluindo a literatura e a tecnologia;
                                            {'\n'}
                                            b) na proposta de autorrefomulação ou redirecionamento de ações desenvolvidas relacionadas com ambientes virtuais de aprendizagem;
                                            {'\n'}
                                            c) autorreflexão final sobre a produtividade e a pertinência dos caminhos traçados ao longo do curso de formação.
                                            {'\n'}{'\n'}
                                            O uso de soluções tecnológicas de e-learning permite que a formação se faça:
                                            {'\n'}
                                            a) de forma sincrónica, através da ferramenta de videoconferência Zoom;
                                            {'\n'}
                                            b) de forma assíncrona, através da plataforma de e-learning do Centro de Inovação Pedagógica.
                                        </Text>
                                        <Text style={styles.seeMoreTitle}>Avaliação</Text>
                                        <View style={{ flexDirection: 'row', width: '50%' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={[{}]}>Trabalhos desenvolvidos no curso</Text>
                                                <Text style={[{}]}>Participação com qualidade nas sessões síncronas e assíncronas</Text>
                                                <Text style={[{}]}>Autorreflexão final</Text>
                                            </View>
                                            <View style={[styles.evaluationBox, { flexDirection: 'column' }]}>
                                                <Text style={[styles.textBox, { marginTop: '10%' }]}>50%</Text>
                                                <Text style={[styles.textBox, { marginTop: '20%' }]}>20%</Text>
                                                <Text style={[styles.textBox, { marginTop: '20%', marginBottom: '10%' }]}>30%</Text>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    <Button title="Ver mais" color={'white'} buttonStyle={{ height: 50, width: 175, borderWidth: 1, borderColor: '#002CB0', borderRadius: 20, alignSelf: 'center' }} titleStyle={{ fontSize: 25, color: '#002CB0' }} onPress={() => setShowText(true)}></Button>
                                )}
                            </View>
                            <Image source={require('../../images/CIP_logo/CIP_LogoOriginal_CIP.png')} style={styles.ImagePorto}></Image>
                        </ScrollView>
                        <View style={{ position: 'absolute', top: 525 }}>
                            <Button title='Começar a aprender hoje' onPress={() => setShowModules(true)} buttonStyle={{ width: '90%', alignSelf: 'center', borderRadius: 20 }}></Button>
                        </View>
                    </View>
                </ImageBackground >
            </View >






        )) : (
            <Lottie source={require('../../images/animations/loading.json')} autoPlay loop />
        )}</View>
    )
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
    seeMoreTitle: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'black',
        marginTop: '5%',
        fontStyle: 'Source Sans Pro',
    },
    seeMoreText: {
        width: 350,
        marginTop: '5%',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'justify'
    },
    Text: {
        marginTop: '5%',
        fontSize: 20,
        alignSelf: 'center',
        color: '#C94E23'
    },
    ImagePorto: {
        width: '50%',
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
    image: {
        width: 350,
        height: 200,
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center'
    },
    orangeBox: {
        width: '35%',
        height: '125%',
        borderRadius: 10,
        borderColor: '#C94E23',
        borderWidth: 1,
        marginRight: 40
    },
    blueBox: {
        width: '35%',
        height: '125%',
        borderRadius: 10,
        borderColor: '#398FDB',
        borderWidth: 1,
    },
    textBox: {
        fontSize: 20,
        textAlign: 'center',
    },
    evaluationBox: {
        width: '25%',
        borderRadius: 10,
        borderColor: '#398FDB',
        borderWidth: 1,
        marginLeft: '60%'
    }
});