import React from 'react';
import PropTypes from 'prop-types';
import { PhotoArray } from '../../types';
import Modal from './Modal';
import Carousel from '../carousel/Carousel';
import IconIndicatorList from './IconIndicatorList';

class ExpandedCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.forceUpdate();
  }

  render() {

    const style = {
      height: '100%',
      width: '100%',
      backgroundColor: '#ddd',
      position: 'relative'
    };

    let dimensions = null;

    if (this.containerRef && this.containerRef.current) {
      const container = this.containerRef.current.getBoundingClientRect();
      dimensions = {
        width: container.width,
        height: container.height
      };
    }

    const content = dimensions ? (
      <React.Fragment>
        <Carousel photos={this.props.photos}
          cursor={'cell'}
          dimensions={dimensions}
          imageIndex={this.props.imageIndex}
          walkImage={this.props.walkImage} >
        </Carousel>
        <IconIndicatorList photos={this.props.photos}
          selectedIndex={this.props.imageIndex}
          setImageIndex={this.props.setImageIndex}>
        </IconIndicatorList>
      </React.Fragment>
    ) : '';

    return (
      <Modal setExpandedView={this.props.setExpandedView}>
        <div ref={this.containerRef} style={style}>
          {content}
        </div>
      </Modal>
    );
  }
}

ExpandedCarousel.propTypes = {
  show: PropTypes.bool,
  setExpandedView: PropTypes.func,
  imageIndex: PropTypes.number,
  walkImage: PropTypes.func,
  setImageIndex: PropTypes.func,
  photos: PhotoArray
};

export default ExpandedCarousel;