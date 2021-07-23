//#region Imports

import React, { Fragment } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import SignIn from './src/screens/SignIn/index';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

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
        <Fragment>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            <SignIn />
        </Fragment>
    );
};

const App = () => <Content />;

export default App;
