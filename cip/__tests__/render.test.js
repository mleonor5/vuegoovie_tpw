import React from "react";
import renderer from "react-test-renderer";
import RegisterScreen from "../src/screens/RegisterScreen";
import RankingsScreen from "../src/screens/RankingsScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import OnboardingScreen from "../src/screens/OnboardingScreen";
import NewsScreen from "../src/screens/NewsScreen";
import NewsDetailScreenEuro from "../src/screens/NewsDetailScreenEuro";
import NewsDetailScreenCip from "../src/screens/NewsDetailScreenCip";
import MainPageScreen from "../src/screens/MainPageScreen";
import LoginScreen from "../src/screens/LoginScreen";
import HomepageScreen from "../src/screens/HomepageScreen";
import EventsScreen from "../src/screens/EventsScreen";
import CoursesScreen from "../src/screens/CoursesScreen";
import CoursesDetailScreen from "../src/screens/CoursesDetailsScreen";
import CertificateScreen from "../src/screens/CertificateScreen";
import BlankScreen from "../src/screens/BlankScreen";
import AboutScreen from "../src/screens/AboutScreen";
import ErrorScreen from "../src/screens/404Screen";

describe('Render Pages', () => {
    it('404 Page', () => {
        const page = renderer.create(<ErrorScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('About Page', () => {
        const page = renderer.create(<AboutScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Blank Page', () => {
        const page = renderer.create(<BlankScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Certificate Page', () => {
        const page = renderer.create(<CertificateScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Courses Details Page', () => {
        const page = renderer.create(<CoursesDetailScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Courses Page', () => {
        const page = renderer.create(<CoursesScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Events Page', () => {
        const page = renderer.create(<EventsScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Home Page', () => {
        const page = renderer.create(<HomepageScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Login Page', () => {
        const page = renderer.create(<LoginScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Main Page', () => {
        const page = renderer.create(<MainPageScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('News Detail Page Cip', () => {
        const page = renderer.create(<NewsDetailScreenCip />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('News Detail Page Euro', () => {
        const page = renderer.create(<NewsDetailScreenEuro />).toJSON();
        expect(page).toMatchSnapshot();
    });
  
    it('News Page', () => {
        const page = renderer.create(<NewsScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Onboarding Page', () => {
        const page = renderer.create(<OnboardingScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Profile Page', () => {
        const page = renderer.create(<ProfileScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Rankings Page', () => {
        const page = renderer.create(<RankingsScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('Register Page', () => {
        const page = renderer.create(<RegisterScreen />).toJSON();
        expect(page).toMatchSnapshot();
    });
});