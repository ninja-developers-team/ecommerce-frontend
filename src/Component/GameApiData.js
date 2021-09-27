import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

import { withAuth0 } from "@auth0/auth0-react";
export class GameApiData extends Component {
  render() {
    return this.props.gameApiData.map((obj, idx) => {
      return (
        <>
          <Col lg={3} md={6} sm={6} xs={12}>
            <figure class="snip1171">
              <img src={obj.image} alt="sample71" />
              <div class="price"> {obj.price}</div>
              <figcaption>
                <h6>{obj.title.replace(/[0-9]/g, "")}</h6>
                <p>{obj.description}</p>
                <a href="#" onClick={() => {}}>
                  Add to Cart
                </a>
              </figcaption>
            </figure>
          </Col>
        </>
      );
    });
  }
}

export default withAuth0(GameApiData);
