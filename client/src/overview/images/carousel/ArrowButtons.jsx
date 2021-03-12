import styled from 'styled-components';

const ArrowButton = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  cursor: pointer;
  font-size: 2rem;
  display: ${props => props.show ? 'inline-block' : 'none'};
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: ${props => props.left};
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: 1rem;
`;

export { ArrowButtonLeft, ArrowButtonRight };