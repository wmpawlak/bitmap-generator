import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
    renderFrame(i) {
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
            <Frame
                {...settings}
                value={i}
                onClick={() => {
                    console.log("clicked frame");
                }}
            />
        );
    }

    render() {
        return (
            <div className="carousel">
                {this.renderFrame(0)}
                {this.renderFrame(1)}
                {this.renderFrame(2)}
                {this.renderFrame(3)}
                {this.renderFrame(4)}
                {this.renderFrame(5)}
                {this.renderFrame(6)}
                {this.renderFrame(7)}
            </div>
        );
    }
}
