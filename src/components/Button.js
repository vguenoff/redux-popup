import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Button = ({ color, value }) => (
  <StyledButton color={color}>
    {value.toUpperCase()}
  </StyledButton>
);

Button.propTypes = {
  color: string.isRequired,
  value: string.isRequired,
};

const StyledButton = styled.span`
  cursor: pointer;
  color: #fff;
  margin: 1.3rem 0 1.3rem 1rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.3rem;
  float: right;
  background: ${props => props.color};

  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
