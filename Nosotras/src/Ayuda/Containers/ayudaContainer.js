import React, { Component} from 'react';

import  { getAyuda } from './../../../lib/data/addAyudaData';

import Ayuda from './../../Ayuda/Components/ayuda';

class AyudaContainer extends Component {


    constructor(props){
        super(props);
        this.state = {
            loadingState: 'cargando',
            data: [],
        };
    }


    render(){

        const {
            data,
            loadingState,  
        } = this.state;

        return(
            <Ayuda
                data = {data}
                refreshing={loadingState === 'cargando' ? true : false}
                onRefresh={this.handleRefresh}
            />
        );
    }

    
    componentDidMount() {
        this.loadAyudaData();
    }

    loadAyudaData = () => {

        this.setState({
            loadingState: 'cargando',
        });

        getAyuda()
        .then((ayudaArray) => {

            console.log(ayudaArray);
            
            this.setState({
                loadingState: 'cargado',
                data: ayudaArray,
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
        this.loadAyudaData();
    };
}

export default AyudaContainer;