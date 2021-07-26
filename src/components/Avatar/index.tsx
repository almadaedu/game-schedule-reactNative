//#region Imports

import React from 'react'
import useStyles from './styles';
import { View, Text, Image } from 'react-native'
import { THEME } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';



//#endregion

type Props = {
    urlImage: string
}


const Avatar  = ({ urlImage }: Props) =>{
    const styles = useStyles()
    const { secondary50, secondary70 } = THEME.colors
    return(
        <LinearGradient 
            style={styles.container}
            colors ={[secondary50, secondary70]}
        >
            <Image
            source={{ uri: urlImage }}
            style={styles.avatar}
            />
        </LinearGradient>
    )
}

export default Avatar