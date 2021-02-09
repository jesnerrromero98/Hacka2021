import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InicioStackScreen from './stackInicioScreen'
import EmergenciaStackScreen from './stackEmergenciaScreen'
import AyudaStackScreen from './stackAyudaScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        tabBarOptions={{
          activeTintColor: '#97ca3f',
          activeBackgroundColor: "#10242d",
          inactiveTintColor: '#2f586e',
          inactiveBackgroundColor: '#10242d'
        }}
      >
      
        <Tab.Screen 
          name="Inicio" 
          component={InicioStackScreen} 
        />

        <Tab.Screen 
          name="Emergencia" 
          component={EmergenciaStackScreen}
          options={{
            title: "Emergencia",
          }}  
        />

        <Tab.Screen 
          name="Ayuda" 
          component={AyudaStackScreen} 
          options={{
            title: "Ayuda",
          }}  
        />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}