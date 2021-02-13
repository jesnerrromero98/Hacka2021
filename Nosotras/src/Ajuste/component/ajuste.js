import React from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    RefreshControl,
    Image
} from 'react-native';

import Encabezado from './../container/encabezadoContainer'

const Ajuste = (props) => {

    const {
        data,
        refreshing,
        onRefresh,
    } = props;
 
    return(

        <View style = {styles.fondo}> 

            <FlatList

                style={styles.fondo}

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }

                ListHeaderComponent={
                    <Encabezado/>
                }
               
            />

        </View>


    );

}
    
    const styles=StyleSheet.create({
        
        container:{
            backgroundColor: '#fafafa',
            alignItems: 'center',
            marginTop: 10
        },
        fondo:{
            backgroundColor: '#fafafa',
        }

    })

export default Ajuste;