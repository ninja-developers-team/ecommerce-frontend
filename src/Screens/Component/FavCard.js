import React, { Component } from 'react'
import axios from "axios";
let REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export class FavCard extends Component {
    addToCardHandler = async (user) => {
        const reqBody = {
            userEmail: user.email,
            imagePath: this.props.item.imagePath,
            title: this.props.item.title,
            description: this.props.item.description,
            price: this.props.item.price,
            quantity: 1,
        };
        const productData = await axios.post(
            `${REACT_APP_BACKEND_URL}/addtocard`,
            reqBody
        );
        console.log(productData, "done");
    };
    render() {
        return (
            <>
                <div className="ibox-content">
                    <div className="table-responsive">
                        <table className="table shoping-cart-table">
                            <tbody>
                                <tr>
                                    <td width="90">
                                        <div className="cart-product-imitation">

                                            <img
                                                src={this.props.item.imagePath}
                                                alt=""
                                                style={{ height: "70px" }} />

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
                                            <a className="text-muted"
                                                onClick={() => {
                                                    this.props.del(this.props.item);
                                                }}>
                                                <i className="fa fa-trash"></i> Remove item</a>
                                        </div>
                                    </td>

                                    <td>
                                        <i className="fa fa fa-shopping-cart" onClick={() => this.addToCardHandler(this.props.user)}></i> Add to Cart
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

                </div>
            </>
        )
    }
}

export default FavCard
