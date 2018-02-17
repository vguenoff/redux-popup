import { actions } from '../actions/video';
import youtubeParser from '../helpers';

const video = (
  state = {
    inputValue: '',
    videoUrl: '',
    gotoVideo: false,
  },
  action,
) => {
  const { type, payload } = action;

  switch (type) {
    case actions.videoUrlUpdate: {
      return {
        inputValue: payload,
        videoUrl: youtubeParser(payload),
        gotoVideo: !!youtubeParser(payload),
      };
    }
    case actions.videoUrlLoaded: {
      return {
        inputValue: '',
        videoUrl: '',
        gotoVideo: false,
      };
    }

    default:
      return state;
  }
};

export default video;
