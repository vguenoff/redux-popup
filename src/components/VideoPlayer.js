import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { string, func } from 'prop-types';
// import styled from 'styled-components';

// import { videoUrlLoaded } from '../actions/video';

// import Input from './shared/Input';

class VideoPlayer extends Component {
  // componentWillMount() {
  //   this.props.onVideoUrlLoaded();
  // }

  render() {
    return (
      <Fragment>
        <p>video player</p>
      </Fragment>
    );
  }
}

// VideoPlayer.propTypes = {
//   inputValue: string,
//   videoUrl: string,
//   onVideoUrlUpdate: func.isRequired,
// };

// VideoPlayer.defaultProps = {
//   inputValue: '',
//   videoUrl: null,
// };

// const Warning = styled.div`
//   > p {
//     color: #ea445b;
//     font-size: 1.2rem;
//     margin: 0.4rem;
//   }
// `;

export default connect(({ video }) => ({
  videoUrl: video.videoUrl,
}), {
  // onVideoUrlLoaded: videoUrlLoaded,
})(VideoPlayer);
