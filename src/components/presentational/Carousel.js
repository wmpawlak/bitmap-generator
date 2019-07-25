import React, { Component } from "react";
import Slider from "react-slick";
import Frame from "./Frame";

export default class CenterMode extends Component {

    renderFrame(i) {
        return (
            <div>
                <Frame
                    value={i}
                    onClick={()=>{console.log('click')}}
                />
            </div>);
    }

    render() {
        const settings = {
            focusOnSelect: true,
            infinite: false,
            centerPadding: "0px",
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 500,
            variableWidth: true,
            initalSlide: 1
        };

        return (
            <div className="carousel">
                <Slider
                    {...settings}
                >
                    {this.renderFrame()}

                </Slider>
            </div>
        );
    }
}
