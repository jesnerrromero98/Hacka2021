import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Encabezado from './../component/encabezado';
import {
  Avatar,
  Title,
  Card,
  Paragraph,
  Button,
  IconButton,
  Caption,
  Icon,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Ajuste = () => {
  return(
    <SafeAreaView style={style.container}>
      <View>
          <View style={style.heder}>
              <Avatar.Image
                source={{
                  uri:'data:image/jpeg;base64,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',
                }}
                size={150}
              />
                
              <View>
                <Title style={style.hederTitle}>Jasdany Aragon</Title>
              </View>

              <Card style={style.card}>
                <Card.Content>
                  <Title style={style.cardTitle} >Perfil</Title>
                  <Paragraph style={style.cardText}>Editar perfil</Paragraph>
              </Card.Content>
            </Card>

            <Card style={style.card}>
                <Card.Content>
                  <Title style={style.cardTitle} > Cofiguracion</Title>
                  <Paragraph style={style.cardText}>Configuracion de la cuenta</Paragraph>
              </Card.Content>
            </Card>

            <Card style={style.card}>
                <Card.Content>
                  <Title style={style.cardTitle} >Soporte</Title>
                  <Paragraph style={style.cardText}>Contactanos</Paragraph>
              </Card.Content>
            </Card>

            <Button style={style.btnSerrarcesion}> 
              <Text style={style.btnSerrarcesionText}>Cerrar Sesion</Text>
            </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Ajuste;

const style = StyleSheet.create({
  container:{
   flex:1,
    alignItems: 'center',
    backgroundColor:'#C0D1CD'
    
  },
    heder:{
      marginTop:50
      },

   hederTitle:{
    alignItems:'center',
    fontWeight: 'bold',
    color:'#3A3940',
    fontSize: 24,
    marginTop:20,
  },

   cardTitle: {
    alignItems:'center',
    fontSize: 24,
    color:'#c0d1cd'
  },

  card:{
    marginTop:40,
    backgroundColor:'#3A3940',
    borderRadius:10, 
    width: '230%',
    marginHorizontal:-100,
    paddingHorizontal:15,
    borderRadius:18
  },

  cardText:{
    color: '#e6fffd',
    fontWeight: '600',
    fontSize:15,
    lineHeight: 26,
  },

  btnSerrarcesion:{
    backgroundColor:'#3a3940',
    marginTop: 80,
    height:40, 
    borderRadius:10
  },

  btnSerrarcesionText:{
    color:'#E6FFFD',
    alignContent:'space-around',
    fontWeight:'bold'
  }


});
