import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func, arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

import Input from './Input';
import User from './User';

import { addNewReply } from '../actions';

class Comment extends Component {
  state = {
    inputValue: 'Reply...',
  }

  onReplySubmit = (e) => {
    e.preventDefault();
    const { id } = this.props;

    this.props.onAddNewReply({
      id,
      text: this.state.inputValue,
    });

    this.setState({ inputValue: 'Reply...' });
  }

  render() {
    const {
      id,
      userName,
      time,
      text,
      replies,
    } = this.props;

    const renderedReplies = replies.filter(reply => reply.commentId === id);

    return (
      <StyledComment>
        <User
          id={id}
          userName={userName}
          time={time}
          text={text}
        />
        <ReplyIconWrapper>
          <p>COMMENT</p>
          <p>PHOTO</p>
          <p>FEEDBACK</p>
          <Input
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            onSubmit={e => this.onReplySubmit(e)}
          />
          {renderedReplies.map(reply =>
            (<User
              key={reply.id}
              userName={reply.userName}
              time={reply.time}
              text={reply.text}
              reply
            />),
          )}
        </ReplyIconWrapper>
      </StyledComment>
    );
  }
}

Comment.propTypes = {
  id: string.isRequired,
  userName: string.isRequired,
  time: string.isRequired,
  text: string.isRequired,
  replies: arrayOf(shape({
    id: string.isRequired,
    userName: string.isRequired,
    time: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  onAddNewReply: func.isRequired,
};

const StyledComment = styled.div`
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

const ReplyIconWrapper = styled.div`
  padding-left: 2rem;
  margin-bottom: 2rem;
  border-left: 0.6rem solid #c6c6c6;
  p {
    font-size: 1.3rem;
    display: inline-block;
    margin: 1rem 1rem 1rem 0;
    color: #b4b4b4;

    &:first-child {
      font-weight: bold;
      color: #555555;
    }
  }
`;

export default connect(({ replies }) => ({
  replies,
}), {
  onAddNewReply: addNewReply,
})(Comment);
