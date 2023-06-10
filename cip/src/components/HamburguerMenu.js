import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MenuItems from './MenuItems'; // import your menu items component

const HamburgerMenu = ({ navigation, userInfo }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                style={styles.hamburgerButton}
            >
                <Image
                    source={require('../../images/CIP_logo/CIP_Logotipo_RGB.png')}
                    style={styles.hamburgerIcon}
                />
            </TouchableOpacity>
            <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} navigation={navigation} userInfo={userInfo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        right: 350,
        zIndex: 999,
    },
    hamburgerButton: {
        padding: 10,
    },
    hamburgerIcon: {
        width: 40,
        height: 40,
    },
});

export default HamburgerMenu;
