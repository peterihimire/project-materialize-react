import React, { Component } from "react";
import "./BuyCar.css";
import image from "../assets/undraw-1.svg";

class BuyCar extends Component {
  render() {
    return (
      <section className="buycar">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="col s12 m5 ">
                <div className="hidden-xs">
                  <div className="buycar-image-container">
                    <img src={image} alt="person" width="100%" />
                  </div>
                </div>
              </div>
              <div className="col s12 m5 offset-m2">
                <div className="hxs">
                  <div className="buycar-text-container">
                    <div className="buycar-header">
                      <h3>Buy A Car</h3>
                    </div>
                    <div className="buycar-text-content">
                      <p class="">
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer
                      </p>
                      <p>
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer
                        service, an all round great experience. I would
                        definately be coming back!
                      </p>
                      <p>
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, very good customer
                        service, an all round great experience. I would
                        definately be coming back!
                      </p>
                    </div>
                    <div>
                      <a href='/' className="btn">Buy a car </a>
                    </div>
                  </div>
                  <div className="visible-xs">
                  <div className="buycar-image-container">
                    <img src={image} alt="person" width="100%" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BuyCar;
