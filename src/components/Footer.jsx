import React from "react";
import "../styles/Footer.css";
import WhiteLogo from "../images/White Logo.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-section">
          {/* Your logo shapes go here */}
          <img alt="image" src={WhiteLogo}  className="image"/>
          <div className="intro-text">
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>
        </div>

        <div className="secondd">

        <div className="tech-section">
          <h2>Our Technologies</h2>
          <div className="tech-list">   
            <div>ReactJS</div>
            <div>Gatsby</div>
            <div>NextJS</div>
            <div>NodeJS</div>
            <div>GraphQL</div>
            <div>Laravel</div>
          </div>
        </div>

        <div className="services-section">
          <h2>Our Services</h2>
          <div className="services-list">
            <div>Social Media Marketing</div>
            <div>Web & Mobile App Development</div>
            <div>Data & Analytics</div>
            <div>Google Marketing Solutions</div>
            <div>Search Engine Optimization</div>
          </div>
        </div>

      </div>
      </div>
      <div className="footer-links">
        <div className="link-group">
          <hr />

          <div className="footer" >
            <div>Privacy Policy </div>
            <div>|</div>
            <div> Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
