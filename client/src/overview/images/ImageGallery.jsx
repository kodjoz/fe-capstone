import React from 'react';
// import styled from 'styled-components';
import { StyleType } from '../types.js';
import ImageIconList from './ImageIconList';
import ExpandedCarousel from './expanded/ExpandedCarousel';
// import Modal from './expanded/Modal';
import Carousel from './carousel/Carousel';
// import IconIndicatorList from './expanded/IconIndicatorList';

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      imageIndex: 0,
      thumbnailsIndex: 0,
      zoomedView: false,
      expandedView: false
    };
    this.setImageIndex = this.setImageIndex.bind(this);
    this.scrollIconsUp = this.scrollIconsUp.bind(this);
    this.scrollIconsDown = this.scrollIconsDown.bind(this);
    this.setExpandedView = this.setExpandedView.bind(this);
    this.setZoomedView = this.setZoomedView.bind(this);
    this.walkImage = this.walkImage.bind(this);
  }

  setImageIndex(index) {
    this.setState({ imageIndex: index });
  }

  walkImage(isForward) {
    let step = isForward ? 1 : -1;
    this.setState((prev) => {
      let imageIndex = prev.imageIndex + step;
      let thumbnailIndex = Math.floor(imageIndex / 7);
      return { imageIndex, thumbnailIndex };
    });
  }

  scrollIconsUp() {
    this.setState((prev) => ({thumbnailsIndex: prev.thumbnailsIndex - 1}));
  }

  scrollIconsDown() {
    this.setState((prev) => ({thumbnailsIndex: prev.thumbnailsIndex + 1}));
  }

  setExpandedView(val) {
    this.setState({ expandedView: val });
  }

  setZoomedView(val) {
    this.setState({ zoomedView: val });
  }

  render() {
    const style = {
      height: '100%',
      width: '100%',
      backgroundColor: '#ddd',
      position: 'relative'
    };

    let photos = [];
    let dimensions = {
      width: 100, height: 100
    };

    if (this.props && this.props.selectedStyle && this.containerRef) {
      const container = this.containerRef.current.getBoundingClientRect();
      photos = this.props.selectedStyle.photos;
      dimensions.width = container.width;
      dimensions.height = container.height;
    }

    return (
      <React.Fragment>
        <div style={style} ref={this.containerRef}>
          <Carousel
            cursor={'zoom-in'}
            onImageClick={() => { this.setExpandedView(true); } }
            photos={photos}
            dimensions={dimensions}
            imageIndex={this.state.imageIndex}
            setImageIndex={this.setImageIndex}
            walkImage={this.walkImage} >
            <ImageIconList
              photos={photos}
              imageIndex={this.state.imageIndex}
              setImageIndex={this.setImageIndex}
              scrollUp={this.scrollIconsUp}
              scrollDown={this.scrollIconsDown}
              displayHeight={dimensions.height}
              thumbnailsIndex={this.state.thumbnailsIndex} >
            </ImageIconList>
          </Carousel>
        </div>
        { this.state.expandedView &&
        <ExpandedCarousel
          setExpandedView={this.setExpandedView}
          imageIndex={this.state.imageIndex}
          walkImage={this.walkImage}
          setImageIndex={this.setImageIndex}
          photos={photos} >
        </ExpandedCarousel>
        }
        <button onClick={() => {
          this.setExpandedView(true);
        }}>Expand</button>
      </React.Fragment>
    );
  }

}

ImageGallery.propTypes = {
  selectedStyle: StyleType
};

export default ImageGallery;
