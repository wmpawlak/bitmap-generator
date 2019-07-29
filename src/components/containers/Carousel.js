import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

import PreviewFrame from "../presentational/PreviewFrame";

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

        return (
            <div className="carousel">
                <Slider {...settings}>
                    {this.props.listOfFrames.map((s, i) => (
                        <div key={i}>
                            <PreviewFrame value={i} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listOfFrames: state.reducer.listOfFrames,
});



const ConnectedMultipleItem = connect(
    mapStateToProps,
    null
)(MultipleItems);

export default ConnectedMultipleItem;
