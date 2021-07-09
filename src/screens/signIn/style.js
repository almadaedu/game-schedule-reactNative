import { StyleSheet } from 'react-native';
import { THEME } from './../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.background,
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
    },
    subtitle: {
        color: THEME.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }



})