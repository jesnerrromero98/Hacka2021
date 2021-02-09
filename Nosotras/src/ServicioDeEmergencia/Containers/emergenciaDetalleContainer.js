import React, { Component} from 'react';
import EmergenciaDetalle from './../Components/emergenciaDetalle'

class EmergenciaDetalleContainer extends Component {

    constructor(props){
        super(props);

        //const emergen = this.props.navigation.getParam('emergencia');
        const { emergencia: emergen } = this.props.route.params;

        this.state = {
            emergenciaDatos: {
                titulo: emergen.titulo,
                delegacion: emergen.delegacion,
                imagen: emergen.imagen,
                contacto: emergen.contacto,
                descripcion: emergen.descripcion
            },
        }
    }

    render(){
        const {emergencia, emergenciaDatos} = this.state
        return(
            <EmergenciaDetalle
                data = {emergenciaDatos}
                listaDatos = {emergenciaDatos}
            />
        );
    }
}

export default EmergenciaDetalleContainer;