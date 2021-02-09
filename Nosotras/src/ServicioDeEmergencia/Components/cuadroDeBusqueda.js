import React from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput
} from 'react-native';

const CuadroDeBusqueda = (props) =>{

    const {
        onSearch,
        searchText,
    } = props;

    return(
        <SafeAreaView>
            <View style={styles.container}>

                <Text style={styles.encabezado}>
                    Numeros de Emergencia
                </Text>

                <View style = {styles.caja}>

                    <TextInput
                        style = {styles.texto}
                        placeholder = 'Buscar...'
                        placeholderTextColor={'#FFFF'}
                        value={searchText}
                        onChangeText={onSearch}
                    />

                    <View>
                        <Image
                            source = {require('./../../Assets/lookFor.png')}
                            style = {styles.icon}
                        />
                    </View>

                </View>

                <View
                    style = {styles.marco}
                />
            </View>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1c3643',
        height: 140
    },

    encabezado:{
        color: '#FFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },

    caja: {
        height: 40,
        marginHorizontal: 5,
        marginVertical: 10,
        borderColor: '#FFFF',
        borderRadius: 50,
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texto: {
        backgroundColor: 'transparent',
        height: 40,
        marginHorizontal: 15,
        fontSize: 15,
        padding: 5
    },
    icon:{
        width: 20,
        height: 20,
        marginHorizontal: 10
    },

    marco:{
        backgroundColor: '#fafafa',
        height: 50,
        borderRadius: 20,
        marginTop: 15
    }

})

export default CuadroDeBusqueda;