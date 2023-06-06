import React from "react";
import ftBanner from "../../assets/images/feautres-banner.png";
import "./Features.css";

const Features = () => {
  return (
    <>
      <section className="features" id="features">
        <h1 className="sectionTitle underline">Our Features</h1>
        <div className="container">
          <div className="ftbox ftbox1">
            <div className="ftsubbox1">
              <div className="fticon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className="ftsubboxcontent">
                <h2>Idea & Analysis</h2>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
            <div className="ftsubbox2">
              <div className="fticon">
                <i className="fa-solid fa-palette"></i>
              </div>
              <div className="ftsubboxcontent">
                <h2>Designing</h2>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </div>

          <div className="ftbox ftbox2">
            <img src={ftBanner} alt="" />
          </div>

          <div className="ftbox ftbox3">
            <div className="ftsubbox1">
              <div className="fticon">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="ftsubboxcontent">
                <h2>Developement</h2>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
            <div className="ftsubbox2">
              <div className="fticon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div className="ftsubboxcontent">
                <h2>Testing and Launching</h2>
                <p>
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Features;
