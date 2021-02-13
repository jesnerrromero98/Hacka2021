import React, { Component} from 'react';
import InicioDetalle from './../Components/inicioDetalle'

class InicioDetalleContainer extends Component {

    constructor(props){
        super(props);

        //const emergen = this.props.navigation.getParam('emergencia');
        const { inicio: init } = this.props.route.params;

        this.state = {
            inicioDatos: {
                titulo: init.titulo,
                imagen: init.imagen,
                imagenes:init.imagenes,
                img:init.img,
                descripcion: init.descripcion,
                informacion:init.informacion,
                item1: init.item1,
                item2: init.item2,
                item3: init.item3,
                item4:init.item4,
                item5:init.item5,
                sub21:init.sub21, 
                
            },
        }
    }

    render(){
        const { inicioDatos} = this.state
        return(
            <InicioDetalle
                data = {inicioDatos}
            />
        );
    }
}

export default InicioDetalleContainer;