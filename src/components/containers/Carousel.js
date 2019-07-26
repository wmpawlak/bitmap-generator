import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

import Frame from "../presentational/Frame";

class MultipleItems extends React.Component {
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

        const mapStateToProps = state => ({
            length: state.setOfSquares.length
        });

        connect(
            mapStateToProps,
            null
        )(MultipleItems);

        return (
            <div className="carousel">
                <Slider {...settings}>
                    {Array.from({ length: 4 }).map((s, i) => (
                        <div key={i}>{this.renderFrame(i)}</div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default MultipleItems;