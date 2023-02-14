import React from 'react'

function WideNav() {


  return (
      <div className="nav-container">
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
  );
}

export default WideNav