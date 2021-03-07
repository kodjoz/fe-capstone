import React from 'react';
import styled from 'styled-components';
import { StyleType } from '../types.js';
import ImageList from './ImageList';

const ArrowButton = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  cursor: pointer;
  font-size: 2rem;
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: 1rem;
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: 1rem;
`;

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      imageIndex: 0
    };
  }

  componentDidMount() {
    console.log(this.containerRef.current.getBoundingClientRect());
  }

  setImageIndex(index) {
    this.setState({
      imageIndex: index
    });
  }

  nextImage() {
    this.setState((prev) => ({imageIndex: prev.imageIndex + 1}));
  }

  previousImage() {
    this.setState((prev) => ({imageIndex: prev.imageIndex - 1}));
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
      const displayWidth = this.containerRef.current.getBoundingClientRect().width;
      const imageIndex = this.state.imageIndex;
      console.log(`w: ${displayWidth}, i: ${imageIndex}`);
      innerComponents = (
        <React.Fragment>
          <ImageList
            photos={this.props.selectedStyle.photos}
            displayWidth={displayWidth}
            imageIndex={imageIndex} />
          <ArrowButtonLeft onClick={() => this.previousImage()}>&lt;</ArrowButtonLeft>
          <ArrowButtonRight onClick={() => this.nextImage()} >&gt;</ArrowButtonRight>
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
