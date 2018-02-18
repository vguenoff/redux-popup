import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const SocialIcon = ({ src, value }) => (
  <StyledSocialIcon>
    <img src={src} alt={value} />
    <span>{value.toUpperCase()}</span>
  </StyledSocialIcon>
);

SocialIcon.propTypes = {
  src: string.isRequired,
  value: string.isRequired,
};

const StyledSocialIcon = styled.span`
  cursor: pointer;
  display: inline-block;
  border: none;
  margin: 1.5rem 0.5rem 1.5rem 0;
  text-align: left;
  padding: 0.5rem;

  > span {
    position: relative;
    top: -0.2rem;
    left: 0.8rem;
    margin-right: 1rem;
  }

  &:hover {
    background: #f5f5ff;
  }
`;

export default SocialIcon;
