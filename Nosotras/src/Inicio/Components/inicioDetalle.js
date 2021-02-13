import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

const InicioDetalle = (props) =>{

    const {data,} = props;

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

                    <View style = {styles.len}>
                        <Text style = {styles.sub}>
                            Informacion 
                        </Text>

                        <Text style = {styles.textt}>
                            {data.informacion}
                        </Text>

                        <Text Text style = {styles.sub2}>
                            {data.sub21}
                        </Text>
                    </View>

                    <View style={styles.devider}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.textt}>
                            {data.item1}
                        </Text>
                    </View>

                    <View style={styles.devider}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.textt}>
                            {data.item2}
                        </Text>
                    </View>

                    <View style={styles.deviders}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.textt}>
                            {data.item3}
                        </Text>
                    </View>

                    <View style={styles.deviders}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.textt1}>
                            {data.item4}
                        </Text>
                    </View>
                    <View style={styles.deviders}/>

                </View>
               
                <Image
                    source = {{uri: data.imagenes}} 
                    style = {styles.imagen}
                />
                <View style = {styles.len}>
                        <Text style = {styles.textt1}>
                            {data.item5}
                        </Text>
                    </View>
                    <View style={styles.deviders}/>
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
       
        height: 150,
        width: '100%',
        borderLeftWidth: 150
    },
    imagen:{
        height: 250,
        width: '100%',
       

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

    sub2:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
        marginTop: 15
    },

    textt:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFF',
        textAlign:'justify', 
    },

    textt1:{
        fontSize:  18,
        fontWeight: 'bold',
        color: '#ff0000',
        marginTop: -5,
        marginLeft:88
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
        height:2
    },

    deviders:{
        height: 3,
    },
    len:{
        marginHorizontal: 10,
        marginTop: 5
    }
})

export default InicioDetalle;