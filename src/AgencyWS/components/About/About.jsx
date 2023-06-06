import React from "react";
import aboutBanner from "../../assets/images/about-banner.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <img src={aboutBanner} alt="" />
          <div className="aboutContent">
            <h1 className="sectionTitle underline">Why Our Agency</h1>
            <p>
              In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada
              magna. Nulla vel maximus risus. Donec volutpat metus lacinia risus
              accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit
              amet magna tempus hendrerit ut a odio.
            </p>
            <p>
              Praesent rhoncus commodo tortor, id pulvinar nisl blandit at.
              Nulla facilisi. Quisque turpis ante, vehicula condimentum arcu.
            </p>
            <div className="aboutboxContainer">
              <div className="aboutBox">
                <h1>8561</h1>
                <p>Satisfied Clients</p>
              </div>
              <div className="aboutBox">
                <h1>6893</h1>
                <p>Projects Launched</p>
              </div>
              <div className="aboutBox">
                <h1>5</h1>
                <p>Years Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
