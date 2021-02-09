import React from 'react';

import Navegacion from './src/Menu/Components/navegacionTabs'

const App = ()=>{
  return(
    <Navegacion/>
  );
}

export default App;
/*
import React, {Component} from 'react';
import {View, Button, Linking} from 'react-native'

class App extends Component{
  

  constructor(props){
    super(props)
    this.state = {
     numero: 'tel: +50584407288'
    }
  }

  handerlCallPress = () => {
    const {numero} = this.state;
    Linking.openURL(numero)
  }

  render(){
    return(
      <View>
        <Button
          title = 'llamar'
          onPress = {this.handerlCallPress}
        />
      </View>
    )
  }
}

export default App;*/