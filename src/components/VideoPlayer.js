import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func, arrayOf, shape } from 'prop-types';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import { addNewComment } from '../actions';

import Popup from './Popup';
import Input from './Input';
import SocialIcon from './SocialIcon';
import Button from './Button';
import Comment from './Comment';

import like from '../assets/like.png';
import share from '../assets/share.png';

class VideoPlayer extends Component {
  state = {
    inputValue: 'comment...',
  }

  onCommentSubmit = (e) => {
    e.preventDefault();

    this.props.onAddNewComment(this.state.inputValue);
    this.setState({ inputValue: 'comment...' });
  }

  render() {
    return (
      <Popup>
        <YouTubeWrapper>
          <YouTube videoId={this.props.videoUrl} />
        </YouTubeWrapper>
        <SocialIcon src={like} value="like" />
        <SocialIcon src={share} value="share" />
        <Button color="#ea445b" value="delete" />
        <Button color="#363636" value="edit" />
        <Input
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
          onSubmit={e => this.onCommentSubmit(e)}
        />
        <StyledSeparator />
        {this.props.comments.map(comment =>
          (<Comment
            key={comment.id}
            id={comment.id}
            userName={comment.userName}
            time={comment.time}
            text={comment.text}
          />),
        )}
      </Popup>
    );
  }
}

VideoPlayer.propTypes = {
  videoUrl: string,
  onAddNewComment: func.isRequired,
  comments: arrayOf(shape({
    id: string.isRequired,
    imgUrl: string.isRequired,
    userName: string.isRequired,
    time: string.isRequired,
    text: string.isRequired,
  })).isRequired,
};

VideoPlayer.defaultProps = {
  videoUrl: null,
};

const YouTubeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledSeparator = styled.div`
  width: 100%;
  height: 0.15rem;
  background: #e6e6e6;
  margin: 3rem 0;
`;

export default connect(({ video, comments }) => ({
  videoUrl: video.videoUrl,
  comments,
}), {
  onAddNewComment: addNewComment,
})(VideoPlayer);
