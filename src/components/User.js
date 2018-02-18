import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';

import SocialIcon from './SocialIcon';

import like from '../assets/like.png';
import share from '../assets/share.png';
import comment from '../assets/comment.png';
import report from '../assets/report.png';

import avatarComment from '../assets/jh.jpg';
import avatarReply from '../assets/dm.jpg';

const User = ({
  userName,
  time,
  text,
  reply,
}) => {
  const renderedAvatar = reply ? avatarReply : avatarComment;

  return (
    <StyledUser>
      <img src={renderedAvatar} alt={userName} />
      <span>
        <h1>{userName}</h1>
        <span>{time}</span>
      </span>
      <SocialIconWrapper>
        <p>{text}</p>
        <SocialIcon src={like} value="like" />
        <SocialIcon src={share} value="share" />
        <SocialIcon src={comment} value="comment" />
        <SocialIcon src={report} value="report" />
      </SocialIconWrapper>
    </StyledUser>
  );
};

User.propTypes = {
  userName: string.isRequired,
  time: string.isRequired,
  text: string.isRequired,
  reply: bool,
};

User.defaultProps = {
  reply: false,
};

const StyledUser = styled.div`
  margin-top: 1.5rem;

  > img {
    border-radius: 50%;
    margin: 0 1.3rem 1.7rem 0;
  }
  > span {
    vertical-align: top;
    display: inline-block;
    h1 {
      margin: 0.35rem 0;
      color: #28b7d7;
      font-size: 2.3rem;
    }
    span {
      display: inline-block;
      margin: 0.3rem 0.2rem;
      color: #b5b5b5;
      font-size: 1.1rem;
    }
  }
`;

const SocialIconWrapper = styled.div`
  padding-left: 2rem;
  border-left: 0.6rem solid #e6e6e6;
  border-bottom: 0.15rem solid #e6e6e6;

  p {
    font-size: 1.6rem;
    color: #192a3e;
    display: block !important;
  }

  > span {
    &:last-child {
      float: right;
    }
  }
`;

export default User;
