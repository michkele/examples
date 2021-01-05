import { CALL_TEST_FUNC, CALL_TEST_FUNC_VALUE } from './constants';

export function callTestFunc(value) {
  return {
    type: CALL_TEST_FUNC,
    value
  };
}

export function callTestFuncSetValue(value) {
  return {
    type: CALL_TEST_FUNC_VALUE,
    value
  };
}
