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
    Modal,
    Pressable,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Button } from '@rneui/themed';
import { Card } from '@rneui/themed'
import { Shadow } from 'react-native-shadow-2'
import ModuleCard from './ModuleCard';


export default CourseModulesDetails = ({ navigation, item, courseModules }) => {
    const moduleList = courseModules.map(item => item).reverse();
    const [modalVisible, setModalVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false); 

    return (
        <View>
            <ImageBackground source={require('../../images/background/noticia4.png')}>
                <ScrollView>
                    <ImageBackground source={require('../../images/background/noticia2.png')} style={{ height: 350 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../images/icons/seta1.png')} style={styles.arrow} onPress={() => navigation.navigate('News')} />
                            <Image style={styles.ponto} source={require('../../images/icons/points.png')} />
                            <Text style={styles.textPontos}>0</Text>
                            <Image style={styles.coins} source={require('../../images/icons/coins.png')} />
                            <Text style={styles.textPontos}>0</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 225, width: '90%', marginTop: '10%', alignSelf: 'center', borderRadius: 20 }}>
                            <Text style={styles.cipName}> {item.courseName}</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={styles.oragenText}>Formador:</Text>
                                <Text style={styles.text}>{item.trainers}</Text>
                            </View>
                            <Image style={styles.img} source={require('../../images/icons/clock.png')}></Image>
                            <Text style={styles.hours}>{item.duration}</Text>
                            <View style={{ bottom: 30 }}>
                                <Button title='Cancelar' titleStyle={{ color: 'blue' }} buttonStyle={{ width: 100, height: 50, marginLeft: '10%', borderRadius: 30, borderColor: 'blue', borderWidth: 1 }} color='white' onPress={() => setModalVisible(true)}></Button>
                            </View>
                            <Image style={styles.moddlePhoto} source={require('../../images/curso_moodle.png')} />

                        </View>
                    </ImageBackground>
                    <View>
                        {moduleList.map((item, index) => (
                            <ModuleCard item={item} key={index}></ModuleCard>
                        ))}
                    </View>
                    <Image source={require('../../images/CIP_logo/CIP_LogoFormatoWeb_CIP.png')} style={styles.cipLogotipoRgb} resizeMode="cover" />
                </ScrollView>
                <View style={styles.centeredView}>
                    <Modal animationType='fade' transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Pretende cancelar a sua inscrição no curso?</Text>
                                <View style={styles.modalButtons}>
                                    <Pressable style={[styles.modalBtn, styles.modalCancelarBtn]} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.modalCancelarTxt}>Voltar</Text>
                                    </Pressable>
                                    <Pressable style={[styles.modalBtn, styles.modalEditBtn]} onPress={() => { setEditVisible(true), setModalVisible(!modalVisible) }}>
                                        <Text style={styles.modalEditarTxt}>Cancelar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.editCenteredView}>
                    <Modal animationType='fade' transparent={true} visible={editVisible} onRequestClose={() => setEditVisible(!editVisible)}>
                        <View style={styles.editCenteredView}>
                            <View style={styles.editModalView}>
                                <View>
                                    <Text style={styles.txtSucesso}>Curso Cancelado</Text>
                                    <Pressable style={[styles.modalBtn, styles.voltarBtn]} onPress={() => {setEditVisible(!editVisible), navigation.goBack()}}>
                                        <Text style={styles.modalCancelarTxt}>Voltar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ImageBackground >
        </View >
    )
}

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

    moddlePhoto: {
        width: '60%',
        height: '40%',
        marginLeft: '38%',
        bottom: 120,
        borderRadius: 15,
    },

    oragenText: {
        top: 10,
        marginBottom: 70,
        textAlign: 'center',
        color: '#C94E23',
        marginLeft: '10%',
        fontSize: 15,
        fontWeight: '600',
    },
    text: {
        top: 10,
        marginBottom: 70,
        textAlign: 'center',
        marginLeft: '2%',
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
    },

    cipName: {
        color: 'black',
        marginTop: '10%',
        marginLeft: '10%',
        fontSize: 25,
        fontWeight: 'bold'
    },

    cipTextNews: {
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'justify',
        fontSize: 18,
        color: 'black',
        top: 60,
    },

    cipLogotipoRgb: {
        marginTop: 100,
        marginBottom: 20,
        width: 170,
        height: 41,
        alignSelf: 'center',
    },
    img: {
        marginLeft: '10%',
        bottom: 50,
    },
    hours: {
        marginLeft: '15%',
        bottom: 66.5,
    },
    cardText: {
        right: 80,
        bottom: 10,
        fontSize: 15
    },
    cardHour: {
        right: 80,
        fontSize: 15,
        bottom: 30
    },
    cardImage: {
        left: 160,
        width: 50,
        height: 50,
        bottom: 17
    },
    modalButtons: {
        flexDirection: 'row',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        margin: 20,
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    modalText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },

    modalBtn: {
        borderRadius: 13,
        width: 119,
        height: 32,
        padding: 5,
        elevation: 2,
        top: 20
    },

    modalCancelarBtn: {
        backgroundColor: '#C94E23',
        right: 20,
    },

    modalEditBtn: {
        borderColor: '#002CB0',
        borderWidth: 1,
        left: 20,
        backgroundColor: '#F7F7F7'
    },

    modalCancelarTxt: {
        color: '#FEFEFE',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    modalEditarTxt: {
        color: '#002CB0',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    editCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    editModalView: {
        margin: 20,
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    txtSucesso: {
        color: '#000',
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 30,
        fontWeight: 'bold',
    },

    voltarBtn: {
        backgroundColor: '#C94E23',
        alignSelf: 'center',
    }
})