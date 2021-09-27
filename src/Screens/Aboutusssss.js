import React, { Component } from "react";
import "./style.css";
import imag from "./normal_056.jpg";
class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="app">
          <div className="card">
            <div className="upper-container">
              <div className="image-container">
                <img src={imag} width="100px" height="100px" />
              </div>
            </div>
            <div className="lower-container">
              <h3>Raneem Abu Jamous </h3>
              <h4> electrical engineer</h4>
              <p> graduated from albalqa university in 23/2/2020 , </p>
              <button>linkedin</button>
            </div>
          </div>
          <div className="card">
            <div className="upper-container">
              <div className="image-container">
                <img src={imag} width="100px" height="100px" />
              </div>
            </div>
            <div className="lower-container">
              <h3>Raneem Abu Jamous </h3>
              <h4> electrical engineer</h4>
              <p> graduated from albalqa university in 23/2/2020 , </p>
              <button>linkedin</button>
            </div>
          </div>{" "}
          <div className="card">
            <div className="upper-container">
              <div className="image-container">
                <img src={imag} width="100px" height="100px" />
              </div>
            </div>
            <div className="lower-container">
              <h3>Raneem Abu Jamous </h3>
              <h4> electrical engineer</h4>
              <p> graduated from albalqa university in 23/2/2020 , </p>
              <button>linkedin</button>
            </div>
          </div>{" "}
          <div className="card">
            <div className="upper-container">
              <div className="image-container">
                <img src={imag} width="100px" height="100px" />
              </div>
            </div>
            <div className="lower-container">
              <h3>Raneem Abu Jamous </h3>
              <h4> electrical engineer</h4>
              <p> graduated from albalqa university in 23/2/2020 , </p>
              <button>linkedin</button>
            </div>
          </div>
          <div className="card">
            <div className="upper-container">
              <div className="image-container">
                <img src={imag} width="100px" height="100px" />
              </div>
            </div>
            <div className="lower-container">
              <h3>Raneem Abu Jamous </h3>
              <h4> electrical engineer</h4>
              <p> graduated from albalqa university in 23/2/2020 , </p>
              <button>linkedin</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
