import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const Input = ({ value, onChange, onSubmit }) => (
  <StyledInput>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  </StyledInput>
);

Input.propTypes = {
  value: string,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};

Input.defaultProps = {
  value: '',
};

const StyledInput = styled.div`
  input {
    width: 100%;
    font-size: 1.8rem;
    font-style: italic;
    color: #8e9197;
    padding: 1.7rem;
    border: 0.2rem solid #efefed;
    border-radius: 0.35rem;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }
  }
`;

export default Input;
