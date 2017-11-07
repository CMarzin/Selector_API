import { assign } from 'lodash/object';

import {
  REQUEST_GLOBALS_DATA,
  RECEIVE_GLOBALS_DATA
} from '../actions/actionTypes';

const initialState = {};

export default function globals (state = initialState, action) {
  debugger
  switch (action.type) {
    case REQUEST_GLOBALS_DATA:
    debugger
      return assign({}, state, {
        isLoading: true
      });
    case RECEIVE_GLOBALS_DATA:
    debugger
      return assign({}, state,
        action.globals, {
          isLoading: false
        }
      );
    default:
      return state;
  }
}
