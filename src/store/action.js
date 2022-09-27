/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { types } from './types';

export const setData = (apiData) => ({type: types.SET_DATA, payload: apiData})
