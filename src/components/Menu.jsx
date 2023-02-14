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
  
  const unClicked = () => {
    setLoading(!load);
    
  }

  function reClicked() {
    setLoading(false);
  
  }

  return (
    <div className="sidebar-nav" tabIndex="0" onBlur={reClicked}>
      <div className="unclicked">
        <button onClick={unClicked}>
          <FaAlignJustify />
        </button>
      </div>
      <div className="clicked" style={{ display: load ? "block" : "none" }}>
        <button>
          <AiFillGithub />
        </button>
        <button>
          <AiFillTwitterCircle />
        </button>
        <button>
          <AiFillLinkedin />
        </button>
        <button>
          <AiFillProfile />
        </button>
        <button>
          <AiFillHome />
        </button>
        <button>
          <SiAboutdotme />
        </button>
      </div>
    </div>
  );
}

export default Menu;
