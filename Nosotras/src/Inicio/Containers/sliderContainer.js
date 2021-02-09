import React, {Component} from 'react';
import {
    View,
    Image, 
    StyleSheet,
    ScrollView,
    Dimensions,
    Text
} from 'react-native';

import Slider from './../Components/slider';

class SliderContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: [
                'https://firebasestorage.googleapis.com/v0/b/hackaton20-91018.appspot.com/o/scrooll.jpeg?alt=media&token=b4b1fef8-e6cb-4c89-b4f4-9c3a99e8d1a0',
                'https://firebasestorage.googleapis.com/v0/b/hackaton20-91018.appspot.com/o/scroll2.jpeg?alt=media&token=3ad2a1cc-1900-48dd-aa9a-598ecacf5fba',
                'https://firebasestorage.googleapis.com/v0/b/hackaton20-91018.appspot.com/o/scroll3.jpeg?alt=media&token=bfdfc740-3da0-4845-958f-32232c3c0cfd'        
            ],
            active: 0
        };
    }

    change = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({
                active: slide
            })
        }
    }

    render(){

        const { active, images} = this.state;

        return(
            <Slider
                images = {images}
                active = {active}
                change = {this.change}
            />
        );
    }
}


export default SliderContainer;