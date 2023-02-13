import React from "react";
import {AiFillGithub,AiFillTwitterCircle, AiFillLinkedin,AiFillProfile, AiFillHome,} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import {FaAlignJustify }from "react-icons/fa"

function Nav() {







  return (
    <div className="nav">
      <div className="flex-container">
        <div className="flex-start">
          <p>Brian Cordisco</p>
        </div>
        <div className="flex-end">
          <p>GitHub</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Profile</p>
          <button className="button-home">Home</button>
          <button className="button-about">About</button>
        </div>
      </div>
      <div className="unclicked">
        <i>
          <FaAlignJustify />
        </i>
        <div className="clicked">
          <i>
            <AiFillGithub />
          </i>
          <i>
            <AiFillTwitterCircle />
          </i>
          <i>
            <AiFillLinkedin />
          </i>
          <i>
            <AiFillProfile />
          </i>
          <i>
            <AiFillHome />
          </i>
          <i>
            <SiAboutdotme />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
