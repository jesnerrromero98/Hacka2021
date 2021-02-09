import React from 'react';
import Slider from './../Containers/sliderContainer'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
    RefreshControl
    
} from 'react-native';

const ListadoDeEmergencia = (props) => {

    const {
        data,
        refreshing,
        onRefresh,
        navegarInicioDetalle
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
                    <View style = {styles.fondo}>
                        <Slider/>      
                        <Text style={styles.titulo}>
                            Tipos de violencia
                        </Text>
                    </View>
                }
                data = { data }
                ListEmptyComponent = {() => <Text></Text>}
                renderItem = {
                    ({item}) => <Element item = {item}  onPress = {() => { navegarInicioDetalle(item); }}/>
                }
                //ItemSeparatorComponent = {() => <SeparatorList/>}
            />

        </View>


    );

}

const Element = (props) =>{
    
    const { item , onPress} = props;

    return(
        
        <View style = {styles.container}>
            <TouchableOpacity
                onPress = {onPress}
            >
                <View style={styles.tarjeta}>
                    
                    <View style={styles.contenedor}>
                        <Text style={styles.texto}>
                            {item.titulo}
                        </Text>
                        <View style = {styles.rowContainer}>
                            <Text style={styles.descripcion}>
                                {item.descripcion}
                            </Text>
                        </View>
                    </View>
                    <Image
                        source = {require('./../../Assets/next.png')}
                        style = {styles.image}
                    />
                    <View style={styles.div}/>
                </View> 
            </TouchableOpacity> 
        </View>
         
    );
}

    const styles=StyleSheet.create({
        container:{
            backgroundColor: '#fafafa',
        },

        fondo:{
            backgroundColor: '#fafafa',
        },

        titulo:{
            marginTop:5,
            fontSize:22,
            marginLeft:10,
            color:'#10242d',
            fontWeight: 'bold'
        },

        tarjeta:{
            backgroundColor:'#10242d',
            marginTop:5,
            marginHorizontal:8,
            height:150,
            borderRadius:10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
        },

        texto:{
            color:'#97ca3f',
            fontSize:18,
            fontWeight: 'bold'
        },

        descripcion:{
            color:'#90F3EA',
            fontSize:15,
            textAlign: 'justify',
        },

        div:{
            height: 10
        },

        image:{
            width: 20,
            height: 20,
            marginLeft: -10
        },

        rowContainer:{
            textAlign: 'justify',
            justifyContent: 'space-between',
            alignItems: 'stretch',
        },

        contenedor: {
            width: '90%',
            marginLeft: 10
        }

    })
export default ListadoDeEmergencia;
