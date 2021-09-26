import React, { Component } from 'react'
import './card.css'
export class ShopingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }
    render() {


        const handleToggle = () => {
            this.setState({ isActive: !this.state.isActive });

        }
        return (


            < div class="item" >

                <div class="buttons">
                    <span class="delete-btn"></span>
                    <span className={this.state.isActive ? "like-btn  is-active" : "like-btn"} onClick={handleToggle} ></span>
                </div>
                <div class="image">
                    <img src={this.props.item.imagePath} alt="" style={{ height: '70px' }} />
                </div>
                <div class="description">
                    <span>{this.props.item.title}</span>
                </div>
                <div class="total-price">${this.props.item.quantity}</div>
            </div>

        )
    }
}

export default ShopingCard
