import React, { Component } from "react";
import "./SeeCar.css";
// import image from "../assets/undraw-1.svg";
import M from "materialize-css/dist/js/materialize.min.js";

class SeeCar extends Component {
  componentDidMount() {
    var carouselElems = document.querySelector(".carousel.carousel-slider");
    var carouselInstance = M.Carousel.init(carouselElems, {
      fullWidth: true,
      indicators: true,
    });
    const moveNextCarousel = () => {
      var elems = document.querySelector(".carousel.carousel-slider");
      var moveRight = M.Carousel.getInstance(elems);
      moveRight.next(1);
    }
    const movePrevCarousel = () => {
      var elems = document.querySelector(".carousel.carousel-slider");
      var moveLeft = M.Carousel.getInstance(elems);
      moveLeft.prev(1);
    }
  }
  render() {
    return (
      <section className="seecar">
        <div id="carouselContainer" class="container">
          <div class="carousel carousel-slider center " data-indicators="true">
            <div class="carousel-fixed-item center middle-indicator">
              <div class="left">
                <a
                  href="#carouselContainer"
                  onclick={this.movePrevCarousel}
                  class="middle-indicator-text waves-effect waves-light content-indicator"
                >
                  <i class="material-icons left  middle-indicator-text">
                    chevron_left
                  </i>
                </a>
              </div>

              <div class="right">
                <a
                  href="#carouselContainer"
                  onclick={this.moveNextCarousel}
                  class="middle-indicator-text waves-effect waves-light content-indicator"
                >
                  <i class="material-icons right middle-indicator-text">
                    chevron_right
                  </i>
                </a>
              </div>
            </div>
            <div class="carousel-item red white-text" href="#one!">
              <h2>First Panel</h2>
              <p class="white-text">This is your first panel</p>
            </div>
            <div class="carousel-item amber white-text" href="#two!">
              <h2>Second Panel</h2>
              <p class="white-text">This is your second panel</p>
            </div>
            <div class="carousel-item green white-text" href="#three!">
              <h2>Third Panel</h2>
              <p class="white-text">This is your third panel</p>
            </div>
            <div class="carousel-item blue white-text" href="#four!">
              <h2>Fourth Panel</h2>
              <p class="white-text">This is your fourth panel</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SeeCar;
