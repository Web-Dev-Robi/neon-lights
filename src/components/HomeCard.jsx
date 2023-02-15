import React from "react";
import { RiCodeBoxLine } from "react-icons/ri";
import { TfiThemifyFaviconAlt } from "react-icons/tfi";

function HomeCard() {
  return (
    <div>
      <div className="title">
        <div className="title-caption">
          <h1 className="caption">
            "Crafting the Web, <br></br>One Pixel at a Time"
          </h1>
          <p className="moto">
            "Bringing your vision to life with passion and precision! As an avid
            web developer, I'm driven by a relentless passion for coding and a
            hunger to keep learning the latest technologies. Let's collaborate
            to create dynamic, innovative web solutions that are as unique as
            they are impressive."
          </p>
        </div>
        <div className="title-buttons">
          <button className="pink-btn">
            <div className="project-button">
              <div>PROJECTS</div>
              <div className="code-icon">
                <RiCodeBoxLine />
              </div>
            </div>
          </button>
          <button className="dark-btn">
            <div className="blog-button">
              <div>BLOG</div>
              <div className="blog-icon">
                <TfiThemifyFaviconAlt />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
