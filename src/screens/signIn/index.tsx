import React, { useState} from "react";
import {View, Text, TextInput} from "react-native";
import { styles } from "./style";


export function SignIn(){
    const [text, setText] = useState('Edu');

    return(
        <View style = {styles.container}>
            <Text>Olá Mundo</Text>
            
            <TextInput 
            style = {styles.input} 
            onChangeText = {setText}
            />

            <Text>
                Você digitou { text }
            </Text>

        </View>
    )


}