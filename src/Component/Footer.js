import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";

import { AiFillLinkedin } from "react-icons/ai";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const Footer = () => {
	return (
		<MDBFooter color="blue" className="footer font-small pt-4 ">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol className="first" md="3">
						<h3 className="title">Be Future Ready</h3>
						<p>
							Get exclusive digital marketing updates sraight to your inbox.
						</p>
						<form class="subscribe">
							<input type="text" />
							<br />
							<input type="submit" value="Subscribe" />
						</form>
					</MDBCol>
					<MDBCol md="3">
						<ul>
							<h3 className="title">About</h3>
							<li className="list-unstyled">
								<a href="#!">Our Team</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Clients </a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Press</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Blog</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="3">
						<ul>
							<h3 className="title">Corporate Training</h3>
							<li className="list-unstyled">
								<a href="#!">Leaders</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Practitionres</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="3">
						<ul>
							<h3 className="title">Contact Us</h3>
							<li className="contact-us list-unstyled">
								<FaPhoneAlt />
								<p>+(962)555522200</p>
							</li>
							<li className="contact-us list-unstyled">
								<CgMail />
								<p>stopandShop@gmail.com</p>
							</li>
							<li className="contact-us list-unstyled">
								<AiFillInstagram />
								<p> stopandShop@gmail.com</p>
							</li>
							<li className="contact-us list-unstyled">
								<FaFacebookSquare />

								<p>stopandShop@gmail.com</p>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="https://www.mdbootstrap.com"> StopandShop </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default Footer;
