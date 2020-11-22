import React from "react";
import "./CarOption.css";
import image from "../assets/undraw-1.svg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const CarOption = () => {
  return (
    <section id="car-options" className="seecar">
      <div className="row rel">
        <div className="container">
          <h4 className="sect-title center">See Some Car Options</h4>
          <div className="carousel carousel-slider hidden-xs">
            <CarouselProvider
              naturalSlideHeight={100}
              naturalSlideWidth={125}
              totalSlides={2}
            >
              <Slider>
                <Slide index={0}>
                  <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </Slide>
              </Slider>
              <ButtonBack>
                <div className="carousel-btn">Back</div>
              </ButtonBack>
              <ButtonNext>
                <div className="carousel-btn">Next</div>
              </ButtonNext>
            </CarouselProvider>
          </div>

          {/* <div class="carousel carousel-slider visible-xs mbxs">
            <div class="carousel-item white-text" href="#one!">
              <div class="cars-options-wrapper">
                <div class="car-option-block">
                  <img src={image} alt="car" class="car-block full-width" />
                </div>
              </div>
            </div>
            <div class="carousel-item white-text" href="#two!">
              <div class="cars-options-wrapper">
                <div class="car-option-block">
                  <img src={image} alt="car" class="car-block full-width" />
                </div>
              </div>
            </div>
            <div class="carousel-item white-text" href="#three!">
              <div class="cars-options-wrapper">
                <div class="car-option-block">
                  <img src={image} alt="car" class="car-block full-width" />
                </div>
              </div>
            </div>
            <div class="carousel-item white-text" href="#four!">
              <div class="cars-options-wrapper">
                <div class="car-option-block">
                  <img src={image} alt="car" class="car-block full-width" />
                </div>
              </div>
            </div>
            <div class="carousel-item white-text" href="#five!">
              <div class="cars-options-wrapper">
                <div class="car-option-block">
                  <img src={image} alt="car" class="car-block full-width" />
                </div>
              </div>
            </div>
            <div class="carousel-item white-text" href="#six!">
              <div class="cars-options-wrapper">
                <div class="car-option-block">
                  <img src={image} alt="car" class="car-block full-width" />
                </div>
              </div>
            </div>
            <div class="carousel-item white-text" href="#seven!">
              <div class="cars-options-wrapper">
                <div class="car-option-block">
                  <img src={image} alt="car" class="car-block full-width" />
                </div>
              </div>
            </div>
            <div className="carousel-item white-text" href="#eight!">
              <div className="cars-options-wrapper">
                <div className="car-option-block">
                  <img src={image} alt="car" className="car-block full-width" />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="slider-navigation right-align hidden-xs">
            <button className="movePrevCarousel slider-nav-btn">
              <i className="material-icons left middle-indicator-text">
                chevron_left
              </i>
            </button>
            <button className="moveNextCarousel slider-nav-btn">
              <i className="material-icons right middle-indicator-text">
                chevron_right
              </i>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CarOption;
