import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Encabezado = ()=>{
    return(
        <View style = {styles.fondo}>
            <View style = {styles.container}>
                <Text style = {styles.texto}>
                    Ayuda
                </Text>
            </View>

            <View
                style = {styles.estilo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c3643",
        width: '100%',
        height: 70,
        alignItems: 'flex-start',
    },
    
    texto:{
        fontSize: 20,
        color: '#FFFF',
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15
    },
    estilo:{
        backgroundColor: '#fafafa',
        height: 25,
        borderRadius: 25,
        marginTop: -15
    },

    fondo:{
        backgroundColor: '#fafafa',
    }
})

export default Encabezado;