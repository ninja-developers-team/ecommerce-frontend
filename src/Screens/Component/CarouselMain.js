import React, { Component } from 'react'
import CrouselItem from './CrouselItem'
export class CarouselMain extends Component {
    render() {
        return (
            < CrouselItem jeweleryItem={this.props.jeweleryData} path={`${this.props.path}`} category={this.props.category} />
        )
    }
}
export default CarouselMain
