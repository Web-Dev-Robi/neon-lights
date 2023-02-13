import React from "react";
// import styles from './components/Na'

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
          <p>Linkdein</p>
          <p>Profile</p>
          <button className="button-home">Home</button>
          <button className="button-about">About</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
