import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillProfile,
  AiFillHome,
} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import "./mobile/responsive.css";
import { Link } from "react-router-dom";

function Menu() {


  return (
    <div className="sidebar-nav">
      <div className="clicked">
        <button>
          <AiFillHome className="icon" />
        </button>
        <button>
          <a href="https://github.com/desiredstate2021">
            <AiFillGithub className="icon" />
          </a>
        </button>
        <button>
          <a href="https://twitter.com/CordiscoBrian">
            <AiFillTwitterCircle className="icon" />
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/brian-cordisco-500250205/">
            <AiFillLinkedin className="icon" />
          </a>
        </button>
        <button>
          <AiFillProfile className="icon" />
        </button>
        <Link to="aboutme">
          <button>
            <SiAboutdotme className="icon" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
