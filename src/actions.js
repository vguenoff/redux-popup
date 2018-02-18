import { push } from 'react-router-redux';

// route change
export const changeScreen = location => dispatch =>
  dispatch(push(location));

// other actions
export const actions = {
  videoUrlUpdate: 'VIDEO_URL_UPDATE',
  commentUpdate: 'COMMENT_UPDATE',
};

export const videoUrlUpdate = payload => dispatch =>
  dispatch({ type: actions.videoUrlUpdate, payload });

export const commentUpdate = payload => dispatch =>
  dispatch({ type: actions.commentUpdate, payload });
