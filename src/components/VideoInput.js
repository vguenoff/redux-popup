import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import styled from 'styled-components';

import { videoUrlUpdate } from '../actions/video';

import Popup from './Popup';
import Input from './Input';

const VideoInput = ({ inputValue, videoUrl, onVideoUrlUpdate }) => (
  <Popup>
    <Input
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

VideoInput.propTypes = {
  inputValue: string,
  videoUrl: string,
  onVideoUrlUpdate: func.isRequired,
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
})(VideoInput);
