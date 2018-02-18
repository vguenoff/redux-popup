import { push } from 'react-router-redux';

// route change
export const changeScreen = location => dispatch =>
  dispatch(push(location));

// other actions
export const actions = {
  videoUrlUpdate: 'VIDEO_URL_UPDATE',
  addNewComment: 'ADD_NEW_COMMENT',
  addNewReply: 'ADD_NEW_REPLY',
};

export const videoUrlUpdate = payload => dispatch =>
  dispatch({ type: actions.videoUrlUpdate, payload });

export const addNewComment = payload => dispatch =>
  dispatch({ type: actions.addNewComment, payload });

export const addNewReply = payload => dispatch =>
  dispatch({ type: actions.addNewReply, payload });
