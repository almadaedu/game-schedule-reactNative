
//#region Imports

import { StyleSheet } from 'react-native';
import { THEME } from './../../global/styles/theme';


//#endregion


const useStyles = () =>{

    return StyleSheet.create({
    
    container: {
        flexDirection: 'row'
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: THEME.fonts.title500,
        fontSize: 24,
        color: THEME.colors.heading,
        marginRight: 5,
    },
    username: {
        fontFamily: THEME.fonts.title700,
        fontSize: 24,
        color: THEME.colors.heading

    },
    message: {
        fontFamily: THEME.fonts.text400,
        color: THEME.colors.highlight
    },

    })

}

export default useStyles