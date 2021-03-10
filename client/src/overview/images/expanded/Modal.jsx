import React from 'react';
import { ModalBackground } from '../../../globalStyles';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ModalContent from './ModalContent';
import { PhotoArray } from '../../types.js';

const Modal = (props) => {

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      props.setExpandedView(false);
    }
  };

  if (!props.show) { return null; }
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent
        photos={props.photos}
        imageIndex={props.imageIndex}
        zoom={props.zoom}
        setExpandedView={props.setExpandedView}
        setZoomedView={props.setZoomedView}>
      </ModalContent>
    </ModalBackground>
  );
};

Modal.propTypes = {
  photos: PhotoArray,
  imageIndex: PropTypes.number,
  show: PropTypes.bool,
  zoom: PropTypes.bool,
  setExpandedView: PropTypes.func,
  setZoomedView: PropTypes.func
};

export default Modal;