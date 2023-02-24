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
        <Link to="/">
          <button>
            <AiFillHome className="icon" />
          </button>
        </Link>
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
        <Link to='/cv'>
          <button>
            <AiFillProfile className="icon" />
          </button>
        </Link>
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
