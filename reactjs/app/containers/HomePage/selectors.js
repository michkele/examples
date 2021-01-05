/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectTestValue = () =>
  createSelector(
    selectHome,
    homeState => homeState.testValue,
  );


export { selectHome, makeSelectUsername, makeSelectTestValue };
