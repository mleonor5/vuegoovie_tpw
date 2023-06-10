import React from 'react';
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
    Pressable,
    Alert
} from 'react-native';
import { Card } from '@rneui/themed'
import { Shadow } from 'react-native-shadow-2'

export default AboutScreen = ({ navigation }) => {
    const nameOne = () => {

    }
    return (
        <View style={styles.eventosVazio}>
            <ImageBackground source={require('../../images/background/second.jpg')} style={{ height: '100%', width: '100%' }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={require('../../images/CIP_logo/CIP_Logotipo_RGB.png')} style={styles.cipLogooriginalCip2Icon} resizeMode="cover" />
                        <Image style={styles.ponto} source={require('../../images/icons/points.png')} />
                        <Text style={styles.textPontos}>0</Text>
                        <Image style={styles.coins} source={require('../../images/icons/coins.png')} />
                        <Text style={styles.textPontos}>0</Text>
                    </View>
                    <View>
                        <Text style={styles.Title}>Sobre</Text>
                        <Text style={styles.text}>O Centro de Inovação Pedagógica, enquanto unidade de serviços especializados do P.PORTO, surge com a missão de estimular,
                            disseminar e reforçar práticas de ensino e aprendizagem inovadoras, capacitando docentes para as transições ecológica e digital
                            que o mundo de hoje nos exige.</Text>
                        <Text style={styles.text1}>
                            O processo de ensino e aprendizagem implica uma visão holística do conhecimento e exige a construção de uma profissionalidade docente de forma dinâmica,
                            contínua e complexa que depende diretamente de processos de colaboração e reflexão crítica. As transições induzidas pelo contexto pandémico e de emergência
                            que vivemos resultaram num questionamento do campus em que atuamos, levando-nos a encarar a inovação pedagógica como um elemento central no Politécnico do Porto,
                            enquanto instituição de ensino superior moderna, ativa e capaz de se posicionar como uma referência nacional e internacional.
                        </Text>
                        <Text style={styles.text1}>
                            Neste contexto, o Centro de Inovação Pedagógica procurará nos próximos anos académicos:{'\n'}{'\n'}
                            1. mapear práticas pedagógicas desenvolvidas nas diferentes unidades orgânicas do P.PORTO;{'\n'}
                            2. fomentar a reconfiguração da profissionalidade docente dos professores do P.PORTO, pela aposta na (re)capacitação pedagógica para contextos híbridos;{'\n'}
                            3. desenvolver práticas de discussão pública sobre a experimentação de abordagens e estratégias de ensino-aprendizagem inovadoras;{'\n'}
                            4. promover a criação de projetos de inovação pedagógica, apoiando a sua incubação e consecução;{'\n'}
                            5. criar comunidades de aprendizagem reflexivas, críticas e sustentáveis, tendo em conta os nodes de especialidade dos saberes.
                        </Text>
                        <Text style={styles.text1}>
                            Tendo como grande objetivo a melhoria permanente dos processos de ensino e aprendizagem desenvolvidos nas unidades orgânicas do P.PORTO, o Centro de Inovação Pedagógica
                            consiste numa unidade que incluirá os seguintes espaços de interação e intervenção, de, com e para a comunidade:{'\n'}{'\n'}

                            1. Gabinete de Ensino à Distância;{'\n'}
                            2. Gabinete de Formação e Desenvolvimento Pedagógico;{'\n'}
                            3. Laboratório de Apoio ao Ensino e Aprendizagem.{'\n'}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.Subtitle}>Membros  do Centro de Inovação Pedagógica
                        </Text>
                        <View style={{ flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', marginTop: 30 }}>
                            <Shadow style={{ width: 260, height: 260 }} offset={[75, 35]} startColor={'#c94e23'}>
                                <Image style={styles.cardImg2} source={require('../../images/cip_team/mariocruz.png')} />
                            </Shadow>
                            <Text style={styles.textMario}>Mário Cruz</Text>
                            <Text style={styles.subtextMario}>Diretor do Centro {'\n'}de Inovação Pedagógica</Text>

                            <Shadow style={{ width: 260, height: 260 }} offset={[75, 75]} startColor={'#c94e23'}>
                                <Image style={styles.cardImg} source={require('../../images/cip_team/ricardoqueiros.jpg')} />
                            </Shadow>
                            <Text style={styles.textRicardo}>Ricardo Queirós</Text>
                            <Text style={styles.subtextRicardo}>Coordenador do Gabinete {'\n'}de Ensino à Distância</Text>

                            <Shadow style={{ width: 260, height: 260 }} offset={[75, 75]} startColor={'#c94e23'}>
                                <Image style={styles.cardImg3} source={require('../../images/cip_team/daniela.jpg')} />
                            </Shadow>
                            <Text style={styles.textDaniela}>Daniela Mascarenhas</Text>
                            <Text style={styles.subtextDaniela}>Coordenadora do Gabinete de {'\n'}Formação e Desenvolvimento{'\n'} Pedagógico</Text>

                            <Shadow style={{ width: 260, height: 260 }} offset={[75, 85]} startColor={'#c94e23'}>
                                <Image style={styles.cardImg4} source={require('../../images/cip_team/carlapinto.jpg')} />
                            </Shadow>
                            <Text style={styles.textCarla}>Carla Pinto</Text>
                            <Text style={styles.subtextCarla}>Coordenadora do Laboratório {'\n'}de Apoio ao Ensino {'\n'}e Aprendizagem</Text>

                            {/* <Card containerStyle={{ marginTop: 60, borderRadius: 7, height: 260, width: 267, alignItems: 'center' }}>
                                <Card.Image style={styles.cardImg} source={require('../../images/cip_team/ricardoqueiros.jpg')} />
                            </Card>
                            <Card containerStyle={{ marginTop: 60, borderRadius: 7, height: 260, width: 267, alignItems: 'center' }}>
                                <Card.Image style={styles.cardImg} source={require('../../images/cip_team/daniela.jpg')} />
                            </Card>
                            <Card containerStyle={{ marginTop: 60, borderRadius: 7, height: 260, width: 267, alignItems: 'center' }}>
                                <Card.Image style={styles.cardImg} source={require('../../images/cip_team/carlapinto.jpg')} />
                            </Card> */}
                        </View>
                    </View>
                    <Image source={require('../../images/CIP_logo/CIP_LogoFormatoWeb_CIP.png')} style={styles.cipLogotipoRgb} resizeMode="cover" />
                </ScrollView>

            </ImageBackground >
        </View >
    );
};


const styles = StyleSheet.create({
    eventosVazio: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        height: 846,
        overflow: "hidden",
        width: "100%",
    },
    iconLayout: {
        height: "100%",
        width: "100%",
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
    Title: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'black',
        marginTop: '5%',
        fontStyle: 'Source Sans Pro',
        textAlign: 'center'
    },
    text: {
        fontStyle: 'Source Sans Pro',
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'justify',
        marginTop: 30,
        fontSize: 18
    },
    text1: {
        fontStyle: 'Source Sans Pro',
        fontSize: 18,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'justify',
        marginTop: 25
    },
    Subtitle: {

        fontSize: 30,
        color: 'black',
        marginTop: 30,
        fontStyle: 'Source Sans Pro',
        textAlign: 'center'
    },
    cardImg: {
        width: 267,
        height: 267,
        borderRadius: 7,
        marginTop: 60,
        marginLeft: 60
    },
    textRicardo: {
        color: '#F7F7F7',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 70,
        marginTop: 30
    },
    subtextRicardo: {
        color: '#C94E23',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 15,
        marginLeft: 80
    },
    cardImg2: {
        width: 267,
        height: 267,
        borderRadius: 7,
        marginTop: 20,
        marginLeft: 60
    },
    textMario: {
        color: '#F7F7F7',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 60,
        marginTop: -10
    },
    subtextMario: {
        color: '#C94E23',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 15,
        marginLeft: 80
    },
    cardImg3: {
        width: 267,
        height: 267,
        borderRadius: 7,
        marginTop: 60,
        marginLeft: 60
    },
    textDaniela: {
        color: '#F7F7F7',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 80,
        marginTop: 30,
    },
    subtextDaniela: {
        color: '#C94E23',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 15,
        marginLeft: 100
    },
    cardImg4: {
        width: 267,
        height: 267,
        borderRadius: 7,
        marginTop: 70,
        marginLeft: 60
    },
    textCarla: {
        color: '#F7F7F7',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 80,
        marginTop: 30,
    },
    subtextCarla: {
        color: '#C94E23',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 15,
        marginLeft: 100
    },
    cipLogotipoRgb: {
        marginTop: 100,
        marginBottom: 20,
        width: 170,
        height: 41,
        alignSelf: 'center',

    },
});