import uuid from 'uuid-v4';
import dateFormat from 'dateformat';

import { actions } from '../actions';

// reducer
const comments = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.addNewComment: {
      const now = new Date();

      return [
        {
          id: uuid(),
          imgUrl: '../assets/jh.jpg',
          userName: 'James Hetfield',
          time: dateFormat(now, 'mmmm d, yyyy, h:MM TT'),
          text: payload,
        },
        ...state,
      ];
    }
    default:
      return state;
  }
};

export default comments;
