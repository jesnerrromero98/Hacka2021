import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Ajuste from './../../Ajuste/component/ajuste';

const AjusteStack = createStackNavigator();

function AjusteStackScreen() {
  return (
    <AjusteStack.Navigator>
      <AjusteStack.Screen 
        name="Ajuste" component={Ajuste}
        options={{
          headerShown: false
        }} 
      />
    </AjusteStack.Navigator>
  );
}

export default AjusteStackScreen;