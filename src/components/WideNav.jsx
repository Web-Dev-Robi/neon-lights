import React from 'react'

function WideNav() {


  return (
      <div className="nav-container">
        <div className="flex-start">
          <a href="">Brian Cordisco</a>
        </div>
        <div className="flex-end">
          <a href="">GitHub</a>
          <a href="">Twitter</a>
          <a href="">Linkedin</a>
          <a href="">Profile</a>
          <button className="button-home">Home</button>
          <button className="button-about">About</button>
        </div>
      </div>
  );
}

export default WideNav