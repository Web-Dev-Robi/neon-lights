import React from "react";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillProfile,
  AiFillHome,
} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaAlignJustify } from "react-icons/fa";
import "./mobile/responsive.css";

function Menu() {
  const [load, setLoading] = useState(false);

  function unClicked() {
    setLoading(!load);
  }

  function reClicked() {
    setLoading(false);
  }

  return (
    <div className="sidebar-nav" tabIndex="0">
      <div className="unclicked">
        <button onClick={unClicked}>
          <FaAlignJustify className="icon" />
        </button>
      </div>
      <div
        className="clicked"
        style={{ display: load ? "block" : "none" }}
        onChange={reClicked}
      >
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
        <button>
          <AiFillHome className="icon" />
        </button>
        <button>
          <SiAboutdotme className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
