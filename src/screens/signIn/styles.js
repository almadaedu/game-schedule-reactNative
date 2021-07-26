//#region Imports

import { StyleSheet } from 'react-native';
import { THEME } from '../../global/styles/theme';

//#endregion


const useStyles = () =>{

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
            image: {
                width: '100%',
                height: 360,
            },
            content: {
                marginTop: -40,
                paddingHorizontal: 50,
                
            },
            title: {
                color: THEME.colors.heading,
                textAlign: 'center',
                fontSize: 40,
                marginBottom: 16,
                fontFamily: THEME.fonts.title700,
                lineHeight: 40
            },
            subtitle: {
                color: THEME.colors.heading,
                fontSize: 18,
                textAlign: 'center',
                marginBottom: 64,
                fontFamily: THEME.fonts.title500,
                lineHeight: 25,
            }
        

    })

}

export default useStyles