import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

import Frame from "../presentational/Frame";

class MultipleItems extends React.Component {
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
        console.log(this.props.setOfSquares);
        return (
            <div className="carousel">
                <Slider {...settings}>
                    {this.props.setOfSquares.map((s, i) => (
                        <div key={i}>
                            <Frame value={i} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    setOfSquares: state.assignColor.setOfSquares
});

const ConnectedMultipleItem = connect(
    mapStateToProps,
    null
)(MultipleItems);

export default ConnectedMultipleItem;
