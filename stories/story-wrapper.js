import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import AppWrapper from '../src/components/app';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

export default ({ children }) => (
  <Provider store={store}>
    <AppWrapper>
      <div style={{ padding: '10px' }}>
        {children}
      </div>
    </AppWrapper>
  </Provider>
);
