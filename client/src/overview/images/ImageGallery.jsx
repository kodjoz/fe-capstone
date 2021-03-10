import React from 'react';
// import styled from 'styled-components';
import { StyleType } from '../types.js';
import ImageIconList from './ImageIconList';
// import Modal from './expanded/Modal';
import Carousel from './carousel/Carousel';

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
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentDidMount() {
    // console.log(this.containerRef.current.getBoundingClientRect());
  }

  setImageIndex(index) {
    this.setState({
      imageIndex: index
    });
  }

  nextImage() {
    this.setState((prev) => {
      let imageIndex = prev.imageIndex + 1;
      let thumbnailIndex = Math.floor(imageIndex / 7);
      return {
        imageIndex: imageIndex,
        thumbnailsIndex: thumbnailIndex
      };
    });
  }

  previousImage() {
    this.setState((prev) => {
      let imageIndex = prev.imageIndex - 1;
      let thumbnailIndex = Math.floor(imageIndex / 7);
      return {
        imageIndex: imageIndex,
        thumbnailsIndex: thumbnailIndex
      };
    });
  }

  scrollIconsUp() {
    this.setState((prev) => ({thumbnailsIndex: prev.thumbnailsIndex - 1}));
  }

  scrollIconsDown() {
    this.setState((prev) => ({thumbnailsIndex: prev.thumbnailsIndex + 1}));
  }

  setExpandedView(val) {
    this.setState({
      expandedView: val
    });
  }

  setZoomedView(val) {
    this.setState({
      zoomedView: val
    });
  }

  render() {
    const style = {
      height: '100%',
      width: '100%',
      backgroundColor: '#ddd',
      position: 'relative'
    };

    let carousel = '';
    if (this.props && this.props.selectedStyle && this.containerRef) {
      const container = this.containerRef.current.getBoundingClientRect();
      carousel = (
        <Carousel
          photos={this.props.selectedStyle.photos}
          containerWidth={container.width}
          containerHeight={container.height}
          imageIndex={this.state.imageIndex}
          setImageIndex={this.setImageIndex}
          nextImage={this.nextImage}
          previousImage={this.previousImage}>
          <ImageIconList
            photos={this.props.selectedStyle.photos}
            imageIndex={this.state.imageIndex}
            setImageIndex={this.setImageIndex}
            scrollUp={this.scrollIconsUp}
            scrollDown={this.scrollIconsDown}
            displayHeight={container.height}
            thumbnailsIndex={this.state.thumbnailsIndex} >
          </ImageIconList>
        </Carousel>
      );
    }

    return (
      <React.Fragment>
        <div
          style={style}
          ref={this.containerRef}>
          {carousel}
        </div>
      </React.Fragment>
    );
  }

}

ImageGallery.propTypes = {
  selectedStyle: StyleType
};

export default ImageGallery;
