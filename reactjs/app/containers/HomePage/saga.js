/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CALL_TEST_FUNC } from './constants';
import { callTestFuncSetValue } from './actions';

import request from 'utils/request';

// export function* callLoginFuncSaga() {
//   //check user from api
//   const requestURL = `http://localhost:8080/auth/login`;
//   const data  = { email: 'testuser@test.com', password:  '123456'};
//   try {
//     // Call our request helper (see 'utils/request')
//     const options = {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//     const res = yield call(request, requestURL, options);
//     localStorage.setItem('token', JSON.stringify(res));
//     //yield put(callTestFuncSetValue(action.value));
//   } catch (err) {
//     //yield put(callTestFuncSetValue(action.value));
//   }
// }

// export function* callTestFuncWithTokenSaga(action) {
//   //get tests from api

//   //ex
//   const requestURL = `http://localhost:8080/tests/gettests`;
//   const tokenFromLocalStrorage = localStorage.getItem('token');
//   const tokenForRequest = JSON.parse(tokenFromLocalStrorage);
//   //console.log('tokenFromLocalStrorage: ', JSON.parse(tokenFromLocalStrorage));
//   try {
//     // Call our request helper (see 'utils/request')
//     const options = {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${tokenFromLocalStrorage}`
//       }
//     }
//     const res = yield call(request, requestURL, options);
//     yield put(callTestFuncSetValue(res.testdata));
//   } catch (err) {
//     yield put(callTestFuncSetValue(action.value));
//   }
// }

export function* callTestFuncSaga(action) {
  const requestURL = `http://localhost:8080/tests/gettests`;
  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    yield put(callTestFuncSetValue(res.testdata));
  } catch (err) {
    yield put(callTestFuncSetValue(action.value));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageData() {
  yield takeLatest(CALL_TEST_FUNC, callTestFuncSaga);
}
