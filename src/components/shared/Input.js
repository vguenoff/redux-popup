import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const Input = ({ value, onChange }) => (
  <StyledInput>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </StyledInput>
);

Input.propTypes = {
  value: string,
  onChange: func.isRequired,
};

Input.defaultProps = {
  value: '',
};

const StyledInput = styled.div`
  > input {
    width: 100%;
    font-size: 1.8rem;
    color: #8e9197;
    padding: 0.4rem;
    border: 0.2rem solid #efefed;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }
  }
`;

export default Input;
