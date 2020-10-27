import React from "react";
import "./HomeAbout.css";
import pix from "../assets/undraw-2.svg";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 m5">
              <div className="hxs">
                <div className="home-about-text-container">
                  <div className="home-about-header">
                    <h3>
                      AboutPayMonthly<span>Cars</span>
                    </h3>
                    <p>Our mission is simple</p>
                  </div>
                  <div className="home-about-text-content">
                    <p class="">
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m2">
              <div className="hxs">
                <div className="home-about-image-container">
                  <img src={pix} alt="person" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
