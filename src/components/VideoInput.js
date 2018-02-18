import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import styled from 'styled-components';

import { videoUrlUpdate, changeScreen } from '../actions';

import Popup from './Popup';
import Input from './Input';

class VideoInput extends Component {
  componentDidUpdate() {
    const { videoUrl, onChangeScreen } = this.props;

    if (videoUrl) {
      onChangeScreen('/video-player');
    }
  }

  render() {
    const { inputValue, videoUrl, onVideoUrlUpdate } = this.props;

    return (
      <Popup>
        <Input
          onSubmit={e => e.preventDefault()}
          value={inputValue}
          onChange={e => onVideoUrlUpdate(e.target.value)}
        />
        {!videoUrl &&
          <Warning>
            <p>Please enter a valid youtube url.</p>
          </Warning>
        }
      </Popup>
    );
  }
}

VideoInput.propTypes = {
  inputValue: string,
  videoUrl: string,
  onVideoUrlUpdate: func.isRequired,
  onChangeScreen: func.isRequired,
};

VideoInput.defaultProps = {
  inputValue: '',
  videoUrl: null,
};

const Warning = styled.div`
  > p {
    color: #ea445b;
    font-size: 1.2rem;
    margin: 0.4rem;
  }
`;

export default connect(({ video }) => ({
  inputValue: video.inputValue,
  videoUrl: video.videoUrl,
}), {
  onVideoUrlUpdate: videoUrlUpdate,
  onChangeScreen: changeScreen,
})(VideoInput);
