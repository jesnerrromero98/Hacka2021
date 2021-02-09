import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from 'react-native'

import Caja from './../Containers/cuadroDeBusquedaContainer'

const ListadoDeEmergencia = (props) => {

    const {
        data,
        refreshing,
        onRefresh,
        searchText,
        onSearch,
        navegarEmergenciaDetalle,
        handleCallPress
    } = props;

    return(
        <SafeAreaView >

            <View  style={styles.fondo}> 

            <FlatList

                style={styles.fondo}

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }

                ListHeaderComponent={
                    <Caja
                        searchText={searchText}
                        onSearch={onSearch}
                    />
                }
                data = { data }
                ListEmptyComponent = {() => <Text></Text>}
                renderItem = {
                    ({item}) => 
                        <Element 
                            item = {item}  
                            onPress = {
                                () =>{ 
                                    navegarEmergenciaDetalle(item); 
                                }
                            }

                            handle = {
                                () =>{
                                    handleCallPress(item);
                                }
                            }

                        />
                }
                //ItemSeparatorComponent = {() => <SeparatorList/>}
            />

            </View>

        </SafeAreaView>
    );

}

const Element = (props) =>{

    const { item, onPress, handle } = props;

    return(
        <TouchableOpacity
            onPress = {onPress}
            style={styles.fondo}
        >
            <View style = {styles.container}>

                <View style = {styles.div}/>

                <View style = {styles.columna}>

                    <View style = {styles.cajon}>

                        <Image
                            source = {{uri: item.imagen}}
                            style = {styles.imagen}
                        />

                        <View style = {styles.containerColumn}>
                            <Text style = {styles.titulo}>
                                {item.titulo}
                            </Text>

                            <Text style = {styles.descripcion}>
                                {item.delegacion}
                            </Text>
                            
                        </View>

                        <TouchableOpacity
                            onPress = {handle}
                        >
                            <Image
                                source = {require('./../../Assets/llamar.png')}
                                style = {styles.icon}
                            />
                        </TouchableOpacity>
                        
                    </View>

                </View>
            
            </View>
        </TouchableOpacity>
    );
}


const styles =  StyleSheet.create({
    container:{
        backgroundColor: '#fafafa',
        flexDirection: 'column',
        alignItems: 'center',
    },

    fondo:{
        backgroundColor: '#fafafa',
    },
    
    cajon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    
    containerColumn:{
        flexDirection: 'column',
        justifyContent: 'center',
        width: '52%',
        height: 70,
        marginLeft: 10,
        marginHorizontal: 10,
        alignItems: 'stretch',
        marginTop: 10
    },

    columna:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '95%',
        backgroundColor: '#1c3643',
        height: 90,
        borderRadius: 15,
        marginLeft: 10,
        marginHorizontal: 10,
    },

    imagen:{
        width: 70,
        height: 70,
        resizeMode: 'cover',
        borderRadius: 10,
        marginLeft: 5,
        marginTop: 10
    },

    icon:{
        width: 40,
        height: 40,
        marginRight: 10,
        marginTop: 10
    },

    div:{
        width: 20,
        height: 10
    },

    titulo:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#98cb40',
    },

    descripcion:{
        fontSize: 15,
        color: 'white',
        textAlign: 'justify',
        marginTop: 5
    },

    separador: {
        width: 15
    }
})


export default ListadoDeEmergencia;