import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li>All Right Reversed &copy;2021</li>
          <li>
            <FaFacebookSquare className="icon" />
          </li>
          <li>
            <SiGmail className="icon" />
          </li>
          <li>
            <AiFillGithub className="icon" />
          </li>
          <li>
            <AiFillLinkedin className="icon" />
          </li>
        </ul>
      </div>
    );
  }
}
export default Footer;
