import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Emergencia from './../..//ServicioDeEmergencia/Containers/numerosDeEmergenciaContainer';
import EmergenciaDetalle from './../..//ServicioDeEmergencia/Containers/emergenciaDetalleContainer';

const EmergenciaStack = createStackNavigator();

function EmergenciaStackScreen() {
  return (
    <EmergenciaStack.Navigator>
      <EmergenciaStack.Screen
        name="Inicio" component={Emergencia} 
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'red' },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false
        }}
       />

    <EmergenciaStack.Screen
        name="EmergenciaDetalle" component={EmergenciaDetalle} 
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
    </EmergenciaStack.Navigator>
  );
}

export default EmergenciaStackScreen;