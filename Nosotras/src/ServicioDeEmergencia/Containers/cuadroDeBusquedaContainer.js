import React, { Component} from 'react';
import CuadrDeBusqueda from './../Components/cuadroDeBusqueda'

class CuadroDeBusquedaContainer extends Component {

    constructor(props){
        super(props)

    }

    render(){

        const { 
            onSearch,
            searchText,
        } = this.props;

        return(
            
            <CuadrDeBusqueda
                onSearch={onSearch}
                searchText={searchText}
            />
        );
    }
}

export default CuadroDeBusquedaContainer;