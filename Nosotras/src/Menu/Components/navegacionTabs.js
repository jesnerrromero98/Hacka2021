import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import InicioStackScreen from './stackInicioScreen'
import EmergenciaStackScreen from './stackEmergenciaScreen'
import AyudaStackScreen from './stackAyudaScreen.js'
import AjusteStackScreen from "./stackAjusteScreen";

/*import {Ionicons} from '@expo/vector-icons';

/*function InicioStackScreen() {
  return (
    <View>
      <Text>Inicio</Text>
    </View>
  );
}

function EmergenciaStackScreen() {
  return (
    <View>
      <Text>Emergencia</Text>
    </View>
  );
}*/

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Emergencia') {
              iconName = focused ? 'call' : 'call';
            } else if (route.name === 'Ayuda') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }else if (route.name === 'Ajuste') {
              iconName = focused ? 'settings' : 'settings';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        initialRouteName="Inicio"
          tabBarOptions={{
          activeTintColor: '#97ca3f',
          activeBackgroundColor: "#10242d",
          inactiveTintColor: '#2f586e',
          inactiveBackgroundColor: '#10242d',

        }}
      /*  screenOptions={({route})=>({
          tabBarIcon: ({ focused, color, size })=> {
            let iconName;
            if(route.name ==='Inicio'){
              iconName=focused ? 'ios-information-circle' :'ios-information-circle-outline';
            } else if(route.name === 'Emergencia'){
              iconName=focased? 'ios-list-box':'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;  
          },
        })}*/
            
       /* tabBarOptions={{
          activeTintColor:'tomato',
          inactiveTintColor:'gray',
        }}*/
      >
      
        <Tab.Screen 
          name="Inicio" 
          component={InicioStackScreen}
          options={{
            title: "Inicio",
          }}  
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
        <Tab.Screen 
          name="Ajuste" 
          component={AjusteStackScreen} 
          options={{
            title: "Ajuste",
          }}  
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );

  
}