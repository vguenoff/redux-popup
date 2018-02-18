export const actions = {
  videoUrlUpdate: 'VIDEO_URL_UPDATE',
};

export const videoUrlUpdate = payload => dispatch =>
  dispatch({ type: actions.videoUrlUpdate, payload });
