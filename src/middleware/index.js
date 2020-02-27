
import { createTracker } from 'redux-segment';
import { logger } from './logger';
import { ravenMiddleWare } from './sentry';
import { fingerprinter } from './fingerprinter';
import { locations } from './locations';

const segmentTracker = createTracker();

// must be before any content activity; in sort order
const setupMiddleware = [
  segmentTracker,
];

// middleware acting on content; unsorted
const contentMiddleware = [
  locations
];

const middlewares = setupMiddleware.concat(contentMiddleware);
const middlewaresProd = middlewares.concat([ravenMiddleWare]);
const middlewaresDev = middlewares.concat([fingerprinter, logger]);

export default (process.env.NODE_ENV === 'development' ? middlewaresDev : middlewaresProd);
