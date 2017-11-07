import globalsAPI from '../api/services/globals';

import {
  REQUEST_GLOBALS_DATA,
  RECEIVE_GLOBALS_DATA
} from './actionTypes';

export function requestGlobalsData () {
  return {
    type: REQUEST_GLOBALS_DATA
  };
}

export function receiveGlobalsData (globals) {
  return {
    type: RECEIVE_GLOBALS_DATA,
    globals
  };
}

export function fetchGlobalsData () {
  debugger
  return (dispatch) => {
    debugger
    dispatch(requestGlobalsData());
    debugger
    return globalsAPI.test()
      .then(response => {
        debugger
        dispatch(receiveGlobalsData(response));
      });
  };
}
