import React, { Component } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
export class CrouselItem extends Component {
    render() {
        const items = this.props.jeweleryItem;
        return (
            <div className="col d-block" >
                <Link to={`${this.props.path}`} className="nav-link">
                    <Carousel fade nextIcon='' nextLabel='' prevIcon='' prevLabel=''
                        style={{ backgroundColor: '#D3E0EA', margin: 'auto' }}
                    >
                        {items.map(
                            jel => {
                                return (
                                    <Carousel.Item style={{ height: '350px' }}
                                    >
                                        <Image
                                            className="rounded mx-auto d-block"
                                            src={jel.image || jel.thumb}
                                            alt=""
                                            style={{ objectFit: 'contain', height: '100%', width: '80%' }} />
                                    </Carousel.Item>
                                )
                            }
                        )}
                    </Carousel>
                    <h5 className="col" style={{ textAlign: 'center', margin: '20px 0' }}> {this.props.category}  </h5>
                </Link>
            </div >
        )
    }
}
export default CrouselItem
