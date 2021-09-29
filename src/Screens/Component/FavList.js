import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
import FavCard from './FavCard'
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export class FavList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favList: [],
    };
  }
  del = (item) => {
    const { user } = this.props.auth0;
    const reqBody = {
      userEmail: user.email,
      imagePath: item.image,
      title: item.title,
      description: item.description,
      price: item.price,
    };
    axios.post(
      `${REACT_APP_BACKEND_URL}/addtofav`,
      reqBody
    ).then((res) => {
      this.getFav();
    });

  }
  getFav = () => {
    const { user } = this.props.auth0;
    axios.get(`${REACT_APP_BACKEND_URL}/getCartFav?email=${user.email}`).then(
      (res) => {
        this.setState({ favList: res.data });
      },
      () => {
        console.log(this.state.favList);
      }
    );
  };
  componentDidMount = async () => {
    this.getFav();
  };
  render() {
    const { user } = this.props.auth0;

    return (
      <div className="profile Cart-container">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-9">
              <div className="ibox">
                <div className="ibox-title">
                  <h5>Items in your Favorite List</h5>
                </div>

                {this.state.favList.map((item) => {
                  return (
                    (<FavCard item={item} del={this.del} user={user} />)
                  );
                })}

                <div className="ibox-content">
                  <Link to="/">
                    <button className="btn btn-white">
                      <i className="fa fa-arrow-left"></i> Continue shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default withAuth0(FavList);
   // <div class="item">
      //   <div class="image">
      //     <img
      //       src={this.props.item.imagePath}
      //       alt=""
      //       style={{ height: "70px" }}
      //     />
      //   </div>
      //   <div class="description">
      //     <span>{this.props.item.title}</span>
      //   </div>
      //   <div class="total-price">{this.props.item.price}</div>
      //   <div class="buttons">
      //     <AiFillDelete
      //       onClick={() => {
      //         this.del();
      //       }}
      //       style={{ cursor: "pointer" }}
      //     />
      //   </div>
      // </div>