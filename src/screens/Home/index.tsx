//#region Imports

import React from "react";
import { View } from 'react-native';
import Profile from "../../components/Profile";
import useStyles from "./styles";


//#endregion


const Home = () =>{

    const styles = useStyles()

    return(
        <View>
            <View style = {styles.header}>
                <Profile />
                
            </View>

        </View>

    )
}

export default Home