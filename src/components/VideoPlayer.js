import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import { commentUpdate } from '../actions';

import Popup from './Popup';
import Input from './Input';

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
        <VideoPlayerWrapper>
          <YouTubeWrapper>
            <YouTube videoId={this.props.videoUrl} />
          </YouTubeWrapper>
          <Input
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            onSubmit={this.onCommentSubmit}
          />
          {/* list of comments here */}
        </VideoPlayerWrapper>
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

const VideoPlayerWrapper = styled.div`
  Input {
    margin: 4rem 0;
  }
`;

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
