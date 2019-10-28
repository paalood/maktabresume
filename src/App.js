import React, { Component } from "react";

import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navbar from "./components/Navbar";

import DownIcon from "./components/DownIcon";
import data from "./data.json";

import { Link, Element } from "react-scroll";

import NavBar, { ElementsWrapper } from "react-scrolling-nav";

import "./App.css";

var Snow = require("react-snow-effect");
class App extends Component {
  render() {
    // const navbarItems = [
    //   {
    //     label: "About",
    //     target: "item-1"
    //   },
    //   {
    //     label: "Skills",
    //     target: "item-2"
    //   }
    // ]
    return (
      <div className="App">
        <Snow />
        <Navbar />
        <Element name="home" className="element">
          <TitlesAndIcons />
        </Element>
        <Element name="about" className="element">
          <AboutSection />
        </Element>
        <Element name="skills" className="element">
          <SkillSection />
        </Element>

        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("im working")}
          />
        </Link>
        {/* <Element name="about" className="element"></Element> */}

        {/* ...................Old Way fullpage first..................... */}
        {/* <div className="fullpage first">
          <h1 className="title">{data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </div> */}

        {/* ...................Old Way fullpage second..................... */}
        {/* <div className="fullpage second">
          <h3>{data.sections[0].title}</h3>
          <div className="paragraphs">
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </div> */}

        {/* ...................Old Way fullpage third..................... */}
        {/* <div className="fullpage third">
          <h3>{data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map(skill => {
              return (
                <div className="card">
                  <div className="image-wrapper">
                    <img src={skill.content.title} />
                  </div>
                  <div className="skill-title-wrapper">
                    <h4>{skill.content.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
