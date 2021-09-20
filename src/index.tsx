import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from '@src/store';
import App from '@src/App';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
