import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';

// add GlobalStyle for every story
const GlobalStyleDecorator = (storyFn) => (
  <div>
    <GlobalStyles />
    <Router>{storyFn()}</Router>
  </div>
);
addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
