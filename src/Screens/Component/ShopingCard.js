import React, { Component } from 'react';
import './card.css';
export class ShopingCard extends Component {
    render() {
        return (

            <div class="item">
                <div class="buttons">
                    <span class="delete-btn"></span>
                </div>
                <div class="image">
                    <img src={this.props.item.imagePath} alt="" style={{ height: '70px' }} />
                </div>
                <div class="description">
                    <span>{this.props.item.title}</span>
                </div>
                <div class="total-price">{this.props.item.price}</div>
                <div class="total-price">{this.props.item.quantity}</div>
            </div>
        )
    }
}

export default ShopingCard
