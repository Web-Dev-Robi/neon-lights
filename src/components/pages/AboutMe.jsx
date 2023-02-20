import React from "react";
import test from '../assets/testtwo.jpg'

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-me-container">
        <h2>My Story</h2>
        <img src={test} height="500px" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          rerum maiores delectus optio. Nesciunt voluptatibus excepturi esse
          repellat. Exercitationem ab impedit doloribus voluptate labore?
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
