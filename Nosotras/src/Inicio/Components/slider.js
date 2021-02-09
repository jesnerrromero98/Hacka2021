import React from 'react';
import {
    View,
    Image, 
    StyleSheet,
    ScrollView,
    Dimensions,
    Text
} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6;

const Slider = (props)=>{

    const {
        change,
        images,
        active
    } = props;

    return(
        <View style = {styles.container}>
            <ScrollView 
                pagingEnabled
                horizontal 
                onScroll = {change}
                showsHorizontalScrollIndicator = {false}
                style = {styles.scroll}>
                
                {
                    images.map((item, index) =>(
                        <Image
                            key= {index}
                            source = {{uri: item}}
                            style = {styles.image}
                        />
                    ))
                }
            </ScrollView>

            <View style = {styles.pagina}>
                {
                    images.map((i, k) => (
                        <Text 
                            key={k}
                            style = {k === active ? styles.textoActivo : styles.texto}
                        >
                            ⬤
                        </Text>
                    ))
                }    
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width, 
        height
    },
    scroll:{
        width, 
        height
    },
    image:{
        width, 
        height, 
        resizeMode: 'cover'
    },
    pagina:{
        flexDirection: 'row', 
        position: 'absolute', 
        bottom:0, 
        alignSelf: 'center'
    },

    texto:{
        color: '#888',
        margin: 3,
        fontSize: (width / 30)
    },

    textoActivo:{
        color: '#FFFF',
        margin: 3,
        fontSize: (width / 30)
    },
})

export default Slider;