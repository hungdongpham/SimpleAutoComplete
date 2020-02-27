// action types
class AsyncActionType {
  constructor(base) {
    this.base = base;
    this.REQUEST = `${base}_REQUEST`;
    this.SUCCESS = `${base}_SUCCESS`;
    this.FAILURE = `${base}_FAILURE`;
  }
}

// connecte router actions
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

// PAGINATION
export const CONFIGURE_PAGINATION = 'SET_PAGINATION';
export const LOAD_PAGINATION = 'LOAD_PAGINATION';

// locations list
export const LOAD_ALL_LOCATIONS = new AsyncActionType('LOAD_ALL_LOCATIONS');
export const TOGGLE_THEME = 'TOGGLE_THEME';