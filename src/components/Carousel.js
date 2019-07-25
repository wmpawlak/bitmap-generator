import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      variableWidth: true,
      initalSlide: 1
    };


    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
          <div>
            5
          </div>
          <div>
            6
          </div>
          <div>
            7
          </div>
          <div>
            8
            </div>
            <div>
            9
            </div>
        </Slider>
      </div>
    );
  }
}