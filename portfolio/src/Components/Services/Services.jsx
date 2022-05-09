import React from "react";
import "./Services.css";
import Cards from "../cards/Card";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from '../../img/humble.png'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          nulla.
          <br />
          sisdabsdjhasdjgvasdgavsdhgahsgdahsdcghascdhg
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Cards
            emoji={heartemoji}
            heading={"Design"}
            detail={"Figma, photoshop, draw.io, illustrator"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Cards
            emoji={glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, React-js"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Cards
            emoji={humble}
            heading={"UX/UI"}
            detail={"Professional in UI/UX designing"}
          />
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
