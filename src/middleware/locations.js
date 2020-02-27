import { LOAD_ALL_LOCATIONS } from 'actions/actionTypes';
import { getAllLocations } from 'api/locations';
import { loadAllLocationsSuccess, loadAllLocationsFailure } from 'actions';
import { apiPromise } from 'middleware/apiPromise';

export const locations = store => next => (action) => {
  switch (action.type) {
    case LOAD_ALL_LOCATIONS.REQUEST: {
      next(action);
      const { companyId } = action.payload;
      return apiPromise(
        store,
        action,
        getAllLocations,
        [companyId],
        loadAllLocationsSuccess,
        loadAllLocationsFailure
      );
    }
    default:
      next(action);
      return Promise.resolve();
  }
};

export default locations;
