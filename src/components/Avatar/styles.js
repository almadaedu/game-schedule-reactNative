
//#region Imports

import { StyleSheet } from 'react-native';
import { THEME } from './../../global/styles/theme';


//#endregion


const useStyles = () =>{

    return StyleSheet.create({
    
    container: {
        width: 49,
        height: 49,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 8,
    }

    })

}

export default useStyles