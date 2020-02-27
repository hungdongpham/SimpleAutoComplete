import { graphQueryPromise  } from './helpers';
import * as LOCATION from 'constants/locationConstants';

const locationFields = [
  LOCATION.ID,
  LOCATION.NAME,
  LOCATION.POPULATION
];


export const getAllLocations = () => {
  const location_fields = locationFields.join(',');

  const query = `{
    countries(where: {name: {eq: "Vietnam"}}) {
      cities {
        ${location_fields}
      }
    }
  }
  `;

  return graphQueryPromise(query);
};
