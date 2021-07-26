//#region Imports

import React from 'react'
import { View, Text } from 'react-native'
import useStyles from './styles';
import Avatar from './../Avatar/index';


//#endregion


const Profile  = () =>{
    const styles = useStyles()
    return(

        <View style={styles.container}>
            <Avatar urlImage='https://github.com/almadaedu.png' />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Olá</Text>
                    <Text style={styles.username}>Eduardo</Text>
                </View>
                    <Text style={styles.message}>
                        Hoje é dia de vitória
                    </Text>
            </View>

        </View>
    )
}

export default Profile