import { actions } from '../actions';

// helper
const youtubeParser = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[7].length === 11) ? match[7] : null;
};

// reducer
const video = (
  state = {
    inputValue: '',
    videoUrl: '',
  },
  action,
) => {
  const { type, payload } = action;

  switch (type) {
    case actions.videoUrlUpdate: {
      return {
        inputValue: payload,
        videoUrl: youtubeParser(payload),
      };
    }
    default:
      return state;
  }
};

export default video;
