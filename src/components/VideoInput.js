import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { string, bool, func } from 'prop-types';
import styled from 'styled-components';

import { videoUrlUpdate } from '../actions/video';

import Input from './shared/Input';

// react-router-redux
// action updates
// func called onChange; if gotoVideo => navigateTo()
const VideoInput = ({ inputValue, gotoVideo, onVideoUrlUpdate }) => (
  <Fragment>
    <Input
      value={inputValue}
      onChange={e => onVideoUrlUpdate(e.target.value)}
    />
    {!gotoVideo &&
      <Warning>
        <p>Please enter a valid youtube url.</p>
      </Warning>
    }
  </Fragment>
);

VideoInput.propTypes = {
  inputValue: string,
  gotoVideo: bool.isRequired,
  onVideoUrlUpdate: func.isRequired,
};

VideoInput.defaultProps = {
  inputValue: '',
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
  gotoVideo: video.gotoVideo,
}), dispatch => bindActionCreators({
  onVideoUrlUpdate: videoUrlUpdate,
}, dispatch))(VideoInput);
