import React from 'react';
import styled from 'styled-components';
import { StyleType } from '../types.js';
import ImageList from './ImageList';
import ImageIconList from './ImageIconList';

const ArrowButton = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  cursor: pointer;
  font-size: 2rem;
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: 120px;
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: 1rem;
`;

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      imageIndex: 0,
      thumbnailsIndex: 0
    };
    this.setImageIndex = this.setImageIndex.bind(this);
    this.scrollIconsUp = this.scrollIconsUp.bind(this);
    this.scrollIconsDown = this.scrollIconsDown.bind(this);
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

  render() {
    const style = {
      height: '100%',
      width: '100%',
      backgroundColor: '#ddd',
      position: 'relative'
    };

    let innerComponents;
    if (this.props && this.props.selectedStyle && this.containerRef) {
      const boundingRectangle = this.containerRef.current.getBoundingClientRect();
      const displayWidth = boundingRectangle.width;
      const displayHeight = boundingRectangle.height;
      const imageIndex = this.state.imageIndex;
      const thumbnailsIndex = this.state.thumbnailsIndex;
      const showLeftArrow = this.state.imageIndex > 0;
      const showRightArrow = this.state.imageIndex < this.props.selectedStyle.photos.length - 1;
      innerComponents = (
        <React.Fragment>
          <ImageList
            photos={this.props.selectedStyle.photos}
            displayWidth={displayWidth}
            imageIndex={imageIndex} />
          <ImageIconList
            setImageIndex={this.setImageIndex}
            scrollUp={this.scrollIconsUp}
            scrollDown={this.scrollIconsDown}
            photos={this.props.selectedStyle.photos}
            displayHeight={displayHeight}
            thumbnailsIndex={thumbnailsIndex}
            imageIndex={imageIndex} />
          { showLeftArrow && <ArrowButtonLeft onClick={() => this.previousImage()}>&lt;</ArrowButtonLeft> }
          { showRightArrow && <ArrowButtonRight onClick={() => this.nextImage()} >&gt;</ArrowButtonRight> }
        </React.Fragment>
      );
    } else {
      innerComponents = '';
    }


    return (
      <div
        style={style}
        ref={this.containerRef}>
        {innerComponents}
      </div>
    );
  }

}

ImageGallery.propTypes = {
  selectedStyle: StyleType
};

export default ImageGallery;
