import uuid from 'uuid-v4';
import dateFormat from 'dateformat';

import { actions } from '../actions';

// reducer
const comments = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.commentUpdate: {
      const now = new Date();

      return [
        ...state,
        {
          userName: 'James Hetfield',
          imgUrl: '../assets/jh.jpg',
          id: uuid(),
          inputValue: payload,
          time: dateFormat(now, 'mmmm d, yyyy, h:MM TT'),
        },
      ];
    }
    default:
      return state;
  }
};

export default comments;
