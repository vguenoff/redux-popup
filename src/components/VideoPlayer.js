import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import { commentUpdate } from '../actions';

import Popup from './Popup';
import Input from './Input';
import SocialIcon from './SocialIcon';
import Button from './Button';

import like from '../assets/like.png';
import share from '../assets/share.png';

class VideoPlayer extends Component {
  state = {
    inputValue: 'comment...',
  }

  onCommentSubmit = () => {
    this.props.onCommentUpdate(this.state.inputValue);
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
          onSubmit={this.onCommentSubmit}
        />
        {/* list of comments here */}
      </Popup>
    );
  }
}

VideoPlayer.propTypes = {
  videoUrl: string,
  onCommentUpdate: func.isRequired,
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

export default connect(({ video, comments }) => ({
  videoUrl: video.videoUrl,
  comments,
}), {
  onCommentUpdate: commentUpdate,
})(VideoPlayer);
