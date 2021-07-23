//#region Imports

import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import DiscordImg from '../../assets/images/discord.png'
import  useStyles  from './styles'


//#endregion

type Props = {
    title: string
}

const ButtonIcon = ({ title }: Props) => {

    const styles = useStyles()

    return(
        <TouchableOpacity style = {styles.container} activeOpacity={.6}>
            <View style={styles.iconWrapper}>
                <Image source = {DiscordImg} style = {styles.icon}/>

            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


export default ButtonIcon