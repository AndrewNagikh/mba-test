/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { types } from './types';

const initState = {
  apiData: {
    isLoad: false,
    data: []
  }
};

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {...state, apiData: {...state.apiData, isLoad: true, data: action.payload}}
    default:
      return state;
  }
};
