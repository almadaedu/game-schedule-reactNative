//#region Imports

import { StyleSheet } from 'react-native';
import { THEME } from '../../global/styles/theme';

//#endregion

const useStyles = () => {
    return StyleSheet.create({
        container: {
            width: '100%',
            height: 56,
            backgroundColor: THEME.colors.primary,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center'
        },
        title: {
            flex: 1,
            color: THEME.colors.heading,
            fontSize: 15,
            textAlign: 'center'
        },
        iconWrapper: {
            width: 56,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 1,
            borderBottomColor: THEME.colors.line
        },
        icon: {
            width: 24,
            height: 18
        }
    });
};
export default useStyles;
