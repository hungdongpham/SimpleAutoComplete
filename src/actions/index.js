import { createAction } from 'redux-actions';
import * as types from './actionTypes';

const actionInputParser = (inputs, returnMeta = false) => {
  if (inputs === undefined) {
    return undefined;
  }
  if (inputs.meta) {
    const { meta, ...rest } = inputs;
    const payload = rest.error === undefined ? rest : rest.error;
    return returnMeta ? meta : payload;
  }
  return returnMeta ? {} : inputs;
};

const payloadCreator = inputs => actionInputParser(inputs, false);
const metaCreator = inputs => actionInputParser(inputs, true);

////// load all locations //////
export const loadAllLocationsRequest = createAction(
  types.LOAD_ALL_LOCATIONS.REQUEST,
  payloadCreator,
  metaCreator
);
export const loadAllLocationsSuccess = createAction(
  types.LOAD_ALL_LOCATIONS.SUCCESS,
  payloadCreator,
  metaCreator
);
export const loadAllLocationsFailure = createAction(
  types.LOAD_ALL_LOCATIONS.FAILURE,
  payloadCreator,
  metaCreator
);

//// toggle theme //////
export const changeTheme = createAction(
  types.TOGGLE_THEME,
  payloadCreator,
  metaCreator
);
