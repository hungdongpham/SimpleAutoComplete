import get from 'lodash/get';
import { LOAD_ALL_LOCATIONS } from '../actions/actionTypes';
import initialState from './initialState';
import * as storeConstants from '../store/constants';

export default function (state = initialState[storeConstants.LOCATIONS], action) {
  switch (action.type) {
    case LOAD_ALL_LOCATIONS.SUCCESS: {
      const countries = get(action, 'payload.countries', []);
      const locations = countries[0].cities;
      return [...locations];
    }
    default:
      return state;
  }
}