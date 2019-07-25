import React, { Component } from "react";
import Slider from "react-slick";
import Frame from "./Frame";

export default class CenterMode extends Component {
    renderFrame(i) {
        return <Frame value={i} />;
    }

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
                    {this.renderFrame(0)}
                    {this.renderFrame(1)}
                    {this.renderFrame(2)}
                    {this.renderFrame(3)}
                    {this.renderFrame(4)}
                    {this.renderFrame(5)}
                    {this.renderFrame(6)}
                </Slider>
            </div>
        );
    }
}
