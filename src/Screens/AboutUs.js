import React, { Component } from "react";
import "./styleAboutus.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Row } from "react-bootstrap";

export class AboutUs extends Component {
	render() {
		return (
			<Row>
				<div className="card-about">
					<img
						src="https://ca.slack-edge.com/TNGRRLUMA-U025V7UUV7H-9d7451b854ba-512"
						alt="John"
						// style={{ width: "100%" }}
					/>
					<h3>Ahmad AL-anaswah</h3>
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
				<div className="card-about">
					<img
						src="https://avatars.githubusercontent.com/u/86605101?s=400&u=cde16c11f0beeff914404c46a8449b9f32795fe7&v=4"
						alt="John"
						// style={{ width: "100%" }}
					/>
					<h3>Raneem abu jamous</h3>
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
				<div className="card-about">
					<img
						src="https://ca.slack-edge.com/TNGRRLUMA-U026G5R0Q5S-f97959fdd969-512"
						alt="John"
						// style={{ width: "100%" }}
					/>
					<h3>Saja Malkawi</h3>
					<p className="title">Software Developer</p>
					<p>Mu'tah University</p>
					<div style={{ margin: "24px 0" }}>
						<a href="">
							{/* <i className="fa fa-dribbble"></i> */}
							<AiFillLinkedin />
						</a>
						<a href="">
							<AiFillGithub />

							{/* <i className="fa fa-twitter"></i> */}
						</a>
					</div>
					<p>
						<button>Contact</button>
					</p>
				</div>
				<div className="card-about">
					<img
						src="https://ca.slack-edge.com/TNGRRLUMA-U026374URGE-9fb8685a99d0-512"
						alt="John"
						// style={{ width: "100%" }}
					/>
					<h3>Bilal ELolahi</h3>
					<p className="title">Full Stack developer</p>
					<p>Pheladelfia University</p>
					<div style={{ margin: "24px 0" }}>
						<a href="">
							{/* <i className="fa fa-dribbble"></i> */}
							<AiFillLinkedin />
						</a>
						<a href="https://github.com/BelalElolahi">
							<AiFillGithub />

							{/* <i className="fa fa-twitter"></i> */}
						</a>
					</div>
					<p>
						<button>Contact</button>
					</p>
				</div>
			</Row>
		);
	}
}

export default AboutUs;
