import React, { Component} from 'react';
import {Linking} from 'react-native';
import NumerosDeEmergencia from './../Components/numerosDeEmergencia'

import  { getEmergencia } from './../../../lib/data/addEmergenciaData'

class NumerosDeEmergenciaContanier extends Component {

    constructor(props){
        super(props);
        this.state = {
            loadingState: 'cargando',
            data: [],
            searchText: '',
        };
    }


    navegarEmergenciaDetalle = (emergencia) => {
        this.props.navigation.navigate('EmergenciaDetalle',{
            emergencia: emergencia
        })
    }

    handleCallPress = () =>{
        Linking.openURL('tel: 25122727');
    }

    render(){
        const {
            loadingState,  
            searchText
        } = this.state;

        return(
            <NumerosDeEmergencia
                 data = {this.handleFilterAdvanced()}
                searchText={searchText}
                onSearch={this.handleSearch}
                refreshing={loadingState === 'cargando' ? true : false}
                navegarEmergenciaDetalle = {this.navegarEmergenciaDetalle}
                onRefresh={this.handleRefresh}
                handleCallPress = {this.handleCallPress}
            />
        );
    }
    componentDidMount() {
        this.loadEmergenciaData();
    }

    loadEmergenciaData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getEmergencia()
        .then((emergenciaArray) => {

            console.log(emergenciaArray);
            
            this.setState({
                loadingState: 'cargado',
                data: emergenciaArray,
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
        this.loadEmergenciaData();
    };

    handleSearch = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };


    handleFilterAdvanced = () => {
        const {
            searchText,
            data,
        } = this.state;
        
        if(!searchText) return data;

        let arrayFilter = data;

        if(searchText) {
            arrayFilter = arrayFilter.filter((item) => {
                return item.delegacion.toLowerCase().includes(searchText.toLowerCase());
            });
        }
        return arrayFilter;
        
    };
}

export default NumerosDeEmergenciaContanier;