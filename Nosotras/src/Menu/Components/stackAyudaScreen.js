import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Ayuda from './../../Ayuda/Containers/ayudaContainer';

const AyudaStack = createStackNavigator();

function AyudaStackScreen() {
  return (
    <AyudaStack.Navigator>
      <AyudaStack.Screen 
        name="Ayuda" component={Ayuda}
        options={{
          headerShown: false
        }} 
      />
    </AyudaStack.Navigator>
  );
}

export default AyudaStackScreen;