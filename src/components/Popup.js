import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import close from '../assets/close.png';

const Popup = ({ children }) => (
  <PopupWrapper>
    {children}
    <Close />
  </PopupWrapper>
);

Popup.propTypes = {
  children: node.isRequired,
};

const PopupWrapper = styled.div`
  position: relative;
  max-width: 867px;
  background: #fff;
  margin: 4rem auto;
  padding: 3.2rem;
  border-radius: 0.3rem;

  @media (max-width: 910px) {
    width: 95%;
  }
`;

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  top: -1.2rem;
  right: -1.2rem;
  background: url(${close}) center / cover;
  transition: 0.2s all;

  &:hover {
    transform: rotate(90deg);
  }
`;

export default Popup;
