import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errors from './errorReducer';
import loading from './loadingReducer';
import locations from './locationsReducer';
import defaultTheme from './themeReducer';

// right now, we have no way to set themes, so no need to reduce them
const rootReducer = history => combineReducers({
  router: connectRouter(history),
  errors,
  loading,
  locations,
  defaultTheme
});

export default rootReducer;
