import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import useStyles from './styles'
import { THEME } from '../../global/styles/theme';

type Props = {
    children: ReactNode;
}

const Background = ({children}: Props) =>{

    const { secondary80, secondary100 } = THEME.colors
    const styles = useStyles()
    return(
        <LinearGradient 
            style={styles.container}
            colors ={[secondary80, secondary100]}
        >
        {children}
        </LinearGradient>
    )

    

}

export default Background