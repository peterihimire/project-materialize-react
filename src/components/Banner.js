import React, { Component } from "react";
import "./Banner.css";
// import "../../src/index.css";
// import "../App.css";
import M from "materialize-css/dist/js/materialize.min.js";
// import $ from "jquery";

import bannerOne from "../assets/banner-1.svg";
import bannerTwo from "../assets/banner-2.svg";

class Banner extends Component {
  componentDidMount() {
    // header carousel
    const headerCarousel = document.querySelector(".carousel");
    const carouselH = document.querySelector(".carousel.carousel-slider");
    const carouselVx = document.querySelector(
      ".carousel.carousel-slider.visible-xs.mbxs"
    );
    M.Carousel.init(headerCarousel, {});
    M.Carousel.init(carouselH, {
      fullWidth: true,
    });
    M.Carousel.init(carouselVx, {
      fullWidth: false,
    });

    window.onload = function () {
      initCarousel(".carousel", {
        fullWidth: true,
        // indicators: true,
        autoScroll: 5000, // time in ms
      });
    };

    function initCarousel(elms, opts) {
      if (!window || !document) return null;

      const instances = M.Carousel.init(getElements(elms), opts);

      if (Array.isArray(instances)) {
        for (let i = 0; i < instances.length; ++i) {
          addAutoScroll(instances[i]);
        }
      } else {
        addAutoScroll(instances);
      }

      return instances;
    }

    // function destroyCarousel(instances) {
    //   if (!window || !document) return null;

    //   if (Array.isArray(instances)) {
    //     for (let i = 0; i < instances.length; ++i) {
    //       removeAutoScroll(instances[i]);
    //       instances[i].destroy();
    //     }
    //   } else {
    //     removeAutoScroll(instances);
    //     instances.destroy();
    //   }
    // }

    function addAutoScroll(instance) {
      if (!instance.options.autoScroll) return;

      instance.autoScrollIntervalId = window.setInterval(() => {
        instance.next();
      }, instance.options.autoScroll);

      instance.el.addEventListener("mouseover", carouselMouseOverTouchStart, {
        passive: true,
      });
      instance.el.addEventListener("mouseleave", carouselMouseOutTouchEnd, {
        passive: true,
      });
      instance.el.addEventListener("touchstart", carouselMouseOverTouchStart, {
        passive: true,
      });
      instance.el.addEventListener("touchend", carouselMouseOutTouchEnd, {
        passive: true,
      });
    }

    // function removeAutoScroll(instance) {
    //   if (instance.autoScrollIntervalId) {
    //     window.clearInterval(instance.autoScrollIntervalId);
    //     instance.autoScrollIntervalId = undefined;
    //   }

    //   instance.el.removeEventListener("mouseover", carouselMouseOverTouchStart);
    //   instance.el.removeEventListener("mouseleave", carouselMouseOutTouchEnd);
    //   instance.el.removeEventListener(
    //     "touchstart",
    //     carouselMouseOverTouchStart
    //   );
    //   instance.el.removeEventListener("touchend", carouselMouseOutTouchEnd);
    // }

    function carouselMouseOverTouchStart() {
      const instance = M.Carousel.getInstance(this);
      if (!instance) return;

      if (instance.autoScrollIntervalId) {
        window.clearInterval(instance.autoScrollIntervalId);
        instance.autoScrollIntervalId = undefined;
      }
    }

    function carouselMouseOutTouchEnd() {
      const instance = M.Carousel.getInstance(this);
      if (!instance) return;

      if (!instance.autoScrollIntervalId) {
        instance.autoScrollIntervalId = window.setInterval(() => {
          instance.next();
        }, instance.options.autoScroll);
      }
    }

    // if searching for an element by id, insert a # in front of the passed in id
    function getElements(elms) {
      if (elms.charAt(0) === "#") {
        elms = elms.replace("#", "");
        return document.getElementById(elms);
      }

      return document.querySelectorAll(elms);
    }
  }

  render() {
    return (
      <section className="home">
        <div className="row full-height">
          <div className="container full-height">
            <div className="carousel carousel-slider full-height">
              <div className="carousel-item">
                <div className="col s12 pad0 center-xs">
                  <div className="col s12 m6">
                    <div className="main-text-container">
                      <h1>Amazing Experiences from Our Wonderful Customers</h1>
                      <p className="hidden-xs">
                        Here is what customers and vendors are saying about us,
                        you can share your stories with us too.
                      </p>
                      <div className="btn hidden-xs">buy car</div>
                    </div>
                  </div>
                  <div className="col s12 m6">
                    <div className="rel right-align">
                      <img
                        src={bannerTwo}
                        alt="banner-img-1"
                        className="full-width home-img"
                      />
                    </div>
                  </div>
                  <div className="col s12 visible-xs">
                    <p>
                      Here is what customers and vendors are saying about us,
                      you can share your stories with us too.
                    </p>
                    <div className="btn ">buy car</div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col s12 pad0 center-xs">
                  <div className="col s12 m6">
                    <div className="main-text-container">
                      <h1>Amazing Experiences from Our Wonderful Customers</h1>
                      <p className="hidden-xs">
                        Here is what customers and vendors are saying about us,
                        you can share your stories with us too.
                      </p>
                      <div className="btn hidden-xs">buy car</div>
                    </div>
                  </div>
                  <div className="col s12 m6">
                    <div className="rel right-align">
                      <img
                        src={bannerOne}
                        alt="banner-img-1"
                        className="full-width home-img"
                      />
                    </div>
                  </div>
                  <div className="col s12 visible-xs">
                    <p>
                      Here is what customers and vendors are saying about us,
                      you can share your stories with us too.
                    </p>
                    <div className="btn">buy car</div>
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
export default Banner;
