import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

const EmergenciaDetalle = (props) =>{

    const {data, listaDatos} = props;

    return(
        <ScrollView>
            <View style = {styles.container}>
                <Image
                    source = {{uri: data.imagen}} 
                    style = {styles.image}
                />

                <View style = {styles.textoContenedor}>
                    <View style = {styles.tituloCont}>
                        <Text style = {styles.titulo}>
                            {data.titulo}
                        </Text>
                    </View>

                    <View style={styles.line}/>

                    <View style = {styles.tituloConte}>
                        <Text style = {styles.sub}>
                            Departamento: 
                        </Text>

                        <View style = {styles.tamaño}>
                            <Text style = {styles.textt}>
                                {data.delegacion}
                            </Text>
                        </View>
                       
                    </View>
                    
                    <View style={styles.devider}/>
                    <View style={styles.line}/>

                    <View style = {styles.tituloConte}>
                        <Text style = {styles.sub}>
                            Contacto: 
                        </Text>

                        <View style = {styles.tamaño}>
                            <Text style = {styles.textt}>
                                {data.contacto}
                            </Text>
                        </View>
                        
                    </View>
                    <View style={styles.deviders}/>
                    <View style={styles.line}/>
                   
                </View>

                <View style = {styles.len}>
                    <Text style = {styles.sub}>
                        Función 
                    </Text>

                    <Text style = {styles.textt}>
                        {data.descripcion}
                    </Text>
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#10242d',
        flex: 1,
    },
    image:{
        height: 200,
        width: '100%',
        borderLeftWidth: 250
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#98cb40',
    },

    tamaño:{
        width: '64%',
        marginLeft: 5
    },

    sub:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
    },

    textt:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFF',
    },

    tituloCont:{
        alignItems: 'center',
        marginTop: 5
    },

    tituloConte:{
        alignItems:'center',
        marginTop: 5,
        justifyContent: 'flex-start',
        flexDirection:'row',
        width: '100%'
    },

    textoContenedor:{
        marginHorizontal: 10
    },

    line:{
        height: 0.5,
        backgroundColor: '#FFFF',
        marginVertical: 5,
    },
    devider:{
        height: 5
    },

    deviders:{
        height: 3,
        marginTop: 3
    },
    len:{
        marginHorizontal: 10,
        marginTop: 10
    }
})

export default EmergenciaDetalle;