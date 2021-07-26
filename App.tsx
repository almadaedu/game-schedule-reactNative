//#region Imports

import React, { Fragment } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import SignIn from './src/screens/SignIn/index';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import Background from './src/components/Background/index';
import Home from './src/screens/Home/index';
//#endregion

const Content = () => {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Background>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            <Home />
        </Background>
    );
};

const App = () => <Content />;

export default App;
