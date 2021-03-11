import React from 'react';
import { ModalBackground } from '../../../globalStyles';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ModalContent from './ModalContent';

const Modal = (props) => {

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      props.setExpandedView(false);
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent setExpandedView={props.setExpandedView}>
        {props.children}
      </ModalContent>
    </ModalBackground>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  setExpandedView: PropTypes.func
};

export default Modal;