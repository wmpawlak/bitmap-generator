import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { chooseFrame } from '../../actions';

import PreviewFrame from '../presentational/PreviewFrame';

class MultipleItems extends React.Component {
  state = {
    canvas: null
  };

  renderPreviewFrame(i) {
    const mapStateToProps = state => ({
      activeFrame: state.reducer.activeFrameIndex,
      activeFrameData: state.reducer.listOfFrames[i]
    });

    const mapDispatchToProps = {
      chooseFrame
    };

    const ConnectedPreviewFrame = connect(
      mapStateToProps,
      mapDispatchToProps
    )(PreviewFrame);

    return (
      <ConnectedPreviewFrame
        key={new Date() + i}
        index={i}
        canvas={this.state.canvas}
      />
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        canvas: document.querySelector('canvas')
      }));
    }, 0);
  }

  render() {
    const settings = {
      focusOnSelect: false,
      infinite: false,
      centerPadding: '0px',
      slidesToScroll: 1,
      slidesToShow: 4,
      speed: 500,
      variableWidth: true,
      initalSlide: 1
    };

    return (
      <div className="carousel">
        <Slider {...settings}>
          {this.props.listOfFrames.map((s, i) => (
            <div key={i}>{this.renderPreviewFrame(i)}</div>
          ))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listOfFrames: state.reducer.listOfFrames
});

const ConnectedMultipleItem = connect(
  mapStateToProps,
  null
)(MultipleItems);

export default ConnectedMultipleItem;
