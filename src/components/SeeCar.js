import React, { Component } from "react";
import "./SeeCar.css";
import image from "../assets/undraw-1.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import $ from "jquery";
class SeeCar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var carouselElems = document.querySelector(".carousel.carousel-slider");
      M.Carousel.init(carouselElems, {
        fullWidth: true,
        indicators: true,
      });
      moveNextCarousel = () => {
        var elems = document.querySelector(".carousel.carousel-slider");
        var moveRight = M.Carousel.getInstance(elems);
        moveRight.next(1);
      };
      movePrevCarousel = () => {
        var elems = document.querySelector(".carousel.carousel-slider");
        var moveLeft = M.Carousel.getInstance(elems);
        moveLeft.prev(1);
      };
    });

    // // move next carousel
    // $(".moveNextCarousel").click(function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   $(".carousel").carousel("next");
    // });
    // // move prev carousel
    // $(".movePrevCarousel").click(function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   $(".carousel").carousel("prev");
    // });
  }
  render() {
    return (
      <section className="seecar">
        <div id="carouselContainer" class="container">
          <div
            className="carousel carousel-slider center "
            data-indicators="true"
          >
            <div className="carousel-item red white-text" href="#one!">
              <h2>First Panel</h2>
              <p class="white-text">This is your first panel</p>
            </div>
            <div className="carousel-item amber white-text" href="#two!">
              <h2>Second Panel</h2>
              <p className="white-text">This is your second panel</p>
            </div>
            <div className="carousel-item green white-text" href="#three!">
              <h2>Third Panel</h2>
              <p className="white-text">This is your third panel</p>
            </div>
            <div className="carousel-item blue white-text" href="#four!">
              <h2>Fourth Panel</h2>
              <p className="white-text">This is your fourth panel</p>
            </div>
          </div>
          <div className="carousel-fixed-item center middle-indicator">
            <div class="left">
              <a
                href="#carouselContainer"
                onclick={this.movePrevCarousel}
                className="middle-indicator-text waves-effect waves-light content-indicator"
              >
                <i className="material-icons left  middle-indicator-text">
                  chevron_left
                </i>
              </a>
            </div>

            <div className="right">
              <a
                href="#carouselContainer"
                onclick={this.moveNextCarousel}
                className="middle-indicator-text waves-effect waves-light content-indicator"
              >
                <i className="material-icons right middle-indicator-text">
                  chevron_right
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>

      // <section id="car-options" className="seecar">
      //   <div className="row rel">
      //     <div className="container">
      //       <h4 class="sect-title center">See Some Car Options</h4>
      //       <div className="carousel carousel-slider hidden-xs">
      //         <div className="carousel-item white-text" href="#one!">
      //           <div className="cars-options-wrapper">
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //           </div>
      //         </div>
      //         <div className="carousel-item white-text" href="#two!">
      //           <div className="cars-options-wrapper">
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //           </div>
      //         </div>
      //       </div>

      //       <div class="carousel carousel-slider visible-xs mbxs">
      //         <div class="carousel-item white-text" href="#one!">
      //           <div class="cars-options-wrapper">
      //             <div class="car-option-block">
      //               <img src={image} alt="car" class="car-block full-width" />
      //             </div>
      //           </div>
      //         </div>
      //         <div class="carousel-item white-text" href="#two!">
      //           <div class="cars-options-wrapper">
      //             <div class="car-option-block">
      //               <img src={image} alt="car" class="car-block full-width" />
      //             </div>
      //           </div>
      //         </div>
      //         <div class="carousel-item white-text" href="#three!">
      //           <div class="cars-options-wrapper">
      //             <div class="car-option-block">
      //               <img src={image} alt="car" class="car-block full-width" />
      //             </div>
      //           </div>
      //         </div>
      //         <div class="carousel-item white-text" href="#four!">
      //           <div class="cars-options-wrapper">
      //             <div class="car-option-block">
      //               <img src={image} alt="car" class="car-block full-width" />
      //             </div>
      //           </div>
      //         </div>
      //         <div class="carousel-item white-text" href="#five!">
      //           <div class="cars-options-wrapper">
      //             <div class="car-option-block">
      //               <img src={image} alt="car" class="car-block full-width" />
      //             </div>
      //           </div>
      //         </div>
      //         <div class="carousel-item white-text" href="#six!">
      //           <div class="cars-options-wrapper">
      //             <div class="car-option-block">
      //               <img src={image} alt="car" class="car-block full-width" />
      //             </div>
      //           </div>
      //         </div>
      //         <div class="carousel-item white-text" href="#seven!">
      //           <div class="cars-options-wrapper">
      //             <div class="car-option-block">
      //               <img src={image} alt="car" class="car-block full-width" />
      //             </div>
      //           </div>
      //         </div>
      //         <div className="carousel-item white-text" href="#eight!">
      //           <div className="cars-options-wrapper">
      //             <div className="car-option-block">
      //               <img
      //                 src={image}
      //                 alt="car"
      //                 className="car-block full-width"
      //               />
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="slider-navigation right-align hidden-xs">
      //         <button className="movePrevCarousel slider-nav-btn">
      //           <i className="material-icons left middle-indicator-text">
      //             chevron_left
      //           </i>
      //         </button>
      //         <button className="moveNextCarousel slider-nav-btn">
      //           <i className="material-icons right middle-indicator-text">
      //             chevron_right
      //           </i>
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}
export default SeeCar;
