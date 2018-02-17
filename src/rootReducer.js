import { combineReducers } from 'redux';
import video from './reducers/video';

const rootReducer = combineReducers({
  video,
});

export default rootReducer;
