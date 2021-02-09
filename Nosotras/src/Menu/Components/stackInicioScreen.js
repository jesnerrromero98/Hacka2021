import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './../../Inicio/Containers/inicioContainer';
import InicioDetalle from './../../Inicio/Containers/inicioDetalleContainer'

const InicioStack = createStackNavigator();

function InicioStackScreen() {
  return (
    <InicioStack.Navigator>
      <InicioStack.Screen 
        name="Ayuda" component={Inicio} 
        options={{
          headerShown: false
        }}
      />

      <InicioStack.Screen
        name="InicioDetalle" component={InicioDetalle} 
        options={{
          title: 'Informacion',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#1c3643' },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: true
        }}
       />
    </InicioStack.Navigator>
  );
}

export default InicioStackScreen;