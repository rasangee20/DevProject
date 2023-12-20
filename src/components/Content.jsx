import React from "react";
import topimage from "../images/andy-kelly-0E_vhMVqL9g-unsplash 2.png";
import "../styles/content.css";
import first from "../images/image 2.svg";
import secnond from "../images/image 1.svg";

const Content = () => {
  return (
    <div>
      <div className="contentContainer">
        <img alt="img1" src={topimage} />
        <div className="container1">
          <div className="title">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </div>
          <button className="buttonContainer">
            <div className="buttonText">Get free consultation</div>
          </button>
        </div>
      </div>

      <div className="firstpararaa">
        <div className="firstpararaafirst">
          <img alt="img2" src={first} className="first" />
        </div>

        <div className="firstpararaafirst">
          <div className="firstpara">
            <div className="title-sectionpara">
              <div className="titlepara">Web & Mobile App Development</div>
            </div>
            <div className="descriptionpara">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </div>
            <div className="button-containerpara">
              <div className="buttonpara">LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>

<div className="normal">
      <div className="firstpararaa">

        <div className="firstpararaafirst">
          <div className="firstpara">
            <div className="title-sectionpara">
              <div className="titlepara">Digital Strategy Consulting</div>
            </div>
            <div className="descriptionpara">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </div>
            <div className="button-containerpara">
              <div className="buttonpara">LEARN MORE</div>
            </div>
          </div>
        </div>

        <div className="firstpararaafirst">
          <img alt="img3" src={secnond} className="first" />
        </div>
      </div>
      </div>


<div className="mobile">
<div className="firstpararaa">
        <div className="firstpararaafirst">
        <div className="firstpararaafirst">
          <img alt="img4" src={secnond} className="first" />
        </div>
          <div className="firstpara">
            <div className="title-sectionpara">
              <div className="titlepara">Digital Strategy Consulting</div>
            </div>
            <div className="descriptionpara">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </div>
            <div className="button-containerpara">
              <div className="buttonpara">LEARN MORE</div>
            </div>
          </div>
        </div>
        
      </div>
</div>

    </div>
  );
};

export default Content;
