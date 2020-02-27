export const urlMap = {
  HOME: '/',
  SEARCH_PAGE: '/search',
  BECOME_HOST: '/becomehost',
  HELP: '/help',
  SIGN_UP: '/signup',
  LOG_IN: '/login'
};

export const urlConstructor = (urlMapString, params) => {
  try {
    let url = urlMapString;
    const keys = Object.keys(params);
    keys.forEach((key) => {
      const paramValue = params[key];
      if (!paramValue) {
        throw new Error(`urlConstructionError @ ${urlMapString}, ${key}: ${paramValue}`);
      }
      const regex = new RegExp(`[:]${key}`, 'gi');
      url = url.replace(regex, paramValue);
    });
    return url;
  } catch (error) {
    return '/404';
  }
};
