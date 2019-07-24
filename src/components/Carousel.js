import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
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
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </Slider>
            </div>
        );
    }
}
