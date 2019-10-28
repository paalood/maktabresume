import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {/* <img src="" alt=""/> */}
          <ul className="nav-items">
          <li className="nav-item">
              <Link className="link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={0}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={0}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={0}
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
