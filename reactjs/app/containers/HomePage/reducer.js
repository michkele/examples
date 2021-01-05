/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CALL_TEST_FUNC_VALUE } from './constants';

// The initial state of the App
export const initialState = {
  testValue: ''
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CALL_TEST_FUNC_VALUE:
        draft.testValue = action.value;
        break;
    }
  });

export default homeReducer;
