import React from "react";
import { styles } from "./style";
import { View, Text, Image, StatusBar, Button } from "react-native";
import Illustrationimg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";



export function SignIn(){

    return(
        <View style = {styles.container}>
            <StatusBar
                barStyle = "light-content"
                backgroundColor = "transparent"
                translucent 
            />


        <Image source={Illustrationimg} style={styles.image} resizeMode ="stretch"/>
        <View style={styles.content}>
            <Text style={styles.title}>
                Organize suas jogatinas
            </Text>
            <Text style = {styles.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
            </Text>
            <ButtonIcon 
            title = "Entrar com Discord"
             
            />

        </View>

        </View>
    )


}