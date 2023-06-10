import * as React from "react";
import { useState, useEffect } from "react";
import { Image, StyleSheet, Pressable, Text, View, ImageBackground, ScrollView, Modal, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from 'react-native-shadow-2';
import { Card } from '@rneui/themed'
import * as Users from '../functions/users.functions'



const ProfileScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false); //modal para editar o nome
    const [editVisible, setEditVisible] = useState(false); //modal com mensagem de sucesso da edição do nome
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        Users.getUser(setUser, setUserInfo);
        console.log(userInfo);
    }, [userInfo]);

    return (
        <View style={styles.eventosVazio}>
            <ImageBackground source={require('../../images/background/eventosBg.png')} style={{ height: '100%', width: '100%' }}>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../images/icons/seta1.png')} style={styles.arrow} />
                    </TouchableOpacity>
                    <Pressable
                        style={styles.cipLogotipoRgb2}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Image style={styles.iconLayout} resizeMode="cover" />
                    </Pressable>
                    <Image source={require('../../images/CIP_logo/CIP_Logotipo_RGB.png')} style={styles.cipLogooriginalCip2Icon} resizeMode="cover" />
                    <Image source={require('../../images/icons/profile.png')} style={styles.profileImg} />
                    <View style={styles.information}>
                        <Text style={styles.name}>{userInfo.username}</Text>
                        <Pressable onPress={() => setModalVisible(true)}>
                            <Image style={styles.pencil} source={require('../../images/icons/pencil.png')} />
                        </Pressable>
                    </View>
                    <View style={styles.pontos}>
                        <Image style={styles.ponto} source={require('../../images/icons/points.png')} />
                        <Text style={styles.textPontos}>{userInfo.points}</Text>
                        <Image style={styles.coins} source={require('../../images/icons/coins.png')} />
                        <Text style={styles.textPontos}>{userInfo.coins}</Text>
                    </View>
                    <View style={styles.progress}>
                        <Text style={styles.progressText}>Em Progresso</Text>
                        <View>
                            <Shadow style={{ width: 290, height: 295 }} offset={[35, 25]} startColor={'#B8C4E9'}>
                                <Card containerStyle={{ marginTop: 15, borderRadius: 10, height: 300, width: 300, alignItems: 'center', shadowColor: '#B8C4E9', marginLeft: 25 }}>
                                    <Card.Image style={styles.cardImg} source={require('../../images/curso_moodle.png')} />
                                    <Card.Title style={styles.cardTitle}>Plataforma Moodle</Card.Title>
                                    <Text style={{marginTop:30}}>Ricardo Queirós</Text>
                                </Card>
                            </Shadow>
                        </View>

                    </View>
                    <View style={styles.ended}>
                        <Text style={styles.progressText}>Concluido</Text>
                        <Card containerStyle={{
                            height: 120, marginTop: 15, borderRadius: 10, marginLeft: 25
                        }}  >
                            < Card.Image style={styles.cardImg2} source={require('../../images/curso_moodle.png')} onPress={() => navigation.navigate('Certificate')} />
                            <Card.Title style={styles.cardTitle2}>Plataforma Moodle</Card.Title>
                            <Text style={styles.cardFormador3}>Ricardo Queirós</Text>
                            <Image style={styles.certificado} source={require('../../images/icons/certificado.png')} />
                        </Card>
                    </View>
                    <Image source={require('../../images/CIP_logo/CIP_LogoFormatoWeb_CIP.png')} style={styles.cipLogotipoRgb} resizeMode="cover" />
                </ScrollView>
                <View style={styles.centeredView}>
                    <Modal animationType='fade' transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Editar nome de Utilizador:</Text>
                                <TextInput style={styles.modalInput}></TextInput>
                                <View style={styles.modalButtons}>
                                    <Pressable style={[styles.modalBtn, styles.modalCancelarBtn]} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.modalCancelarTxt}>Cancelar</Text>
                                    </Pressable>
                                    <Pressable style={[styles.modalBtn, styles.modalEditBtn]} onPress={() => { setEditVisible(true), setModalVisible(!modalVisible) }}>
                                        <Text style={styles.modalEditarTxt}>Editar</Text>
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
                                    <Pressable onPress={() => { setEditVisible(!editVisible) }}>
                                        <Text style={styles.close}>X</Text>
                                    </Pressable>
                                    <Text style={styles.txtSucesso}>Nome de Utilizador alterado com sucesso</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

            </ImageBackground >
        </View >
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 10
    },
    iconLayout: {
        height: "100%",
        width: "100%",
    },
    cipLogotipoRgb2: {
        top: 685,
        width: 170,
        height: 41,
        alignSelf: 'center',
        position: "absolute",
    },
    cipLogooriginalCip2Icon: {
        top: 25,
        left: 340,
        width: 45,
        height: 45,
        position: "absolute",
    },
    arrow: {
        top: 35,
        left: 15
    },
    frame: {
        left: 23,
        top: 24,
        width: 23,
        height: 23,
        position: "absolute",
    },
    eventosVazio: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        height: 846,
        overflow: "hidden",
        width: "100%",
    },
    profileImg: {
        marginTop: 70,
        maxHeight: 90,
        maxWidth: 90,
        alignSelf: 'center'
    },
    name: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        color: '#000000',
        fontWeight: 'bold'
    },
    information: {
        flexDirection: 'row',
        alignSelf: 'center'
    },

    pencil: {
        padding: 10,
        left: 10,
        top: 10,
    },

    pontos: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginTop: 10
    },
    textPontos: {
        fontSize: 18,
        marginLeft: 1
    },
    ponto: {
        width: 20,
        height: 20,
        marginTop: 2
    },
    coins: {
        marginLeft: 15,
        marginTop: 2
    },
    progress: {
        marginTop: 70
    },
    progressText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginLeft: 25
    },
    card: {
        width: 200
    },
    cardImg: {
        width: 250,
        height: 140,
        borderRadius: 7
    },
    cardImg2: {
        width: 150,
        height: 80,
        borderRadius: 7
    },
    cardTitle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '100',
        alignSelf: 'flex-start'
    },
    cardTitle2: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '100',
        marginLeft: 150,
        top: -90
    },

    cardFormador3: {
        marginLeft: 175,
        fontSize: 11,
        marginTop: -60
    },
    ended: {
        marginTop: 50
    },
    cipLogotipoRgb: {
        marginTop: 50,
        width: 170,
        height: 41,
        alignSelf: 'center',

    },
    certificado: {
        alignSelf: 'flex-end',
        marginTop: -20
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
    },

    modalInput: {
        borderWidth: 1,
        borderColor: '#B8C4E9',
        borderRadius: 10,
        height: 37,
        width: 276,
        marginTop: 30,
        marginBottom: 30,
    },

    modalBtn: {
        borderRadius: 13,
        width: 119,
        height: 32,
        padding: 5,
        elevation: 2,
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

    close: {
        color: '#000',
        alignSelf: 'flex-end',
        marginBottom: 20,
        bottom: 20,
        left: 15,
    },

    txtSucesso: {
        color: '#C94E23',
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 30,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
