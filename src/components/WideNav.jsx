import React from 'react'
import { SiCircle }from "react-icons/si";

function WideNav() {


  return (
    <div className="nav-container">
      <div className="left-circle">
        <SiCircle />
      </div>
      <div className="flex-start">
        <a href="">Brian Cordisco</a>
      </div>
      <div className="flex-end">
        <a href="">GitHub</a>
        <a href="">Twitter</a>
        <a href="">Linkedin</a>
        <div className="nav-buttons">
          <div className="right-circle">
            <SiCircle />
          </div>
          <button className="button-home">Home</button>
          <button className="button-about">About</button>
        </div>
      </div>
    </div>
  );
}

export default WideNav