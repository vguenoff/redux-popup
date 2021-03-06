import uuid from 'uuid-v4';
import dateFormat from 'dateformat';

import { actions } from '../actions';

const replies = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.addNewReply: {
      const now = new Date();

      return [
        {
          commentId: payload.id,
          id: uuid(),
          userName: 'Dave Mustaine',
          time: dateFormat(now, 'mmmm d, yyyy, h:MM TT'),
          text: payload.text,
        },
        ...state,
      ];
    }
    default:
      return state;
  }
};

export default replies;
