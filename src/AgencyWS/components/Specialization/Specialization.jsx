import React from "react";
import "./Specialization.css";

const Specialization = () => {
  return (
    <section className="specialization" id="services">
      <h1 className="sectionTitle underline">Our Specialization</h1>
      <div className="container">
        <div className="spBox">
          <span className="spIcon1">
            <i className="fa-brands fa-searchengin"></i>
          </span>
          <h2>Strategy & Research</h2>
          <p>
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla
            vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum,
            et porttitor.
          </p>
          <span className="spIcon2">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>

        <div className="spBox">
          <span className="spIcon1">
            <i className="fa-solid fa-desktop"></i>
          </span>
          <h2>Web Development</h2>
          <p>
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla
            vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum,
            et porttitor.
          </p>
          <span className="spIcon2">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>

        <div className="spBox">
          <span className="spIcon1">
            <i className="fa-solid fa-earth-asia"></i>
          </span>
          <h2>Web Solution</h2>
          <p>
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla
            vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum,
            et porttitor.
          </p>
          <span className="spIcon2">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
