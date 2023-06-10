import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";
import RankingsScreen from "../screens/RankingsScreen";
import homepageScreen from "../screens/HomepageScreen";
import mainpageScreen from "../screens/MainpageScreen";

const Menu = createDrawerNavigator();

export default function SideMenu() {
    return (
        <NavigationContainer independent={true} style={styles.menu}>
            <Menu.Navigator screenOptions={{ headerShown: false }} initialRouteName='Mainpage'>
                <Menu.Screen
                    screenOptions={{ headerShown: false }}
                    name="Mainpage"
                    component={mainpageScreen}
                />
                <Menu.Screen name="Ver perfil" component={ProfileScreen} />
                <Menu.Screen name="Sobre CIP" component={AboutScreen} />
                <Menu.Screen name="Leaderboard" component={RankingsScreen} />
                <Menu.Screen name="Sair" component={homepageScreen} />
            </Menu.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    menu: {
        color: '#1a3568'
    }
})