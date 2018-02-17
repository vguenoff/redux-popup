export const actions = {
  videoUrlUpdate: 'UPDATE_VIDEO_URL',
  videoUrlLoaded: 'VIDEO_URL_LOADED',
};

export const videoUrlUpdate = payload => ({ type: actions.videoUrlUpdate, payload });
export const videoUrlLoaded = () => ({ type: actions.videoUrlLoaded });
