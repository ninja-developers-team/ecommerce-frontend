import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
export class ShopingCard extends Component {
    render() {
        return (
<<<<<<< HEAD
            <>
                <div className="ibox-content">
                    <div className="table-responsive">
                        <table className="table shoping-cart-table">
                            <tbody>
                                <tr>
                                    <td width="90">
                                        <div className="cart-product-imitation">

=======
            <><div className="ibox-content">
                <div className="table-responsive">
                    <table className="table shoping-cart-table">
                        <tbody>
                            <tr>
                                <td width="90">
                                    <div className="cart-product-imitation">
                                        
>>>>>>> solve
                                            <img
                                                src={this.props.item.imagePath}
                                                alt=""
                                                style={{ height: "70px" }} />
<<<<<<< HEAD

                                        </div>
                                    </td>
                                    <td className="desc">
                                        <h3>
                                            <a href="#" className="text-navy">
                                                {this.props.item.title}
                                            </a>
                                        </h3>
                                        <p className="small">

                                        </p>
                                        <dl className="small m-b-none">
                                            <dt>Description </dt>
                                            <dd> {this.props.item.description}.</dd>
                                        </dl>

                                        <div className="m-t-sm">
                                            |
                                            <a href="#" className="text-muted"
                                                onClick={() => {
                                                    this.props.delFromCard(this.props.item._id);
                                                }}>
                                                <i className="fa fa-trash"></i> Remove item</a>
                                        </div>
                                    </td>
                                    <td width="65">
                                        <input type="text" className="form-control" placeholder={this.props.item.quantity} />
                                    </td>
                                    <td>
                                        <h4>
                                            {this.props.item.price}
                                        </h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>{/*<div class="item">
=======
                                    
                                    </div>
                                </td>
                                <td className="desc">
                                    <h3>
                                        <a href="#" className="text-navy">
                                            {this.props.item.title}
                                        </a>
                                    </h3>
                                    <p className="small">
                                       
                                    </p>
                                    <dl className="small m-b-none">
                                        <dt>Description </dt>
                                        <dd> {this.props.item.description}.</dd>
                                    </dl>

                                    <div className="m-t-sm">
                                        |
                                        <a href="#" className="text-muted"
                                            onClick={() => {
                                                this.props.delFromCard(this.props.item._id);
                                            }}>
                                            <i className="fa fa-trash"></i> Remove item</a>
                                    </div>
                                </td>

                                <td>
                                    {this.props.item.price}
                                    <s className="small text-muted"></s>
                                </td>
                                <td width="65">
                                    <input type="text" className="form-control" placeholder={this.props.item.quantity} />
                                </td>
                                <td>
                                    <h4>
                                        {this.props.item.price}
                                    </h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>{/*<div class="item">
>>>>>>> solve
                    <div class="buttons">
                        <span
                            class="delete-btn"
                            onClick={() => {
                                this.props.delFromCard(this.props.item._id);
                            }}
                        ></span>
                    </div>
                    <div class="image">
                        <img
                            src={this.props.item.imagePath}
                            alt=""
                            style={{ height: "70px" }} />
                    </div>
                    <div class="description">
                        <span>{this.props.item.title}</span>
                    </div>
                    <div class="total-price">{this.props.item.price}</div>
                    <div class="total-price">{this.props.item.quantity}</div>
                    <div class="buttons">
                        <AiFillDelete
                            onClick={() => {
                                this.props.delFromCard(this.props.item._id);
                            }}
                            style={{ cursor: "pointer" }} />
                    </div>
                </div>*/}</>
        );
    }
}
export default ShopingCard;
