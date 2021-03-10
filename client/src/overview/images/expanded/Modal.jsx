import React from 'react';
import { ModalBackground } from '../../../globalStyles';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Modal = (props) => {

  const closeModal = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      props.setExpandedView(false);
    }
  };

  if (!props.show) { return null; }
  return (
    <ModalBackground onClick={closeModal}>

    </ModalBackground>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  zoom: PropTypes.bool,
  setExpandedView: PropTypes.func,
  setZoomedView: PropTypes.func
};

export default Modal;