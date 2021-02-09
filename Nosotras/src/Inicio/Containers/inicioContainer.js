import React, {Component} from 'react';
import  { getInicio } from './../../../lib/data/addInicioData'

import Inicio from './../Components/inicio';
 
class InicioContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            loadingState: 'cargando',
            data: [],
        };
    }


    navegarInicioDetalle = (inicio) => {
        this.props.navigation.navigate('InicioDetalle',{
            inicio: inicio
        })
    }

    render(){

        const {
            data,
            loadingState,  
        } = this.state;

        return(
            <Inicio
                data = {data}
                refreshing={loadingState === 'cargando' ? true : false}
                onRefresh={this.handleRefresh}
                navegarInicioDetalle = {this.navegarInicioDetalle}
            />
        );
    }

    
    componentDidMount() {
        this.loadInicioData();
    }

    loadInicioData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getInicio()
        .then((inicioArray) => {

            console.log(inicioArray);
            
            this.setState({
                loadingState: 'cargado',
                data: inicioArray,
            });

            console.log(data);;

        })
        .catch((error) => {
            
            this.setState({
                loadingState: 'error',
                error: error,
            });
            
        });

    };

    handleRefresh = () => {
        this.loadInicioData();
    };
    
}
export default InicioContainer;
