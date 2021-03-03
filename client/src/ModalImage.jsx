import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail, Button } from './globalStyles.js';
import styled from 'styled-components';

class ModalImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  displayModal() {
    this.setState({active: !this.state.active});
  }

  render() {
    if (!this.state.active) {
      return (
        <Thumbnail
          src={this.props.src}
          onClick={this.displayModal.bind(this)}
        />
      );
    }
    return (
      <ModalWindow onClick={this.displayModal.bind(this)}>
        <ImageWrapper>
          <PositionedButton>X</PositionedButton>
          <FullImage
            src={this.props.src}
          />
        </ImageWrapper>
      </ModalWindow>
    );
  }
}

const ModalWindow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 40%, 75%)
`;

const PositionedButton = styled(Button)`
  display: inline;
  position: fixed;
  float: right;
  opacity: 75%;
`;

const ImageWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  height: 50%;
  width: 50%;
  border: solid 15px hsl(0, 15%, 99%);
  border-radius: 7px;
`;
const FullImage = styled.img`
  display: inline;
  height: 100%;
  width: 100%;
`;

ModalImage.propTypes = {
  src: PropTypes.string
};

export default ModalImage;
