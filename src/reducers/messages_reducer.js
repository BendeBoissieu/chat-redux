import { FETCH_MESSAGES, MESSAGE_POSTED } from '../actions';

export default function(state, action) {
  if (state === undefined){
    return []
  }
  switch(action.type){
    case 'MESSAGE_LIST':
      return action.payload.messages;
    case 'MESSAGE_POSTED':
      return action.payload.messages;
    case 'SELECTED_CHANNEL': {
      return []; // Channel has changed. Clearing view.
    }
    default:
      return state;
  }
}
