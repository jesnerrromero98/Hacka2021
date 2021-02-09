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

import Encabezado from './../Containers/encabezadoContainer'

const Ayuda = (props) => {

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
                data = { data }
                
                renderItem = {
                    ({item}) => <Element item = {item}  onPress = {() => { navegarEmergenciaDetalle(item); }}/>
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
            <View style={styles.tarjeta}>
                       
                <View style={styles.contenedor}>
                    <Text style={styles.texto}>
                       {item.pregunta}
                    </Text>

                    <View style={styles.line}/>

                    <View style = {styles.rowContainer}>
                        <Text style={styles.descripcion}>
                            {item.introduccion} 
                        </Text>
                    </View>

                    <Text style={styles.txt}>Ejemplo</Text>

                    <View style={styles.devider1}/>

                    <View style = {styles.rowContainer}>
                        <Text style={styles.descripcion}>
                            {item.item1} 
                        </Text>
                    </View>

                    <View style={styles.devider1}/>

                    <View style = {styles.rowContainer}>
                        <Text style={styles.descripcion}>
                            {item.item2} 
                        </Text>
                    </View>

                    <View style={styles.devider1}/>

                    <View style = {styles.rowContainer}>
                        <Text style={styles.descripcion}>
                            {item.item3} 
                        </Text>
                    </View>

                    <View style={styles.devider1}/>

                    <View style = {styles.rowContainer}>
                        <Text style={styles.descripcion}>
                            {item.item4} 
                        </Text>
                    </View>

                    <Text style={styles.txt}>Conclusion</Text>

                    <View style={styles.devider}/>

                    <View style = {styles.rowContainer}>
                        <Text style={styles.descripcion}>
                            {item.conclusion} 
                        </Text>
                    </View>
                </View>
                
                <View style={styles.div}/>
            </View> 
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
    },

    titulo:{
        marginTop:5,
        fontSize:22,
        marginLeft:10,
        color:'#10242d',
        fontWeight: 'bold'
    },
    txt:{
        marginTop:12,
        fontSize:18,
        marginLeft:10,
        color:'yellow',
        fontWeight: 'bold'
    },

    devider:{
        height: 5
    },

    devider1:{
        height: 5
    },

    tarjeta:{
        backgroundColor:'#10242d',
        height:490,
        borderRadius:10,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        padding: 10,
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

    rowContainer:{
        textAlign: 'justify',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },

    contenedor: {
        width: '100%',
    },

    line:{
        height: 0.5,
        backgroundColor: '#FFFF',
        marginVertical: 5
    }

})

export default Ayuda;