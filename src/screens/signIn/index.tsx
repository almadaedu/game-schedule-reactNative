//#region Imports

import React from 'react';
import { Image, Text, View } from 'react-native';
import Illustrationimg from '../../assets/images/illustration.png';
import  ButtonIcon  from '../../components/ButtonIcon';
import  useStyles  from './styles';

//#endregion

const SignIn = () => {
    const styles = useStyles()

    return (
        <View style={styles.container}>


            <Image source={Illustrationimg} style={styles.image} resizeMode='stretch' />

            <View style={styles.content}>
                <Text style={styles.title}>Conecte-se e organize suas jogatinas </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title='Entrar com Discord' />
            </View>
        </View>
    );
}
export default SignIn