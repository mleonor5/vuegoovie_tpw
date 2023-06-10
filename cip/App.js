/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavbar from './src/components/BottomNavbar.js';
//const Tab = createBottomTabNavigator();
let user = ''
let token = ''
let usercourseID = ''
let course = ''
let courseID = ''
/* AsyncStorage.setItem('user', user)
  .then(() => console.log('User stored successfully'))
  .catch(error => console.error('Error storing data: ', error));
AsyncStorage.setItem('token', token)
  .then(() => console.log('Token stored successfully'))
  .catch(error => console.error('Error storing data: ', error)); */
AsyncStorage.setItem('usercourseID', usercourseID)
  .then(() => console.log('UsercourseID stored successfully'))
  .catch(error => console.error('Error storing data: ', error));
/* AsyncStorage.setItem('course', course)
  .then(() => console.log('Course stored successfully'))
  .catch(error => console.error('Error storing data: ', error)); */
AsyncStorage.setItem('courseID', courseID)
  .then(() => console.log('CourseID stored successfully'))
  .catch(error => console.error('Error storing data: ', error));

const Stack = createStackNavigator()
//importando as paginas da aplicação
import LoginScreen from './src/screens/LoginScreen.js';
import RegisterScreen from './src/screens/RegisterScreen.js';
import HomePageScreen from './src/screens/HomepageScreen.js';
import EventsScreen from './src/screens/EventsScreen.js';
import AboutScreen from './src/screens/AboutScreen.js';
import OnboardingScreen from './src/screens/OnboardingScreen.js';
import MainpageScreen from './src/screens/MainpageScreen';
import BlankScreen from './src/screens/BlankScreen';
import NotFoundScreen from './src/screens/404Screen';
import ProfileScreen from './src/screens/ProfileScreen.js';
import bottomNavbar from './src/components/BottomNavbar.js';
import CoursesScreen from './src/screens/CoursesScreen.js';
import NewsScreen from './src/screens/NewsScreen.js';
import CipNewsScreen from './src/screens/NewsDetailsScreenCip.js';
import EuroNewsScreen from './src/screens/NewsDetailsScreenEuro.js';
import RankingsScreen from './src/screens/RankingsScreen.js';
import CourseDetailsScreen from './src/screens/CourseDetailsScreen.js';
import CertificateScreen from './src/screens/CertificateScreen.js';

console.disableYellowBox = true;
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const MenuScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Homepage" onPress={() => navigation.navigate('Homepage')} />
      <Button title="Events" onPress={() => navigation.navigate('Events')} />
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button title="Onboarding" onPress={() => navigation.navigate('Onboarding')} />
      <Button title="Mainpage" onPress={() => navigation.navigate('Mainpage')} />
      <Button title="Blank" onPress={() => navigation.navigate('Blank')} />
      <Button title="404" onPress={() => navigation.navigate('NotFound')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="News" onPress={() => navigation.navigate('News')} />
      <Button title="Rankings" onPress={() => navigation.navigate('Rankings')} />
      <Button title="Certificate" onPress={() => navigation.navigate('Certificate')} />
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Menu" component={MenuScreen} /> */}
        <Stack.Screen name="Homepage" component={HomePageScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Mainpage" component={BottomNavbar} />
        <Stack.Screen name="Blank" component={BlankScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="CipNews" component={CipNewsScreen} />
        <Stack.Screen name='EuroNews' component={EuroNewsScreen} />
        <Stack.Screen name="Rankings" component={RankingsScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="Certificate" component={CertificateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
