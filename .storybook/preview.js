import React from 'react';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '@src/store';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
));
