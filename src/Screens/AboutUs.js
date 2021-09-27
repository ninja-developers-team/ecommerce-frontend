import React, { Component } from "react";
import "./styleAboutus.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img
            src="https://ca.slack-edge.com/TNGRRLUMA-U025V7UUV7H-9d7451b854ba-512"
            alt="John"
            style={{ width: "100%" }}
          />
          <h1>Ahmad AL-anaswah</h1>
          <p className="title">full stack developer</p>
          <p>University of Jordan</p>
          <div style={{ margin: "24px 0" }}>
            <a href="https://github.com/Ahmed-Alanaswah">
              {/* <i className="fa fa-dribbble"></i> */}
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-alanasweh/">
              <AiFillLinkedin />
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
        <div className="card">
          <img
            src="https://avatars.githubusercontent.com/u/86605101?s=400&u=cde16c11f0beeff914404c46a8449b9f32795fe7&v=4"
            alt="John"
            style={{ width: "100%" }}
          />
          <h1>Raneem abu jamous</h1>
          <p className="title">Full stack developer</p>
          <p>Albalqa'a University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="https://www.linkedin.com/in/raneem-abu-jamous-231a6020b/">
              {/* <i className="fa fa-dribbble"></i> */}
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/raneemabujamous">
              <AiFillGithub />

              {/* <i className="fa fa-twitter"></i> */}
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
        <div className="card">
          <img
            src="blob:https://web.whatsapp.com/864623cf-fb99-4511-852d-09a35039efad"
            alt="John"
            style={{ width: "100%" }}
          />
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
        <div className="card">
          <img src="/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </>
    );
  }
}

export default AboutUs;
